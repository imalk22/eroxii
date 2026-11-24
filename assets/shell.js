// Shared shell: icon sprite, wallpaper, header, footer, theme, toast, WhatsApp + assistant.
// Load synchronously right after <body>; page scripts can then use $, $$, esc, ico, col, io, watch, toast.
(function(){try{const s=localStorage.getItem("theme");if(s)document.documentElement.dataset.theme=s}catch(e){}})();
const PAGES=[["services.html","Services"],["work.html","Work"],["how-we-work.html","How we work"],["about.html","About us"],["index.html#faq","FAQ"],["contact.html","Contact"]];
/* Loading screen: full on the first page of a visit, a quick fade after that. */
(function(){let seen=false;try{seen=sessionStorage.getItem("ld")==="1";sessionStorage.setItem("ld","1")}catch(e){}
  document.body.insertAdjacentHTML("afterbegin",`<div class="loader${seen?" quick":""}" id="loader" role="status" aria-label="Loading"><div class="ld-in">
    <svg class="ld-logo" viewBox="0 0 24 24"><path d="M4 3.2c0-.8.9-1.3 1.6-.9l15.3 8.8c.7.4.7 1.4 0 1.8L5.6 21.7c-.7.4-1.6-.1-1.6-.9v-5.5c0-.4.2-.7.5-.9L10 12 4.5 9.6A1 1 0 0 1 4 8.7Z" fill="url(#ldg)"/><defs><linearGradient id="ldg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c8ff"/><stop offset=".55" stop-color="#7b4dff"/><stop offset="1" stop-color="#ff3dd6"/></linearGradient></defs></svg>
    <div class="ld-word">eroxii</div><div class="ld-bar"><i></i></div></div></div>`);
  const t0=performance.now(),min=seen?0:900;
  const done=()=>{const l=document.getElementById("loader");if(!l||l.classList.contains("out"))return;
    setTimeout(()=>{l.classList.add("out");setTimeout(()=>l.remove(),700)},Math.max(0,min-(performance.now()-t0)))};
  addEventListener("load",done);setTimeout(done,4000);addEventListener("pageshow",e=>{if(e.persisted)done()});
})();
document.body.insertAdjacentHTML("afterbegin",`<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <linearGradient id="brandg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00c8ff"/><stop offset=".55" stop-color="#7b4dff"/><stop offset="1" stop-color="#ff3dd6"/></linearGradient>
    <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34c759" stop-opacity=".28"/><stop offset="1" stop-color="#34c759" stop-opacity="0"/></linearGradient>
  </defs>
  <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/></symbol>
  <symbol id="i-flag" viewBox="0 0 24 24"><path d="M5.5 21V4.5M5.5 4.5h11l-2.2 4 2.2 4h-11"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-11.7 7.1L4 20l1-4A8 8 0 1 1 20 12Z"/></symbol>
  <symbol id="i-pen" viewBox="0 0 24 24"><path d="M4 20l1-4L16 5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z"/><path d="m14 7 3 3"/></symbol>
  <symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 3.5 13.8 9 19.5 11 13.8 13 12 18.5 10.2 13 4.5 11 10.2 9Z"/><path d="M19 3.5v3M17.5 5h3"/></symbol>
  <symbol id="i-browser" viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="15" rx="3"/><path d="M3 9h18"/></symbol>
  <symbol id="i-pos" viewBox="0 0 24 24"><rect x="4" y="3.5" width="16" height="11" rx="2"/><path d="M8 18.5h8M12 14.5v4M3.5 20.5h17"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><rect x="6.5" y="2.5" width="11" height="19" rx="3"/><path d="M10.5 18.5h3"/></symbol>
  <symbol id="i-wrench" viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5Z"/></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24"><path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8Z"/><path d="m3.5 12.5 8.5 4.5 8.5-4.5"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3 5.5 5.8v5c0 4.3 2.8 8 6.5 9.7 3.7-1.7 6.5-5.4 6.5-9.7v-5Z"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24"><path d="M4 19.5h16"/><path d="m5 15 4.5-4.5 3.5 3 6-6.5"/></symbol>
  <symbol id="i-box" viewBox="0 0 24 24"><path d="M20.5 8 12 3.5 3.5 8v8l8.5 4.5 8.5-4.5Z"/><path d="m3.5 8 8.5 4.5L20.5 8M12 12.5v8"/></symbol>
  <symbol id="i-dumbbell" viewBox="0 0 24 24"><path d="M6.5 7v10M3.5 9.5v5M17.5 7v10M20.5 9.5v5M6.5 12h11"/></symbol>
  <symbol id="i-receipt" viewBox="0 0 24 24"><path d="M6 3.5h12v17l-3-2-3 2-3-2-3 2Z"/><path d="M9 8.5h6M9 12h6"/></symbol>
  <symbol id="i-candle" viewBox="0 0 24 24"><path d="M8 3.5v4M8 15.5v5M16 3.5v2M16 13.5v7"/><rect x="6" y="7.5" width="4" height="8" rx="1"/><rect x="14" y="5.5" width="4" height="8" rx="1"/></symbol>
  <symbol id="i-grid" viewBox="0 0 24 24"><rect x="4" y="4" width="6.5" height="6.5" rx="2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="2"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="2"/></symbol>
  <symbol id="i-car" viewBox="0 0 24 24"><path d="M5 16v-5l2-5h10l2 5v5M3.5 16h17v3h-17ZM5 11h14"/></symbol>
  <symbol id="i-cloud" viewBox="0 0 24 24"><path d="M7 18.5a4 4 0 0 1-.5-8A6 6 0 0 1 18 9.5a4.5 4.5 0 0 1-.5 9Z"/></symbol>
  <symbol id="i-cap" viewBox="0 0 24 24"><path d="m2.5 9 9.5-4.5L21.5 9 12 13.5Z"/><path d="M6.5 11v4.5c3 2.4 8 2.4 11 0V11"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.2"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="m4 7.5 8 5.5 8-5.5"/></symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path d="M5 19l1-3.4A7.5 7.5 0 1 1 9 18.6Z"/><path d="M9.5 9.5c.3 2 2.5 4.2 4.5 4.6l1-1.3-1.6-.8-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-.8-1.6Z"/></symbol>
  <symbol id="i-in" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13a2.2 2.2 0 0 1 4.5 0v3"/></symbol>
  <symbol id="i-gh" viewBox="0 0 24 24"><path d="M9 19c-4 1.4-4-2-6-2.5m12 4.5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></symbol>
  <symbol id="i-chev-l" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></symbol>
  <symbol id="i-chev-r" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
  <symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></symbol>
  <symbol id="i-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></symbol>
  <symbol id="i-bag" viewBox="0 0 24 24"><path d="M5 8h14l-1 12.5H6Z"/><path d="M9 10V7a3 3 0 0 1 6 0v3"/></symbol>
  <symbol id="logo" viewBox="0 0 24 24"><path d="M4 3.2c0-.8.9-1.3 1.6-.9l15.3 8.8c.7.4.7 1.4 0 1.8L5.6 21.7c-.7.4-1.6-.1-1.6-.9v-5.5c0-.4.2-.7.5-.9L10 12 4.5 9.6A1 1 0 0 1 4 8.7Z" fill="url(#brandg)" stroke="none"/></symbol>
</svg>
<div class="wall" aria-hidden="true"><span class="orb a"></span><span class="orb b"></span><span class="orb c"></span><span class="orb d"></span></div>
<header class="nav" id="nav"><div class="wrap">
  <a href="index.html" class="brand" aria-label="Eroxii, home"><svg><use href="#logo"/></svg>eroxii</a>
  <nav class="nav-links" aria-label="Pages">${PAGES.map(([h,t])=>`<a href="${h}"${h===document.body.dataset.page+".html"?' aria-current="page"':""}>${t}</a>`).join("")}</nav>
  <div class="nav-right"><button class="icon-btn" id="theme" aria-label="Toggle dark mode"></button><a href="contact.html" class="btn btn-primary btn-sm">Get a quote</a>
    <button class="icon-btn burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button></div>
</div></header>
<div class="menu-dim" id="menuDim"></div>
<nav class="menu" id="menu" aria-label="Menu" aria-hidden="true">${PAGES.map(([h,t],i)=>`<a href="${h}" style="--i:${i}"${h===document.body.dataset.page+".html"?' aria-current="page"':""}>${t}<svg class="i"><use href="#i-chev-r"/></svg></a>`).join("")}
  <a href="contact.html" class="btn btn-primary" style="--i:${PAGES.length}">Get a free quote</a></nav>`);
/* ===== Helpers ===== */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
const ico=n=>`<svg class="i"><use href="#i-${n}"/></svg>`;
const col=c=>c.startsWith("--")?`var(${c})`:c;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"0px 0px -8% 0px",threshold:.08});
const watch=root=>root.querySelectorAll(".r").forEach(el=>io.observe(el));

/* Nav + theme */
const nav=$("#nav");addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>8),{passive:true});
const root=document.documentElement,tb=$("#theme");
const isDark=()=>root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
const syncIcon=()=>tb.innerHTML=ico(isDark()?"sun":"moon");
syncIcon();tb.onclick=()=>{root.dataset.theme=isDark()?"light":"dark";try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}syncIcon()};

/* Mobile menu */
const burger=$("#burger"),menu=$("#menu");
const setMenu=o=>{document.documentElement.classList.toggle("menu-open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu");menu.setAttribute("aria-hidden",!o)};
burger.onclick=()=>setMenu(!document.documentElement.classList.contains("menu-open"));
$("#menuDim").onclick=()=>setMenu(false);
menu.addEventListener("click",e=>{if(e.target.closest("a"))setMenu(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
matchMedia("(min-width:981px)").addEventListener("change",e=>{if(e.matches)setMenu(false)});

/* Copy + toast */
const toast=(t)=>{$("#toastTxt").textContent=t;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),1800)};

document.addEventListener("DOMContentLoaded",()=>{
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap">
  <div class="foot-brand"><a href="index.html" class="brand"><svg><use href="#logo"/></svg>eroxii</a><p>Build · Brand · Scale. Digital marketing, design and web development from Colombo, for clients worldwide.</p></div>
  <div class="foot-cols">
   <div><b>Studio</b><a href="services.html">Services</a><a href="work.html">Work</a><a href="about.html">About us</a><a href="contact.html">Contact</a></div>
   <div><b>Explore</b><a href="work.html#projects">Projects</a><a href="how-we-work.html">How we work</a><a href="index.html#faq">FAQ</a><a href="terms.html">Terms</a><a href="privacy.html">Privacy</a><a href="quote.html">Quotation</a></div>
   <div><b>Connect</b><a href="https://wa.me/94779730549" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:eroxiilk@gmail.com">eroxiilk@gmail.com</a><a href="https://www.linkedin.com/in/imesh-samintha/" target="_blank" rel="noopener">LinkedIn</a><a href="https://github.com/imalk22" target="_blank" rel="noopener">GitHub</a></div>
  </div>
 </div><div class="wrap foot-base"><span>© <span id="yr"></span> Eroxii</span><span><a href="terms.html">Terms</a> · <a href="privacy.html">Privacy</a></span></div></footer>
<div class="bot g" id="bot" role="dialog" aria-label="Eroxii assistant" aria-hidden="true">
  <div class="bot-h"><span class="bot-av"><svg class="i"><use href="#i-spark"/></svg></span>
    <div class="t"><b>Eroxii Assistant</b><span><span class="dot"></span>Online · We reply on WhatsApp</span></div>
    <button class="close" id="botx" aria-label="Close assistant"><svg class="i"><use href="#i-x"/></svg></button></div>
  <div class="bot-log" id="botlog" aria-live="polite"></div>
  <div class="chips" id="chips"></div>
  <form class="bot-in" id="botform" autocomplete="off"><input id="botq" placeholder="Ask about ads, websites, POS…" aria-label="Message"><button aria-label="Send"><svg class="i"><use href="#i-send"/></svg></button></form>
</div>
<div class="dock">
  <div class="nudge g" id="nudge">Hi! Need help growing your business?</div>
  <button class="fab ai" id="botbtn" aria-label="Open assistant" aria-expanded="false"><svg class="i"><use href="#i-spark"/></svg></button>
  <a class="fab wa" href="https://wa.me/94779730549?text=Hi%20Eroxii%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg class="i"><use href="#i-wa"/></svg></a>
</div>
<div class="toast" id="toast" role="status"><svg class="i"><use href="#i-check"/></svg><span id="toastTxt">Copied</span></div>
<div class="toast" id="toast" role="status"><svg class="i"><use href="#i-check"/></svg><span id="toastTxt">Copied</span></div>`);
$$("[data-copy]").forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast("Email copied")}catch(e){location.href="mailto:"+b.dataset.copy}});

/* Assistant: rule-based (no API key in a static site). Unknown questions hand off to WhatsApp with the visitor's text. */
const WA="https://wa.me/94779730549?text=";
const waLink=(t,label="Continue on WhatsApp")=>`<a class="inline" href="${WA+encodeURIComponent(t)}" target="_blank" rel="noopener">${ico("wa")} ${label}</a>`;
const INTENTS=[
  [/^(hi|hello|hey|ayubowan|good (morning|evening|afternoon))\b/i,()=>"Hi! 👋 I'm the Eroxii assistant. Ask me about ads, Facebook pages, design, websites, POS systems or apps."],
  [/price|cost|how much|budget|rate|package|quote/i,()=>`Every project is quoted to its scope, so you never pay for things you don't need. The consultation is free. Tell us what you need and you'll get a clear quote.<br>${waLink("Hi Eroxii, I'd like a quote for: ")}`],
  [/how long|time|when|deadline|fast|weeks?/i,()=>"Most business websites take 2–4 weeks. E-commerce and complex builds take 4–8 weeks. Ad campaigns can usually go live within a few days once your page and creatives are ready."],
  [/\bpos\b|billing|cashier|inventory|barcode|restaurant|pharmacy|shop system/i,()=>"We set up complete POS systems for restaurants, pharmacies, fashion and electronics stores. That covers billing, inventory, barcode and receipt printers, staff training and after-sales support. You can see real screens in the Work section, under POS Systems."],
  [/page|business manager|account|verify|recover|hack|disabled/i,()=>"We handle Facebook page and Business Manager setup, roles, verification and account security, and we help with recovery issues too. If your account is having trouble right now, message us directly.<br>"+waLink("Hi, I need help with my Facebook page/account: ")],
  [/\bads?\b|meta|facebook|instagram|boost|campaign|leads?|sales|tiktok|google/i,()=>"We plan and run Facebook & Instagram campaigns built around your goal, whether that's sales, leads or bookings. We test creatives and audiences, then move budget to what works. Google and TikTok ads are available too. What do you sell, and who's your ideal customer?"],
  [/pattern|print|t-?shirt|tee|textile|fabric|wrapping|repeat/i,()=>"Yes, we design seamless patterns. Send us your icons or logo and we'll turn them into repeats (tossed, half-drop, brick, hexagon, radial and more) for tees, totes, packaging and gift wrap. You get print-ready SVG, PNG and PDF files. There are 20 samples in Work, under Patterns."],
  [/design|post|creative|logo|brand|banner|flyer|story/i,()=>"We design social posts, stories, banners, ad creatives and logos, all in one consistent brand look. There are samples in the Work section, under Branding & Posts and AI Creatives."],
  [/social|content|manage|management|calendar|grow/i,()=>"Social media management includes a content calendar, design, posting, replies to your community and monthly reports. Your pages keep growing while you focus on the business."],
  [/web|site|website|landing|ecommerce|e-commerce|store|wordpress|next/i,()=>"We build fast, SEO-ready websites: business sites, e-commerce, landing pages and booking systems. They're built in Next.js, React or WordPress and connected to tools like WhatsApp, inventory and payments."],
  [/\bapps?\b|mobile|android|\bios\b|flutter/i,()=>"We build iOS and Android apps with Flutter or React Native, and take care of App Store and Play Store submission."],
  [/tool|calculator|dashboard|automation|custom/i,()=>"We build custom web tools like calculators, dashboards and automations. Examples include TinWise (tax calculators in 3 languages) and Genetics Fitness (fitness calculators). Both are in Projects."],
  [/support|maintenance|after|update|host/i,()=>"Yes, we provide ongoing maintenance, updates, hosting help and priority support after launch."],
  [/international|abroad|country|overseas|remote|australia|\buk\b|\busa?\b/i,()=>"Absolutely. We work with clients worldwide, remotely and across time zones."],
  [/contact|whatsapp|call|phone|email|talk|human/i,()=>`You can reach us directly:<br>📞 +94 77 973 0549<br>✉️ eroxiilk@gmail.com<br>${waLink("Hi Eroxii, ")}`],
  [/who|about|founder|experience/i,()=>"Eroxii is a digital studio in Colombo, working with business owners since 2021, covering ads, design, websites and the systems behind them."],
  [/\b(thanks?|thank you|great|cool|ok|okay|nice)\b/i,()=>"You're welcome! Anything else I can help with?"]
];
const CHIPS=["Services","Facebook ads","Website","POS system","Pricing","Talk to us"];
const log=$("#botlog"),bot=$("#bot"),botbtn=$("#botbtn");let botStarted=false;
const add=(html,who)=>{const d=document.createElement("div");d.className="bub "+who;d.innerHTML=html;log.append(d);log.scrollTop=log.scrollHeight;return d};
function reply(q){const typing=document.createElement("div");typing.className="typing";typing.innerHTML="<i></i><i></i><i></i>";log.append(typing);log.scrollTop=log.scrollHeight;
  let a;if(/^services?$|what do you do|offer/i.test(q))a="Here's what we do:<br>• Facebook & Instagram ads<br>• Facebook page management<br>• Social media management<br>• Post & creative design<br>• AI ad creatives<br>• Websites & web apps<br>• POS systems<br>• Mobile apps<br>• Web tools<br>Which one should we talk about?";
  else{const hit=INTENTS.find(([re])=>re.test(q));a=hit?hit[1]():`Good question. I'll pass it to the team so you get an accurate answer.<br>${waLink("Hi Eroxii, "+q)}`}
  setTimeout(()=>{typing.remove();add(a,"them")},650+Math.min(900,a.length*4))}
function ask(q){q=q.trim();if(!q)return;add(esc(q),"me");reply(q)}
$("#chips").innerHTML=CHIPS.map(c=>`<button type="button">${c}</button>`).join("");
$("#chips").addEventListener("click",e=>{const b=e.target.closest("button");if(b)ask(b.textContent==="Talk to us"?"contact":b.textContent)});
$("#botform").addEventListener("submit",e=>{e.preventDefault();ask($("#botq").value);$("#botq").value=""});
function toggleBot(open){bot.classList.toggle("open",open);bot.setAttribute("aria-hidden",!open);botbtn.setAttribute("aria-expanded",open);botbtn.innerHTML=ico(open?"x":"spark");$("#nudge").classList.remove("show");
  if(open&&!botStarted){botStarted=true;setTimeout(()=>add("Hi! 👋 I'm the Eroxii assistant. What would you like to grow: sales, leads or your brand? Pick a topic below or ask me anything.","them"),250)}
  if(open)setTimeout(()=>matchMedia("(pointer:fine)").matches&&$("#botq").focus({preventScroll:true}),300)}
botbtn.onclick=()=>toggleBot(!bot.classList.contains("open"));
$("#botx").onclick=()=>toggleBot(false);
addEventListener("keydown",e=>{if(e.key==="Escape"&&bot.classList.contains("open"))toggleBot(false)});
setTimeout(()=>{if(!botStarted){$("#nudge").classList.add("show");setTimeout(()=>$("#nudge").classList.remove("show"),6000)}},9000);

$("#yr").textContent=new Date().getFullYear();
watch(document);
setTimeout(()=>$$(".page-hero .r").forEach(el=>el.classList.add("in")),60); // reveal page headers even if frames are throttled

/* Contact form (any page with #form) → opens the visitor's email app; no backend */
const form=$("#form");
if(form){
  const sel=$("#f-svc");
  if(sel&&!sel.options.length)sel.innerHTML=SERVICES.map(s=>`<option>${s.t}</option>`).join("")+"<option>Something else</option>";
  const pre=new URLSearchParams(location.search).get("service");if(pre&&sel)sel.value=pre;
  form.addEventListener("submit",e=>{e.preventDefault();
    for(const el of form.querySelectorAll("[required]")){if(!el.value.trim()||(el.type==="email"&&!el.checkValidity())){el.focus();toast(el.type==="email"?"Enter a valid email":"Please fill this in");return}}
    const d=Object.fromEntries(new FormData(form));
    location.href=`mailto:eroxiilk@gmail.com?subject=${encodeURIComponent("Project enquiry: "+d.service)}&body=${encodeURIComponent(`${d.message}\n\n— ${d.name}\n${d.email}`)}`});
}
});
