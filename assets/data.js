// Shared site content: services, work gallery, projects, skills, FAQ.
const SERVICES=[
  {t:"Facebook & Instagram Ads",c:"--blue",i:"target",d:"Campaigns built around your goal: sales, leads or bookings. We test creatives and audiences, then move budget to what works.",x:"Meta · Google · TikTok ads · Lead generation"},
  {t:"Facebook Page Management",c:"--indigo",i:"flag",d:"Page and Business Manager setup, verification, roles and recovery. Your page stays organised, secure and ready to advertise.",x:"Pages · Business Suite · Account security"},
  {t:"Social Media Management",c:"--pink",i:"chat",d:"A steady content calendar, replies to your community and monthly reports, so your pages keep growing while you run the business.",x:"Content calendar · Community · Reporting"},
  {t:"Post & Creative Design",c:"--purple",i:"pen",d:"Scroll-stopping posts, ad creatives, logos and seamless patterns for tees and packaging, all in one consistent brand look.",x:"Posts · Ad creatives · Logos · Patterns"},
  {t:"AI Ad Creatives",c:"--orange",i:"spark",d:"AI-assisted product shots and ad posters, tested quickly so the winning creative gets the budget.",x:"Product imagery · Ad posters · A/B testing"},
  {t:"Websites & Web Apps",c:"--green",i:"browser",d:"Responsive, SEO-ready sites that turn visitors into customers. Business sites, e-commerce, landing pages and booking.",x:"Next.js · React · WordPress"},
  {t:"POS Systems",c:"--teal",i:"pos",d:"Complete point-of-sale for retail, restaurants and pharmacies: billing, inventory and barcode printing.",x:"Setup · Hardware · Staff training · Support"},
  {t:"Mobile Apps",c:"--red",i:"phone",d:"iOS and Android apps built for performance, from design through to App Store and Play Store release.",x:"Flutter · React Native · Store submission"},
  {t:"Web Tools & Services",c:"--ink-2",i:"wrench",d:"Calculators, dashboards and small tools that bring in customers or save your team hours every week.",x:"Custom tools · Integrations · Automation"}
];
const n=(p,k)=>Array.from({length:k},(_,i)=>`images/${p}-${i+1}`);
const WORK=[
  {k:"web",t:"Websites",items:[...n("web",11)].map((s,i)=>({src:s+(i===1?".jpg":".png"),cap:"Website design & development"}))},
  {k:"concepts",t:"Web Concepts",subs:[
    ["ironcrest","Construction"],["apex","Sports club"],["lotusbay","Resort"],["brightsmile","Dental"],["emberoak","Restaurant"],
    ["northline","Logistics"],["keystone","Real estate"],["voltway","EV dealer"],["petalry","Florist"],["brightpath","Academy"]
  ].map(([id,t])=>({t,items:["Home","Listings","Detail page","Booking","Dashboard","Contact"].map((p,i)=>({src:`concepts/out/${id}/${id}-0${i+1}.jpg`,cap:`Concept · ${t} · ${p}`,wide:true}))}))},
  {k:"ads",t:"Social Ads",items:n("ads",10).map(s=>({src:s+".png",cap:"Social media ad campaign"}))},
  {k:"brand",t:"Branding & Posts",items:n("brand",12).map(s=>({src:s+".png",cap:"Branding & content design"}))},
  {k:"ai",t:"AI Creatives",items:n("ai",5).map(s=>({src:s+".jpg",cap:"AI ad creative"}))},
  {k:"pos",t:"POS Systems",subs:[
    {t:"Restaurant",items:["Dashboard","Order management","POS interface","Purchases","Reservations","Restaurant website"].map((c,i)=>({src:`images/pos-restaurant-${i+1}.jpg`,cap:"Restaurant POS · "+c}))},
    {t:"Pharmacy",items:["Dashboard","POS","Sales history","Profit & loss","Cash management","Thermal invoice"].map((c,i)=>({src:`images/pos-pharmacy-${i+1}.png`,cap:"Pharmacy POS · "+c}))},
    {t:"Fashion",items:["Dashboard","Products","Add product","Warehouses"].map((c,i)=>({src:`images/pos-fashion-${i+1}.png`,cap:"Fashion POS · "+c}))},
    {t:"Electronics",items:["Dashboard","Orders","Invoices","Customers"].map((c,i)=>({src:`images/pos-electronics-${i+1}.jpg`,cap:"Electronics POS · "+c}))}
  ]},
  {k:"mobile",t:"Mobile Apps",items:n("mobile",8).map(s=>({src:s+".png",cap:"Mobile app design"}))},
  // Studio sets rendered by concepts/render-studio.js
  ...[["tools","Web Tools",9,"Live web tool"],["logos","Logo Concepts",10,"Concept · Logo design"],["patterns","Patterns",20,"Concept · Pattern design"],["flyers","Flyers",6,"Concept · Flyer design"],
      ["fbads","Ad Concepts",8,"Concept · Facebook ad"],["strategy","Ad Strategy",9,"Eroxii playbook · Facebook ads"]]
    .map(([k,t,c,cap])=>({k,t,studio:true,items:Array.from({length:c},(_,i)=>({src:`concepts/studio/web/${k}-${String(i+1).padStart(2,"0")}.jpg`,cap,wide:true}))}))
];
// Gallery shows the Eroxii showcase slides (rendered by concepts/render-showcase.js), in the same order as the raw images.
{const ORDER=["web","tools","concepts","pos","mobile","ads","fbads","strategy","brand","logos","patterns","flyers","ai"];WORK.sort((a,b)=>ORDER.indexOf(a.k)-ORDER.indexOf(b.k))}
WORK.forEach(w=>{if(w.k==="concepts"||w.studio)return;let i=0;(w.subs?w.subs.flatMap(s=>s.items):w.items).forEach(it=>{it.src=`concepts/showcase/web/${w.k}-${String(++i).padStart(2,"0")}.jpg`;it.wide=true})});
const REEL1=["web-3.png","brand-3.png","pos-restaurant-1.jpg","ads-2.png","mobile-1.png","ai-1.jpg","web-9.png"];
const REEL2=["brand-7.png","pos-pharmacy-1.png","mobile-6.png","brand-11.png","web-5.png","pos-electronics-3.jpg","ai-3.jpg"];
const PROJECTS=[
  {t:"HDB",k:"Engineering company website",cat:"client",c:"--blue",i:"box",d:"Product website for an engineering firm. Stock and product details sync automatically from Zoho Inventory.",
   pts:["Planned the site structure with the client around how customers actually search.","Connected to Zoho Inventory so products and stock update automatically, with no manual edits.","Fast Next.js build that presents the full product range."],tags:["Next.js","Zoho Inventory API"]},
  {t:"Genetics Fitness",k:"Gym website",cat:"client",c:"--red",i:"dumbbell",url:"https://genetics-fitness.vercel.app",gh:"Genetics-Fitness",d:"Modern gym site with trainer profiles, a gallery and free fitness calculators that keep visitors engaged.",
   pts:["Trainer profiles, services and a photo gallery.","BMI, daily calorie, calories burned, ideal weight and one-rep max calculators.","Saveable workout checklist and instant WhatsApp booking."],tags:["Next.js","TypeScript","Tailwind"]},
  {t:"Bitloom",k:"Trading platform",cat:"product",c:"--orange",i:"candle",url:"https://bitloom.online",gh:"Bitloom-Trading_Platform",d:"A trading platform website, live in production at bitloom.online.",
   pts:["Designed and built the product's public web presence.","Live at bitloom.online."],tags:["JavaScript","Web"]},
  {t:"TinWise",k:"Tax guide & calculators",cat:"product",c:"--green",i:"receipt",url:"https://tinwise.vercel.app",gh:"tinwise",d:"Free Sri Lanka TIN guide and tax calculators in English, Sinhala and Tamil.",
   pts:["Checks whether you need a TIN and walks you through registration step by step.","APIT, EPF, income tax, CGT and VAT calculators.","Fully trilingual: English, සිංහල and தமிழ்."],tags:["TypeScript","i18n"]},
  {t:"Trading Management",k:"Crypto trading dashboard",cat:"product",c:"--indigo",i:"chart",gh:"Trading-Management",d:"A no-signup dashboard where traders can review decisions and stay disciplined, all in one place.",
   pts:["Live markets, plus a trade analyzer that checks each trade against your strategy.","Trade journal with portfolio profit/loss and risk tracking.","Strategy library, news and an economic calendar."],tags:["Next.js 15","TypeScript"]},
  {t:"Promptory",k:"AI prompt library",cat:"product",c:"--pink",i:"spark",gh:"Promptory",d:"A searchable library of AI prompts for video, image and ads, with a realtime prompt agent for creators.",
   pts:["Master prompts and workflows for AI video, image and ad creative.","Realtime prompt agent that helps creators refine their output."],tags:["JavaScript","AI"]},
  {t:"CIT Student Hub",k:"Student web app",cat:"product",c:"--teal",i:"grid",url:"https://cit-student-hub.vercel.app",gh:"CIT-Student-Hub",d:"A central hub for student resources, live on Vercel.",
   pts:["Brings student resources together in one web app.","Live on Vercel."],tags:["JavaScript","Vercel"]},
  {t:"ExamLens",k:"Results analytics",cat:"product",c:"--blue",i:"chart",gh:"examlens",d:"Merges messy Excel and CSV result sheets into one clean dataset, then shows where students need help.",
   pts:["Cleans and merges inconsistent result sheets automatically.","Pass rates, subject difficulty, repeat attempts and at-risk students.","Student profiles and certificate printing onto pre-printed stock."],tags:["Python","Streamlit"]},
  {t:"NFT Generator",k:"Generative collection tool",cat:"client",c:"--orange",i:"layers",gh:"NFTGenerator-Generative_NFT_Collection_Tool",d:"Combines weighted trait layers into thousands of unique NFT images, with rarity control.",
   pts:["Composites background, body, eyes and accessory layers.","Weighted rarity per trait.","Outputs ERC-721-style metadata that's ready for launch."],tags:["Python","NFT"]},
  {t:"Project Ezekiel",k:"Behaviour profiling · Team",cat:"security",c:"--indigo",i:"shield",d:"Detects unusual behaviour on IoT networks and endpoints using a One-Class SVM model.",
   pts:["Model trained on the CICIDS 2017 and ToN_IoT datasets.","Built the Supabase tables and fixed the row-level security issues.","Python agents send data from Windows and Kali Linux machines.","PowerShell automates agent install and service setup."],tags:["Python","Supabase","OSquery"]},
  {t:"PitLane Software",k:"SaaS business · Team",cat:"security",c:"--red",i:"car",d:"A company website for AutoServe, a white-label vehicle service booking platform for garages.",
   pts:["Wrote the Value Proposition Canvas and Capital Required sections of the business plan.","Three pricing plans, checkout with GST and invoice generation.","Interactive demo, live chat and a customer dashboard."],tags:["React","TypeScript","Vite"]},
  {t:"Cloud & Virtualisation",k:"Azure · Docker · Hyper-V",cat:"security",c:"--teal",i:"cloud",d:"Windows Server on Azure, WordPress in Docker, and a high-availability Hyper-V cluster.",
   pts:["Windows Server 2022 deployed on Microsoft Azure.","Migrated WordPress into Docker and published the image to Docker Hub.","A Hyper-V high-availability cluster that keeps services running if a server fails."],tags:["Azure","Docker","Hyper-V"]}
];
const SKILLS=["Meta Ads","Google Ads","Audience Targeting","Business Manager","Content Design","Next.js","React","TypeScript","WordPress","Supabase","Docker","Azure","Python","Git","Access Control","Endpoint Monitoring"];
const FAQ=[
  ["How long does a website take?","Most business websites take 2–4 weeks, depending on scope, how ready your content is, and revisions. E-commerce and complex builds can take 4–8 weeks. You'll get a clear timeline in your free consultation."],
  ["Do you provide support after launch?","Yes. We offer ongoing maintenance, updates, hosting support and priority help, so your site stays secure and keeps performing."],
  ["Do you work with international clients?","Absolutely. We work with clients worldwide, with remote consultations, project management and delivery across all time zones."],
  ["Can you manage our Facebook page and ads together?","Yes. Many clients hand us everything: page setup and security, content, design and paid campaigns. Your brand stays consistent and the reporting stays in one place."],
  ["Do you provide POS machine installation?","Yes. We handle POS machine setup, printer configuration, software installation, staff training and after-sales maintenance."],
  ["Can I request custom branding?","Yes. Every branding package is built around your vision, your industry and your audience, from logo concepts to a full brand identity."]
];


/* ===== Inner-page details ===== */
const slug=s=>s.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
// Per service (same order as SERVICES): what's included, typical timeline, best for, related Work tab.
const SERVICE_DETAILS=[
 {incl:["Campaign strategy & funnel plan","Audience research & lookalikes","Ad creatives & copy (3+ angles)","Meta Pixel & conversion tracking","Weekly optimisation & A/B tests","Monthly performance report"],time:"Live in 5–7 days",best:"Sales, leads & bookings",tab:"fbads"},
 {incl:["Page & Business Manager setup","Verification & roles","Account security & 2FA","Recovery support","Shop, catalogue & WhatsApp links","Page audit & optimisation"],time:"2–5 days",best:"New & neglected pages",tab:"strategy"},
 {incl:["Monthly content calendar","12–20 designed posts / month","Captions & hashtags","Community replies","Story & Reel planning","Monthly growth report"],time:"Ongoing, monthly",best:"Consistent brand presence",tab:"brand"},
 {incl:["Social posts & carousels","Ad creatives & banners","Logo & brand identity","Seamless patterns from your icons","Tee, tote & packaging prints","Print-ready flyers"],time:"3–10 days",best:"Brands that need a look",tab:"logos"},
 {incl:["AI product photography","Lifestyle scenes & mockups","Ad poster variations","Background & colour edits","Creative testing sets","Marketplace-ready images"],time:"2–5 days",best:"E-commerce & product brands",tab:"ai"},
 {incl:["UX & UI design","Responsive build (Next.js / WordPress)","On-page SEO & speed","Booking, shop & WhatsApp","CMS so you can edit content","Hosting, domain & launch"],time:"2–8 weeks",best:"Businesses & startups",tab:"web"},
 {incl:["POS software setup","Inventory & barcode","Receipt & label printers","Multi-store & warehouses","Staff training","After-sales support"],time:"1–2 weeks",best:"Retail, restaurants, pharmacies",tab:"pos"},
 {incl:["App UX & UI design","Flutter / React Native build","Login, payments & push","Admin dashboard","Store submission","Updates & maintenance"],time:"6–14 weeks",best:"Products & services on the go",tab:"mobile"},
 {incl:["Calculators & estimators","Dashboards & reports","Forms & automations","API integrations","Multi-language support","Hosting & maintenance"],time:"1–4 weeks",best:"Lead gen & internal tools",tab:"tools"}
];
// Case-study extras keyed by project title: live screenshot id + matching Web Tools slides.
const CASE_MEDIA={"Genetics Fitness":{shot:"genetics",slides:[4,5,6]},"TinWise":{shot:"tinwise",slides:[1,2,3]},"Bitloom":{shot:"bitloom",slides:[7,8]},"CIT Student Hub":{shot:"cithub",slides:[9]}};
const CAT_LABEL={client:"Client project",product:"Product",security:"Security & cloud"};
PROJECTS.forEach(p=>p.slug=slug(p.t));

/* ===== People ===== */
// Founder photo: images/founder.jpg (from the public GitHub profile). Replace the file to update it.
const FOUNDER={name:"Imesh Samintha",role:"Founder & Lead Strategist",photo:"images/founder.jpg",
  bio:["I started Eroxii in Colombo to give businesses one partner for the whole journey online: the ads that bring people in, the page and posts that build trust, and the website and systems that turn visitors into customers.",
       "Since 2021 I've run Meta campaigns, built websites and POS systems, designed content and supported NFT launches for clients in Sri Lanka and abroad. Security is built into everything we ship, from 2FA on your ad accounts to the code behind your website."],
  facts:[["pin","Based in","Colombo, Sri Lanka"],["target","Focus","Meta ads · Web · Growth systems"],["shield","Approach","Secure, fast, measurable"]],
  quote:"Every project should leave the client with more customers, and a system they actually understand."};
// Team members: add real people only, with their permission. One object each, photo in images/team/.
// Example: {name:"Full Name",role:"Graphic Designer",photo:"images/team/name.jpg",line:"Posts, ads & brand kits",in:"https://linkedin.com/in/…"}
const TEAM=[
 {name:"Rashika Dissanayake",photo:"images/team/rashika.jpg"},
 {name:"Lasan Pathirana",photo:"images/team/lasan.jpg"},
 {name:"Tharun Weerasooriya",photo:"images/team/tharun.jpg"},
 {name:"Pavan Abeysooriya",photo:"images/team/pavan.jpg"},
 {name:"Dinithi Zoysa",photo:"images/team/dinithi.jpg"},
];
