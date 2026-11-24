"""Writes the SEO head tags for every page, plus sitemap.xml and robots.txt.

Edit PAGES below, then run:  python tools/seo.py   (safe to re-run: it replaces its own block)
"""
import datetime, html, json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = "https://www.eroxii.space"
OG_IMAGE = f"{SITE}/images/og-image.jpg"
START, END = "<!-- seo:start -->", "<!-- seo:end -->"

# file: (title, description, index in search?, sitemap priority)
PAGES = {
    "index.html": ("Eroxii | Web Design & Digital Marketing Agency, Worldwide",
                   "Eroxii is a web design and digital marketing agency working with businesses worldwide, from Sri Lanka to the UK, US, Australia and the Middle East. Ads, social media, websites, POS and apps.", True, "1.0"),
    "services.html": ("Web Design, Facebook Ads & Social Media Services | Eroxii",
                      "Facebook & Instagram ads, social media management, graphic design, AI creatives, website design, POS systems and mobile apps for businesses in any country. Free quote.", True, "0.9"),
    "work.html": ("Portfolio: Websites, Ads & Branding | Eroxii",
                  "Websites, web tools, POS systems, Facebook ad campaigns, branding and AI creatives built by Eroxii for clients in Sri Lanka and around the world.", True, "0.8"),
    "about.html": ("About Eroxii | Global Digital Studio, Based in Sri Lanka",
                   "Meet the Eroxii team: designers, developers and marketers based in Colombo, Sri Lanka, working remotely with businesses worldwide since 2021.", True, "0.7"),
    "how-we-work.html": ("How We Work Remotely With Clients Worldwide | Eroxii",
                         "How Eroxii runs projects for clients in any country and time zone: clear scope, weekly updates over WhatsApp, Zoom or email, a launch checklist and support after launch.", True, "0.6"),
    "contact.html": ("Contact Eroxii | Free Quote for Websites & Ads, Worldwide",
                     "Get a free quote for web design, Facebook ads, social media or a POS system, wherever you are. WhatsApp +94 77 973 0549 or email eroxiilk@gmail.com.", True, "0.8"),
    "terms.html": ("Terms | Eroxii", "The terms for using the Eroxii website and working with the Eroxii studio.", True, "0.2"),
    "privacy.html": ("Privacy Policy | Eroxii", "How Eroxii handles your information, including under Sri Lanka's Personal Data Protection Act, No. 9 of 2022.", True, "0.2"),
    "project.html": (None, None, True, None),     # title/description set per project by the page itself
    "quote.html": ("Quotation | Eroxii", "Create an Eroxii quotation or invoice.", False, None),
    "404.html": ("Page not found | Eroxii", "This page could not be found.", False, None),
}

BUSINESS = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": f"{SITE}/#business",
    "name": "Eroxii",
    "alternateName": "Eroxii Digital Studio",
    "description": "Web design, digital marketing and app development agency based in Colombo, Sri Lanka, serving clients worldwide.",
    "url": f"{SITE}/",
    "logo": f"{SITE}/images/icon-512.png",
    "image": OG_IMAGE,
    "telephone": "+94779730549",
    "email": "eroxiilk@gmail.com",
    "foundingDate": "2021",
    "address": {"@type": "PostalAddress", "addressLocality": "Colombo", "addressCountry": "LK"},
    "areaServed": [{"@type": "Place", "name": "Worldwide"}, {"@type": "Country", "name": "Sri Lanka"}, {"@type": "Country", "name": "United Kingdom"}, {"@type": "Country", "name": "United States"}, {"@type": "Country", "name": "Australia"}, {"@type": "Country", "name": "Canada"}, {"@type": "Country", "name": "United Arab Emirates"}, {"@type": "Country", "name": "Qatar"}, {"@type": "Country", "name": "Saudi Arabia"}, {"@type": "Country", "name": "Maldives"}, {"@type": "Country", "name": "India"}, {"@type": "Country", "name": "Singapore"}],
    "knowsLanguage": ["en", "si", "ta"],
    "contactPoint": {"@type": "ContactPoint", "telephone": "+94779730549", "contactType": "sales",
                     "areaServed": "Worldwide", "availableLanguage": ["English", "Sinhala", "Tamil"]},
}


def services_catalog():
    src = (ROOT / "assets/data.js").read_text(encoding="utf-8")
    names = re.findall(r'\{t:"([^"]+)",c:"[^"]+",i:"[^"]+",d:"([^"]+)"', src.split("const SERVICES=[", 1)[1].split("];", 1)[0])
    return {"@type": "OfferCatalog", "name": "Digital services",
            "itemListElement": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": n, "description": d, "areaServed": "Worldwide"}} for n, d in names]}


def faq():
    src = (ROOT / "assets/data.js").read_text(encoding="utf-8").split("const FAQ=[", 1)[1].split("];", 1)[0]
    pairs = re.findall(r'\["([^"]+)","([^"]+)"\]', src)
    return {"@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in pairs]}


def block(name, title, desc, indexed):
    url = f"{SITE}/" if name == "index.html" else f"{SITE}/{name}"
    e = lambda s: html.escape(s, quote=True)
    tags = []
    if title:
        tags += [f'<link rel="canonical" href="{url}">',
                 '<meta property="og:type" content="website">', '<meta property="og:site_name" content="Eroxii">',
                 '<meta property="og:locale" content="en_US">', '<meta property="og:locale:alternate" content="en_GB">', '<meta property="og:locale:alternate" content="en_LK">',
                 f'<link rel="alternate" hreflang="en" href="{url}">', f'<link rel="alternate" hreflang="x-default" href="{url}">', f'<meta property="og:url" content="{url}">',
                 f'<meta property="og:title" content="{e(title)}">', f'<meta property="og:description" content="{e(desc)}">']
    tags += [f'<meta property="og:image" content="{OG_IMAGE}">', '<meta property="og:image:width" content="1200">',
             '<meta property="og:image:height" content="630">', '<meta name="twitter:card" content="summary_large_image">',
             '<link rel="icon" href="images/favicon.svg" type="image/svg+xml">', '<link rel="icon" href="images/icon-192.png" sizes="192x192">',
             '<link rel="apple-touch-icon" href="images/apple-touch-icon.png">']
    if not indexed:
        tags.append('<meta name="robots" content="noindex">')
    if name == "index.html":
        tags.append('<meta name="msvalidate.01" content="750A2CE731771C964A707BC500D1311F">')  # Bing Webmaster Tools
        biz = dict(BUSINESS, hasOfferCatalog=services_catalog())
        tags.append(f'<script type="application/ld+json">{json.dumps(biz, ensure_ascii=False)}</script>')
        tags.append(f'<script type="application/ld+json">{json.dumps(faq(), ensure_ascii=False)}</script>')
        tags.append('<script type="application/ld+json">' + json.dumps({"@context": "https://schema.org", "@type": "WebSite", "name": "Eroxii",
                    "url": f"{SITE}/", "publisher": {"@id": f"{SITE}/#business"}}) + "</script>")
    return START + "\n" + "\n".join(tags) + "\n" + END


def main():
    for name, (title, desc, indexed, _) in PAGES.items():
        p = ROOT / name; s = p.read_text(encoding="utf-8")
        s = re.sub(re.escape(START) + r".*?" + re.escape(END) + r"\n?", "", s, flags=re.S)
        s = re.sub(r'<meta name="robots" content="noindex">\n?', "", s)
        if title:
            s = re.sub(r"<title>.*?</title>", f"<title>{html.escape(title, quote=False)}</title>", s, count=1)
            if '<meta name="description"' in s:
                s = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{html.escape(desc, quote=True)}">', s, count=1)
            else:
                s = s.replace("</title>", f'</title>\n<meta name="description" content="{html.escape(desc, quote=True)}">', 1)
        s = s.replace("</head>", block(name, title, desc, indexed) + "\n</head>", 1)
        p.write_text(s, encoding="utf-8")

    today = datetime.date.today().isoformat()
    src = (ROOT / "assets/data.js").read_text(encoding="utf-8")
    projects = re.findall(r'\{t:"([^"]+)",k:', src.split("const PROJECTS=[", 1)[1].split("];", 1)[0])
    slug = lambda t: re.sub(r"^-|-$", "", re.sub(r"[^a-z0-9]+", "-", t.lower().replace("&", "and")))
    urls = [(f"{SITE}/" if n == "index.html" else f"{SITE}/{n}", pr) for n, (_, _, ix, pr) in PAGES.items() if ix and pr]
    urls += [(f"{SITE}/project.html?p={slug(t)}", "0.5") for t in projects]
    (ROOT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"  <url><loc>{html.escape(u)}</loc><lastmod>{today}</lastmod><priority>{pr}</priority></url>\n" for u, pr in urls)
        + "</urlset>\n", encoding="utf-8")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /legal-docs/\n\nSitemap: {SITE}/sitemap.xml\n", encoding="utf-8")
    print(f"{len(PAGES)} pages tagged, {len(urls)} URLs in sitemap.xml")


if __name__ == "__main__":
    main()
