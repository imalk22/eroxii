"""Turn team photos into the dark, black-and-white, low-key look of the founder photo.

Usage:
  1. Put original photos in images/team/raw/  (jpg, jpeg, png or webp; file name = person's id, e.g. nimal.jpg)
  2. python tools/team_photos.py
  3. Results are written to images/team/<name>.jpg (800×800) — use that path in TEAM in assets/data.js

Optional: python tools/team_photos.py --focus 0.35   (vertical crop focus: 0 = top, 0.5 = centre; default 0.38 keeps faces in frame)
"""
import sys
from pathlib import Path
from PIL import Image, ImageOps, ImageFilter, ImageEnhance, ImageChops

ROOT = Path(__file__).resolve().parent.parent
RAW, OUT = ROOT / "images/team/raw", ROOT / "images/team"
SIZE = 800


def square_crop(im, focus):
    w, h = im.size
    s = min(w, h)
    left = (w - s) // 2
    top = int(max(0, min(h - s, (h - s) * focus * 2)))  # focus 0.5 → centred
    return im.crop((left, top, left + s, top + s))


def cut_out(im, name):
    """Remove the background (rembg) and put the person on solid black, like the founder photo.
    Masks are cached in images/team/raw/.mask/ (slow to compute); delete one to redo it."""
    cache = RAW / ".mask" / (name + ".png")
    if cache.exists():
        mask = Image.open(cache)
    else:
        from rembg import remove  # pip install "rembg[cpu]"
        mask = remove(im, only_mask=True)
        cache.parent.mkdir(exist_ok=True)
        mask.save(cache)
    black = Image.new("RGB", im.size, 0)
    return Image.composite(im, black, mask)


def subject_crop(im):
    """Square crop framed on the person: head near the top, body centred, same framing for everyone."""
    w, h = im.size
    l, t, r, b = ImageOps.grayscale(im).point(lambda v: 255 if v > 8 else 0).getbbox()
    head = im.crop((0, t, w, t + max(1, (b - t) // 4)))      # top quarter of the subject ≈ head
    hl, _, hr, _ = ImageOps.grayscale(head).point(lambda v: 255 if v > 8 else 0).getbbox() or (l, 0, r, 0)
    side = min(w, h, int((hr - hl) * 2.6))                    # head ≈ 38% of frame width
    cx = (hl + hr) // 2
    top = max(0, t - int(side * 0.12))
    left = max(0, min(w - side, cx - side // 2))
    top = min(top, h - side)
    return im.crop((left, top, left + side, top + side))


def vignette(size, strength=0.95):
    # Radial mask: 255 in the centre, fading to black towards the edges (low-key studio look)
    w = h = size
    small = Image.radial_gradient("L").resize((w, h))          # 0 centre → 255 edge
    small = small.point(lambda v: max(0, min(255, int((v - 70) * 1.9))))  # keep a bright centre
    small = small.filter(ImageFilter.GaussianBlur(size / 18))
    return ImageOps.invert(small).point(lambda v: int(255 - (255 - v) * strength))


def darken(path, focus=0.38, zoom=1.0):
    """zoom < 1 pulls the face back onto a black canvas (for close-up selfies), like a studio portrait."""
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
    im = cut_out(im, Path(path).stem)
    im = square_crop(im, focus) if im.getbbox() is None else subject_crop(im)
    inner = int(SIZE * zoom)
    im = im.resize((inner, inner), Image.LANCZOS)
    g = ImageOps.grayscale(im)
    # Levels from the person only (the black background would skew it): darkest 2% → black,
    # brightest 2% → soft grey 205, so faces glow without blowing out, like the founder photo.
    hist = g.histogram()[9:]
    n, acc, lo, hi = sum(hist), 0, 0, 255
    for v, c in enumerate(hist, 9):
        acc += c
        if acc <= n * 0.02: lo = v
        if acc <= n * 0.98: hi = v
    g = g.point(lambda v: max(0, min(255, int(205 * (max(0, v - lo) / max(1, hi - lo)) ** 1.25))))
    if zoom < 1:
        # feather the pasted photo so its edges dissolve into the black canvas
        g = ImageChops.multiply(g, vignette(inner, 1.0))
        canvas = Image.new("L", (SIZE, SIZE), 0)
        canvas.paste(g, ((SIZE - inner) // 2, int((SIZE - inner) * 0.7)))
        g = canvas
    g = ImageChops.multiply(g, vignette(SIZE))                  # overall low-key fade
    g = ImageEnhance.Sharpness(g).enhance(1.15)
    return g.convert("RGB")


def main():
    focus, zoom = 0.38, 1.0
    if "--focus" in sys.argv:
        focus = float(sys.argv[sys.argv.index("--focus") + 1])
    if "--zoom" in sys.argv:
        zoom = float(sys.argv[sys.argv.index("--zoom") + 1])
    src = [p for p in sorted(RAW.glob("*")) if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}]
    if not src:
        print(f"No photos found. Put originals in {RAW}")
        return
    OUT.mkdir(parents=True, exist_ok=True)
    for p in src:
        out = OUT / (p.stem.lower().replace(" ", "-") + ".jpg")
        darken(p, focus, zoom).save(out, quality=88, optimize=True)
        print(f"{p.name} → {out.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
