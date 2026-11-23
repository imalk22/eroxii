// Captures desktop + mobile screenshots of the live web tools → concepts/tools/<id>-<view>.png
const path = require("path"), fs = require("fs");
const { chromium } = require(path.join(process.env.APPDATA, "npm/node_modules/@playwright/cli/node_modules/playwright"));
const SITES = [
  ["tinwise", "https://tinwise.vercel.app", "Calculators"],
  ["genetics", "https://genetics-fitness.vercel.app", "Tools"],
  ["cithub", "https://cit-student-hub.vercel.app"],
  ["bitloom", "https://bitloom.online"],
].filter(s => !process.argv[2] || s[0] === process.argv[2]);
const out = path.join(__dirname, "tools"); fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch();
  for (const [id, url, toolLink] of SITES) {
    for (const [view, vp, dsf, mobile] of [["desk", { width: 1440, height: 900 }, 2, false], ["mob", { width: 390, height: 844 }, 3, true]]) {
      const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: dsf, isMobile: mobile, hasTouch: mobile });
      const page = await ctx.newPage();
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
        await page.waitForTimeout(6000);
        await page.screenshot({ path: path.join(out, `${id}-${view}-1.png`) });
        await page.mouse.wheel(0, vp.height * 0.9); await page.waitForTimeout(2500);
        await page.screenshot({ path: path.join(out, `${id}-${view}-2.png`) });
        if (toolLink && !mobile) {
          // ponytail: tool page found by nav link text; desktop only, mobile reuses its URL
          await page.goto(url); await page.waitForTimeout(1500);
          await page.getByRole("link", { name: toolLink }).first().click(); await page.waitForTimeout(5000);
          await page.screenshot({ path: path.join(out, `${id}-desk-3.png`) });
          fs.writeFileSync(path.join(out, `${id}-toolurl.txt`), page.url());
        }
        if (toolLink && mobile) {
          const u = fs.existsSync(path.join(out, `${id}-toolurl.txt`)) && fs.readFileSync(path.join(out, `${id}-toolurl.txt`), "utf8");
          if (u) { await page.goto(u); await page.waitForTimeout(5000); await page.screenshot({ path: path.join(out, `${id}-mob-3.png`) }); }
        }
        console.log("ok", id, view);
      } catch (e) { console.log("FAIL", id, view, e.message.split("\n")[0]); }
      await ctx.close();
    }
  }
  await browser.close();
})();
