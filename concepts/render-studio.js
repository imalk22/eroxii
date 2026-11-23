// Renders every studio item (tools, logos, flyers, ads, strategy).
// 4K (3840×2160) for LinkedIn → concepts/showcase/4k ; 1920 copies for the website → concepts/showcase/web
// Usage: node concepts/render-studio.js [category]
const path = require("path"), fs = require("fs"), vm = require("vm");
const { chromium } = require(path.join(process.env.APPDATA, "npm/node_modules/@playwright/cli/node_modules/playwright"));
const ctx = {}; vm.runInNewContext(fs.readFileSync(path.join(__dirname, "brands.js"), "utf8") + ";" + fs.readFileSync(path.join(__dirname, "studio-data.js"), "utf8") + ";this.CATS=STUDIO", ctx);
const only = process.argv[2], pad = n => String(n).padStart(2, "0");
const out4k = path.join(__dirname, "studio", "4k"), outWeb = path.join(__dirname, "studio", "web");
fs.mkdirSync(out4k, { recursive: true }); fs.mkdirSync(outWeb, { recursive: true });
(async () => {
  const browser = await chromium.launch();
  const hi = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 3 });
  const lo = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 });
  const url = "file:///" + path.join(__dirname, "studio.html").replace(/\\/g, "/");
  for (const c of ctx.CATS) {
    if (only && c.k !== only) continue;
    for (let i = 1; i <= c.items.length; i++) {
      for (const [page, dir, q] of [[hi, out4k, 92], [lo, outWeb, 84]]) {
        await page.goto(`${url}?c=${c.k}&i=${i}`);
        await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(im => im.decode().catch(() => {}))); });
        await page.screenshot({ path: path.join(dir, `${c.k}-${pad(i)}.jpg`), type: "jpeg", quality: q });
      }
    }
    console.log("done", c.k, c.items.length);
  }
  await browser.close();
})();
