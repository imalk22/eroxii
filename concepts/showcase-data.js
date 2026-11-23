// Eroxii portfolio showcase: one slide per image from the old site.
// frame: "b" = browser window (+ zoomed detail card), "c" = floating card. *word* = gradient highlight.
const CATS=[
{k:"web",name:"Web Design & Development",a:"#0a84ff",a2:"#22d3ee",badge:["Web design","Eroxii portfolio","browser"],items:[
 ["web-1.png","b","Architecture, *built to impress*.","A clean, image-led website for a full-service architecture firm, with project highlights, years of experience and a clear call to action.",["WordPress","Elementor","Responsive"],"15% 30%"],
 ["web-2.jpg","b","An agency site with *personality*.","Bold hero imagery and confident copy for a digital marketing agency, designed to stand out in a crowded market.",["WordPress","Custom design","SEO"],"30% 20%"],
 ["web-3.png","c","Luxury car rental, *on the road*.","A premium car-rental website with a fleet showcase, booking flow and testimonials, made for high-end customers.",["Web design","Booking","Responsive"]],
 ["web-4.png","c","Sneaker drops, *sold out fast*.","An e-commerce storefront for limited sneakers, with category browsing, cashback offers and recently added products.",["E-commerce","WooCommerce","UI design"]],
 ["web-5.png","c","A marketplace for *farm animals*.","A nationwide animal sales and breeding marketplace with featured listings, services and trust-building testimonials.",["Marketplace","Listings","WordPress"]],
 ["web-6.png","c","Electronics, *on every screen*.","A responsive electronics store shown on desktop and mobile, with category shopping and seasonal deals.",["E-commerce","Responsive","Shop"]],
 ["web-7.png","b","A landing page for *VR fans*.","A bold, high-contrast landing page for a VR product, built around a single clear call to action.",["Landing page","Conversion","Responsive"],"30% 45%"],
 ["web-8.png","c","Fintech, *designed dark*.","A dark, premium website for a financial platform, covering features, steps to get started and key insights.",["Fintech","UI/UX","Web design"]],
 ["web-9.png","c","A quiz platform that *converts*.","A vibrant multi-section site for a quiz and rewards platform, with plans, steps and FAQs designed to drive sign-ups.",["Landing page","Gamification","Responsive"]],
 ["web-10.png","c","A news portal, *live on air*.","A media and TV news portal with category feeds and video highlights, shown on mobile and desktop.",["News portal","Media","Responsive"]],
 ["web-11.png","b","Crypto investing, *made clear*.","A sleek landing page for a cryptocurrency investment and blockchain solutions company.",["Crypto","Landing page","Web design"],"25% 40%"]
]},
{k:"ads",name:"Social Media & Paid Ads",a:"#34c759",a2:"#0a84ff",badge:["Performance marketing","Eroxii portfolio","chart"],items:[
 ["ads-1.png","c","Popkite: *Google Ads* case study.","E-commerce growth for a water-sports store through targeted Google Ads, SEO and a better user experience.",["Google Ads","SEO","E-commerce"]],
 ["ads-2.png","c","MagicAfro: *sales that scale*.","A Google Ads and SEO strategy for a beauty e-commerce brand, reaching new audiences with tailored campaigns.",["Google Ads","SEO","Beauty"]],
 ["ads-3.png","c","Bulldog Nutrition: *multi-channel growth*.","Google, Meta and YouTube ads working together to grow orders and revenue for a sports-nutrition store.",["Google Ads","Meta Ads","YouTube"]],
 ["ads-4.png","c","RubyQuality: *more repeat buyers*.","A tailored plan combining SEO, PPC and Meta Ads to grow orders and returning customers for a fashion store.",["SEO","PPC","Meta Ads"]],
 ["ads-5.png","b","Organic traffic, *trending up*.","SEO results tracked in Semrush: organic traffic, keyword rankings and SERP features over time.",["SEO","Semrush","Reporting"],"55% 45%"],
 ["ads-6.png","b","Keywords that *keep climbing*.","Authority score, backlinks and organic keyword growth for a client site, reported transparently.",["SEO","Backlinks","Analytics"],"80% 70%"],
 ["ads-7.png","b","Campaigns, *measured daily*.","Ad campaigns monitored day by day, with spend, clicks and conversions in one view.",["Paid ads","Tracking","Optimisation"],"50% 40%"],
 ["ads-8.png","b","Store results, *in real numbers*.","A Shopify overview showing sales, sessions, conversion rate and returning customers after campaigns went live.",["Shopify","Analytics","E-commerce"],"30% 30%"],
 ["ads-9.png","b","Ad sets, *tested and scaled*.","Meta Ads Manager at ad-set level, with budgets, results and cost per result compared side by side.",["Meta Ads","A/B testing","Scaling"],"50% 40%"],
 ["ads-10.png","b","Every campaign, *accounted for*.","Sales campaigns in Meta Ads Manager, with ROAS, purchase value and cost per purchase tracked for each one.",["Meta Ads","ROAS","Sales"],"55% 50%"]
]},
{k:"brand",name:"Branding & Social Posts",a:"#e040fb",a2:"#ff375f",badge:["Content design","Eroxii portfolio","pen"],items:[
 ["brand-1.png","c","Admin automation, *on brand*.","A consistent social media design system for an automation agency, with one visual language across posts and carousels.",["Social posts","Carousel","Brand system"]],
 ["brand-2.png","c","Wildfire tech, *told visually*.","Carousel posts for a wildfire-prevention technology brand, mixing real photography with clear product benefits.",["Carousel","Tech","Instagram"]],
 ["brand-3.png","c","Healthcare ads that *feel premium*.","Sponsored Instagram ads for a medical weight-loss program, with soft gold tones and clear calls to book.",["Meta Ads","Healthcare","Ad creative"]],
 ["brand-4.png","c","Dark mode, *bright results*.","Instagram ads for an interview-prep tool. Dark backgrounds and glowing yellow accents stop the scroll.",["Instagram ads","SaaS","Ad creative"]],
 ["brand-5.png","c","Lead gen, *in black and white*.","Monochrome ad creatives for a B2B growth agency, built around clear before-and-after messaging.",["B2B","Lead generation","Ad creative"]],
 ["brand-6.png","c","Soft gradients, *sharp message*.","Instagram ads for a mental-health documentation app, with calm pastel gradients and bold typography.",["Healthcare SaaS","Instagram","Ad creative"]],
 ["brand-7.png","c","Streetwear, *shot in mono*.","Editorial black-and-white posts for a streetwear brand, focused on product and mood.",["Fashion","Instagram","Editorial"]],
 ["brand-8.png","c","Real estate, *reimagined*.","Ad creatives for a proptech brand, using bold pink tones to explain a new way to sell your home.",["Proptech","Meta Ads","Ad creative"]],
 ["brand-9.png","c","One brand, *every format*.","Post, story and carousel designs that keep one brand consistent across every placement.",["Brand system","Carousel","Social"]],
 ["brand-10.png","c","Beauty posts that *glow*.","Social posts for a beauty brand celebrating women, with warm portraits and elegant typography.",["Beauty","Instagram","Content design"]],
 ["brand-11.png","c","Developer ads, *full of energy*.","Bold neon ad creatives for a developer-hiring platform, made to grab coders' attention.",["Tech recruiting","Ad creative","Social"]],
 ["brand-12.png","c","Strategy, *in dark gold*.","A premium dark-and-gold social series for a performance-marketing consultancy.",["B2B","Social series","Brand system"]]
]},
{k:"ai",name:"AI Ad Creatives",a:"#ff9f0a",a2:"#ff375f",badge:["AI creative","Eroxii portfolio","spark"],items:[
 ["ai-1.jpg","c","Product shots, *powered by AI*.","AI-generated lifestyle imagery for a skincare brand: summer light, a real-feeling model, and no photoshoot needed.",["AI imagery","Skincare","Ad creative"]],
 ["ai-2.jpg","c","Product posters for *e-commerce*.","Eye-catching product posters for Amazon and online stores that put each product's key benefits up front.",["Amazon","Product poster","E-commerce"]],
 ["ai-3.jpg","c","Supplements, *styled by AI*.","Generative AI product editing for a supplement brand, placing products in vibrant, on-brand scenes.",["Generative AI","Photoshop","Supplements"]],
 ["ai-4.jpg","c","Fresh scenes, *zero shoots*.","AI-assisted product compositing with splashes and fruit, ready for ads and product pages.",["Generative AI","Compositing","Ads"]],
 ["ai-5.jpg","c","A whole campaign, *in days*.","A full set of AI-edited product images for an ad campaign. Many scenes and moods, one consistent look.",["AI campaign","Product imagery","Meta Ads"]]
]},
{k:"pos",name:"POS Systems",a:"#30b0c7",a2:"#34c759",badge:["POS system","Eroxii portfolio","pos"],items:[
 ["pos-restaurant-1.jpg","b","Restaurant sales, *at a glance*.","The restaurant POS dashboard: today's sales, orders and top items the moment the manager logs in.",["Restaurant","Dashboard","Reports"],"25% 30%"],
 ["pos-restaurant-2.jpg","b","Orders, *never missed*.","Order management for dine-in, takeaway and delivery, with each order's status visible to the whole team.",["Restaurant","Orders","Kitchen"],"40% 35%"],
 ["pos-restaurant-3.jpg","b","Billing in *a few taps*.","A touch-friendly POS screen for fast billing at the counter, with menu categories and the running bill side by side.",["Restaurant","POS","Billing"],"60% 40%"],
 ["pos-restaurant-4.jpg","b","Stock purchases, *tracked*.","Supplier purchases recorded against inventory, so food costs and stock levels always add up.",["Restaurant","Purchasing","Inventory"],"40% 35%"],
 ["pos-restaurant-5.jpg","b","Tables, *reserved online*.","Reservation management with dates, party sizes and table assignments in one place.",["Restaurant","Reservations","Tables"],"40% 35%"],
 ["pos-restaurant-6.jpg","b","A website, *built in*.","A matching restaurant website that connects to the POS, so menus and reservations stay in sync.",["Restaurant","Website","Integration"],"30% 30%"],
 ["pos-pharmacy-1.png","b","Pharmacy sales, *under control*.","The pharmacy dashboard shows sales, stock alerts and expiring items at a glance.",["Pharmacy","Dashboard","Inventory"],"25% 30%"],
 ["pos-pharmacy-2.png","b","Fast billing at *the counter*.","A pharmacy POS built for speed: search medicines, add them to the bill and check out in seconds.",["Pharmacy","POS","Billing"],"40% 35%"],
 ["pos-pharmacy-3.png","b","Every sale, *on record*.","A full sales history with filters by date, cashier and payment type, ready for audits.",["Pharmacy","Sales history","Reports"],"35% 30%"],
 ["pos-pharmacy-4.png","c","Profit and loss, *in real time*.","An automatic profit-and-loss report, so the owner always knows how the business is really doing.",["Pharmacy","P&L","Accounting"]],
 ["pos-pharmacy-5.png","b","Cash, *fully accounted for*.","Store cash management tracks opening balances, payouts and closing counts for every shift.",["Pharmacy","Cash management","Shifts"],"35% 30%"],
 ["pos-pharmacy-6.png","c","Receipts that *print right*.","Thermal-printer invoices formatted for 80 mm paper, with clear items, totals and store details.",["Pharmacy","Thermal print","Invoices"]],
 ["pos-fashion-1.png","b","Fashion retail, *one dashboard*.","A business dashboard for a fashion store, with revenue, sales, products and customers at the top of the page.",["Fashion","Dashboard","Analytics"],"25% 30%"],
 ["pos-fashion-2.png","b","Every product, *organised*.","Product inventory with analytics, smart filters and stock insights for low and out-of-stock items.",["Fashion","Products","Inventory"],"30% 35%"],
 ["pos-fashion-3.png","b","New stock in *seconds*.","A clean add-product form with pricing, tax, SKU, barcode, warehouse and reorder levels.",["Fashion","Products","Barcodes"],"35% 30%"],
 ["pos-fashion-4.png","b","Many warehouses, *in sync*.","Warehouse management with locations, contacts and stock per store, all kept in sync.",["Fashion","Warehouses","Multi-store"],"35% 30%"],
 ["pos-electronics-1.jpg","b","Electronics retail, *simplified*.","An electronics store dashboard with shortcuts for invoices, products, customers and reports.",["Electronics","Dashboard","Retail"],"25% 30%"],
 ["pos-electronics-2.jpg","b","Orders with *every detail*.","Order entry with variants, quantities, discounts and service charges calculated automatically.",["Electronics","Orders","Pricing"],"40% 30%"],
 ["pos-electronics-3.jpg","b","Invoices, *in one screen*.","Create invoices with customer, store and item details, then take payment on the spot.",["Electronics","Invoices","Payments"],"40% 30%"],
 ["pos-electronics-4.jpg","b","Customers, *remembered*.","A customer database with contact details and ledgers, ready for loyalty and follow-ups.",["Electronics","Customers","CRM"],"40% 30%"]
]},
{k:"mobile",name:"Mobile App Design",a:"#5e5ce6",a2:"#bf5af2",badge:["App design","Eroxii portfolio","phone"],items:[
 ["mobile-1.png","c","Discover. Connect. *Celebrate*.","A social app for the LGBTQ+ community, with profiles, events and chat on Android and iOS.",["Mobile app","Social","iOS & Android"]],
 ["mobile-2.png","c","Fitness, *made simple*.","A fitness app with personalised plans, workout challenges, progress analytics and wearable integration.",["Health & fitness","Wearables","Mobile app"]],
 ["mobile-3.png","c","Project management, *made easier*.","A project CRM with an encrypted database, reporting and Gantt timelines across web and mobile.",["CRM","SaaS","Web & mobile"]],
 ["mobile-4.png","c","Unlock *academic potential*.","An all-in-one college app with learning resources, personalised learning journeys and engaging lessons.",["EdTech","Mobile app","iOS & Android"]],
 ["mobile-5.png","c","Banking in *your pocket*.","A payment bank app with spending insights, income tracking and secure sign-in.",["Fintech","Payments","Mobile app"]],
 ["mobile-6.png","c","Ride the city, *your way*.","A taxi-booking app with live maps, ride tracking and simple payments.",["Ride hailing","Maps","iOS & Android"]],
 ["mobile-7.png","c","Adventure, *planned offline*.","A travel app with offline access, adventure planning, bookings and personalised recommendations.",["Travel","Booking","Mobile app"]],
 ["mobile-8.png","c","Care, *always by your side*.","A telemedicine app with appointment booking, medication reminders and access to health records.",["HealthTech","Telemedicine","Mobile app"]]
]}
];
