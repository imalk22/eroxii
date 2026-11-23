// Renders every brand × 6 slides to concepts/out/<id>/<id>-0N.jpg
// Usage: node concepts/render.js [brandId]
const path = require("path"), fs = require("fs");
const { chromium } = require(path.join(process.env.APPDATA, "npm/node_modules/@playwright/cli/node_modules/playwright"));
const vm = require("vm");
const src = fs.readFileSync(path.join(__dirname, "brands.js"), "utf8");
const ctx = {}; vm.runInNewContext(src + ";this.BRANDS=BRANDS", ctx);
const only = process.argv[2];
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 });
  for (const b of ctx.BRANDS) {
    if (only && b.id !== only) continue;
    const dir = path.join(__dirname, "out", b.id); fs.mkdirSync(dir, { recursive: true });
    for (let s = 1; s <= 6; s++) {
      await page.goto("file:///" + path.join(__dirname, "template.html").replace(/\\/g, "/") + `?b=${b.id}&s=${s}`);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(dir, `${b.id}-0${s}.jpg`), type: "jpeg", quality: 88 });
    }
    console.log("done", b.id);
  }
  await browser.close();
})();
