"""Renders Eroxii logo PNGs and the Facebook cover with headless Chrome.

Run:  python brand-assets/build.py      Output: brand-assets/out/*.png
"""
import pathlib, subprocess, shutil

HERE = pathlib.Path(__file__).resolve().parent
OUT = HERE / "out"
CHROME = next(p for p in [r"C:\Program Files\Google\Chrome\Application\chrome.exe",
                          r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
                          shutil.which("chrome") or ""] if p and pathlib.Path(p).exists())

MARK_PATH = "M4 3.2c0-.8.9-1.3 1.6-.9l15.3 8.8c.7.4.7 1.4 0 1.8L5.6 21.7c-.7.4-1.6-.1-1.6-.9v-5.5c0-.4.2-.7.5-.9L10 12 4.5 9.6A1 1 0 0 1 4 8.7Z"
GRAD = ('<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c8ff"/>'
        '<stop offset=".55" stop-color="#7b4dff"/><stop offset="1" stop-color="#ff3dd6"/></linearGradient>')
FONT = ('<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=block" rel="stylesheet">'
        '<style>*{margin:0;padding:0;box-sizing:border-box}html,body{background:transparent}'
        'body{font-family:Inter,"Segoe UI",system-ui,sans-serif;-webkit-font-smoothing:antialiased}</style>')


def mark(size, extra=""):
    # The mark sits in a 24-unit box; trim the empty edge (x 3.5-21.5, y 2-22) so it fills the canvas.
    return f'<svg width="{size}" height="{size}" viewBox="3 2 19.4 20" {extra}><defs>{GRAD}</defs><path fill="url(#g)" d="{MARK_PATH}"/></svg>'


def lockup(h, color):
    # Horizontal logo: mark + lowercase wordmark, as on the website.
    return (f'<div style="display:flex;align-items:center;gap:{h*.14}px;height:{h}px">{mark(h)}'
            f'<span style="font-weight:600;font-size:{h*1.02}px;letter-spacing:-.045em;line-height:1;color:{color};margin-top:-{h*.06}px">eroxii</span></div>')


PIECES = {
    # name: (width, height, transparent?, body)
    "eroxii-logo-mark-2048": (2048, 2048, True,
        f'<div style="width:2048px;height:2048px;display:grid;place-items:center">{mark(1640)}</div>'),
    "eroxii-logo-dark-text": (3200, 1000, True,
        f'<div style="width:3200px;height:1000px;display:grid;place-items:center">{lockup(560, "#0b0b0f")}</div>'),
    "eroxii-logo-white-text": (3200, 1000, True,
        f'<div style="width:3200px;height:1000px;display:grid;place-items:center">{lockup(560, "#ffffff")}</div>'),
    "eroxii-profile-picture": (2048, 2048, False, f'''
<div style="width:2048px;height:2048px;position:relative;overflow:hidden;background:#07070b;display:grid;place-items:center">
  <div style="position:absolute;inset:-20%;background:radial-gradient(40% 40% at 30% 25%,rgba(0,200,255,.35),transparent 70%),radial-gradient(45% 45% at 80% 85%,rgba(255,61,214,.30),transparent 70%),radial-gradient(50% 50% at 50% 50%,rgba(123,77,255,.28),transparent 70%)"></div>
  <div style="position:relative;left:70px">{mark(1060, 'style="filter:drop-shadow(0 30px 80px rgba(123,77,255,.55))"')}</div>
</div>'''),
    # Facebook cover: 1640x624 (2x of 820x312). Phones crop to the centre ~1230x624, so all text stays centred.
    "eroxii-facebook-cover": (1640, 624, False, f'''
<div style="width:1640px;height:624px;position:relative;overflow:hidden;background:#06060a;color:#fff">
  <div style="position:absolute;width:900px;height:900px;left:-260px;top:-420px;border-radius:50%;background:radial-gradient(closest-side,rgba(0,190,255,.55),transparent)"></div>
  <div style="position:absolute;width:860px;height:860px;right:-240px;top:-380px;border-radius:50%;background:radial-gradient(closest-side,rgba(224,64,251,.45),transparent)"></div>
  <div style="position:absolute;width:900px;height:900px;left:420px;bottom:-640px;border-radius:50%;background:radial-gradient(closest-side,rgba(123,77,255,.55),transparent)"></div>
  <div style="position:absolute;width:640px;height:640px;right:120px;bottom:-460px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,159,10,.28),transparent)"></div>
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:56px 56px;mask:radial-gradient(70% 90% at 50% 50%,#000,transparent)"></div>
  <div style="position:relative;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:22px;padding-bottom:10px">
    <div style="opacity:.95">{lockup(64, "#fff")}</div>
    <div style="font-weight:700;font-size:104px;letter-spacing:-.045em;line-height:1">Build. Brand. <span style="background:linear-gradient(90deg,#00c8ff,#7b4dff 55%,#ff3dd6);-webkit-background-clip:text;color:transparent">Scale.</span></div>
    <div style="font-weight:500;font-size:27px;color:rgba(255,255,255,.72);letter-spacing:-.01em">Meta ads · Social media · Design · Websites · POS · Apps</div>
    <div style="display:flex;gap:14px;margin-top:8px;font-weight:600;font-size:22px">
      <span style="padding:11px 22px;border-radius:999px;background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)">eroxii.space</span>
      <span style="padding:11px 22px;border-radius:999px;background:rgba(255,255,255,.1);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)">+94 77 973 0549</span>
    </div>
  </div>
</div>'''),
}


def render(name, w, h, transparent, body, scale):
    src = HERE / f"_{name}.html"
    src.write_text(f"<!doctype html><html><head><meta charset='utf-8'>{FONT}</head><body>{body}</body></html>", encoding="utf-8")
    out = OUT / f"{name}.png"
    args = [CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", f"--window-size={w},{h}",
            f"--force-device-scale-factor={scale}", "--virtual-time-budget=6000", f"--screenshot={out}", src.as_uri()]
    if transparent: args.insert(3, "--default-background-color=00000000")
    subprocess.run(args, check=True, capture_output=True, timeout=120)
    src.unlink()
    return out


if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    for name, (w, h, t, body) in PIECES.items():
        # Facebook cover is rendered at 2x (3280x1248) for a crisp upload; logos are already large.
        p = render(name, w, h, t, body, 2 if "cover" in name else 1)
        print(p.name)
