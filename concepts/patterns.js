// Seamless pattern engine. Motifs are 24×24 SVG snippets using class "f" (main colour) and "a" (accent colour).
// PAT.svg(cfg, palette, w, h, id) returns an <svg> filled with the repeating pattern.
const MOTIFS={
 star:'<path class="f" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9Z"/>',
 heart:'<path class="f" d="M12 21s-8.5-5.2-8.5-11A4.8 4.8 0 0 1 12 6.6 4.8 4.8 0 0 1 20.5 10c0 5.8-8.5 11-8.5 11Z"/>',
 leaf:'<path class="f" d="M4 20C4 10.5 10.5 4 20 4c0 9.5-6.5 16-16 16Z"/><path class="a" d="M5.5 18.5 16 8l.9.9L6.4 19.4Z"/>',
 flower:'<g class="f"><circle cx="12" cy="6" r="4"/><circle cx="17.7" cy="10.2" r="4"/><circle cx="15.5" cy="17" r="4"/><circle cx="8.5" cy="17" r="4"/><circle cx="6.3" cy="10.2" r="4"/></g><circle class="a" cx="12" cy="12" r="3.2"/>',
 bolt:'<path class="f" d="M13.5 2 4 14h7l-1.5 8L19 10h-7Z"/>',
 coffee:'<path class="f" d="M4 9h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6Z"/><path class="f" d="M17 10.5h1.5a3 3 0 0 1 0 6H16.6l.4-1.8h1.5a1.2 1.2 0 0 0 0-2.4H17Z"/><path class="a" d="M8 2.5c1.2 1.2 1.2 2.6 0 3.8l-1-1c.6-.6.6-1.2 0-1.8ZM12 2.5c1.2 1.2 1.2 2.6 0 3.8l-1-1c.6-.6.6-1.2 0-1.8Z"/>',
 palm:'<path class="a" d="M11 22c.4-4.5 1.4-8.5 3-12l1.4.6c-1.5 3.4-2.4 7.2-2.8 11.4Z"/><path class="f" d="M14.5 10C12 6 7.5 5 4 6.5 7 7 9.5 8.5 11 11Zm0 0c1.5-4.2 5.5-6.4 9-5.8-2.8.9-5 2.8-6 5.7Zm0 0c-3.8-.8-7.6 1-9.5 4.3 2.4-1.4 5.2-1.8 7.8-1.2Zm0 0c3.6-1.2 7.2.3 8.6 3.3-2.2-1-4.8-1.2-7.4-.4Z"/>',
 wave:'<path class="f" d="M2 16c2.5 0 3.5-6 8-6 3.6 0 4.2 4.3 2 5.3 2.6 1.6 6.5.2 8-2.3V21H2Z"/><circle class="a" cx="12.6" cy="13" r="1.3"/>',
 sun:'<circle class="f" cx="12" cy="12" r="5"/><g class="a"><rect x="11" y="1.5" width="2" height="4" rx="1"/><rect x="11" y="18.5" width="2" height="4" rx="1"/><rect x="1.5" y="11" width="4" height="2" rx="1"/><rect x="18.5" y="11" width="4" height="2" rx="1"/><rect x="4" y="4.6" width="2" height="4" rx="1" transform="rotate(-45 5 6.6)"/><rect x="18" y="4.6" width="2" height="4" rx="1" transform="rotate(45 19 6.6)"/><rect x="4" y="15.4" width="2" height="4" rx="1" transform="rotate(45 5 17.4)"/><rect x="18" y="15.4" width="2" height="4" rx="1" transform="rotate(-45 19 17.4)"/></g>',
 moon:'<path class="f" d="M15 2.5a9.5 9.5 0 1 0 6.5 14A7.5 7.5 0 0 1 15 2.5Z"/><circle class="a" cx="19" cy="5" r="1.3"/>',
 cloud:'<path class="f" d="M7 19a4.5 4.5 0 0 1-.6-9A6.3 6.3 0 0 1 18.4 9.6 4.7 4.7 0 0 1 17.6 19Z"/>',
 fish:'<path class="f" d="M2.5 12c3-5 10-6.5 14.5-2.2L21.5 6.5v11L17 14.2C12.5 18.5 5.5 17 2.5 12Z"/><circle class="a" cx="7.5" cy="11" r="1.4"/>',
 cherry:'<path class="a" d="M8.2 14 12.4 4l1 .4L9.6 14.4ZM15.6 14.3c.2-4-.8-7.3-3.1-9.9l.8-.7c2.6 2.9 3.6 6.6 3.4 10.7Z"/><circle class="f" cx="8" cy="16.5" r="4.5"/><circle class="f" cx="16.2" cy="16.8" r="4.2"/><path class="a" d="M12.5 4c2-1.6 4.6-1.8 7-.8-2 1.8-4.6 2-7 .8Z"/>',
 mushroom:'<path class="f" d="M2.5 12.5a9.5 8 0 0 1 19 0Z"/><path class="a" d="M9 12.5h6v6.5a3 3 0 0 1-6 0Z"/><g class="a"><circle cx="8" cy="8.5" r="1.4"/><circle cx="14.5" cy="7" r="1.1"/><circle cx="16.5" cy="10.5" r="1"/></g>',
 rocket:'<path class="f" d="M12 2c4 3 5.2 8 4.2 13H7.8C6.8 10 8 5 12 2Z"/><path class="a" d="M7.8 11 4.5 15v3.5l3.6-2ZM16.2 11l3.3 4v3.5l-3.6-2ZM10 16.5h4L13 21.5h-2Z"/><circle class="a" cx="12" cy="9" r="1.8"/>',
 note:'<path class="f" d="M9 18.2a3.2 3.2 0 1 1-2-3V5.2l12-2.4v12.6a3.2 3.2 0 1 1-2-3V6.8L9 8.4Z"/>',
 sparkle:'<path class="f" d="M12 1.5l2.4 8.1L22.5 12l-8.1 2.4L12 22.5l-2.4-8.1L1.5 12l8.1-2.4Z"/>',
 smile:'<circle class="f" cx="12" cy="12" r="9.5"/><g class="a"><circle cx="8.8" cy="10" r="1.4"/><circle cx="15.2" cy="10" r="1.4"/><path d="M7.5 13.5h9a4.5 4.5 0 0 1-9 0Z"/></g>',
 lemon:'<path class="f" d="M3 13.5C2 9 5.5 5 10.5 4.2c4-.7 8 .8 9.8 3.7.9 1.5 1.5 3.3.8 5-1 4.5-5.5 7.2-10.3 6.8C7 19.3 3.8 17.4 3 13.5Z"/><path class="a" d="M14 4.5c1.6-2 4-2.7 6.3-2-1.3 2-3.6 2.8-6.3 2Z"/>',
 shell:'<path class="f" d="M12 21.5 2.6 9.8a11.6 11.6 0 0 1 18.8 0Z"/><g class="a"><path d="M11.4 20 9.8 6.2l1.1-.1L12.5 20ZM12.6 20l1.6-13.8 1.1.1L13.7 20Z"/><path d="M10.8 20.4 5.3 9l1-.5 5.5 11.4ZM13.2 20.4 18.7 9l-1-.5-5.5 11.4Z"/></g>',
 cactus:'<path class="f" d="M10 20V5a2 2 0 0 1 4 0v15ZM5.5 14V9.5a1.5 1.5 0 0 1 3 0V12h1.5v2.2H7.7A2.2 2.2 0 0 1 5.5 14ZM18.5 12V8.5a1.5 1.5 0 0 0-3 0V11H14v2.2h2.3a2.2 2.2 0 0 0 2.2-1.2Z"/><path class="a" d="M7 19h10l-1 3.5H8Z"/>',
 mountain:'<path class="f" d="M1.5 20.5 9 7.5l4.2 6.4 2.8-3.9 6.5 10.5Z"/><path class="a" d="M9 7.5 11.2 11 10 12.2 9 11l-1.2 1.4-1-.8Z"/>',
 paw:'<path class="f" d="M12 11.5c3.6 0 6.5 3 6.5 6.1 0 2.3-2 3.2-3.5 2.6-1.2-.5-2-.7-3-.7s-1.8.2-3 .7c-1.5.6-3.5-.3-3.5-2.6 0-3.1 2.9-6.1 6.5-6.1Z"/><g class="f"><ellipse cx="5" cy="10" rx="2" ry="2.6"/><ellipse cx="9" cy="5.8" rx="2" ry="2.8"/><ellipse cx="15" cy="5.8" rx="2" ry="2.8"/><ellipse cx="19" cy="10" rx="2" ry="2.6"/></g>',
 anchor:'<path class="f" d="M11 7.7a2.8 2.8 0 1 1 2 0V9h3v2h-3v8.4c3-.4 5.2-2.4 5.7-5.4H16.5l3.2-3.6 2.8 3.6h-1.7c-.6 4.6-4.4 7.9-8.8 7.9S3.7 18.6 3.2 14H1.5l2.8-3.6L7.5 14H5.3c.5 3 2.7 5 5.7 5.4V11H8V9h3Z"/>',
 crown:'<path class="f" d="M3 18.5 2.3 7l5.4 4.6L12 4l4.3 7.6L21.7 7 21 18.5Z"/><path class="a" d="M3 19.8h18v2H3Z"/>',
 diamond:'<path class="f" d="M6.5 3.5h11L22 9.5 12 21.5 2 9.5Z"/><path class="a" d="M2.8 9h18.4v1.1H2.8ZM11.4 9.6h1.2L12 20Z"/>',
 cat:'<path class="f" d="M4.8 9.5 4 2.8l5 3.2h6l5-3.2-.8 6.7c.9 1.4 1.3 2.8 1.3 4.3 0 4.8-4 8-8.5 8s-8.5-3.2-8.5-8c0-1.5.4-2.9 1.3-4.3Z"/><g class="a"><ellipse cx="9" cy="12.5" rx="1.3" ry="1.8"/><ellipse cx="15" cy="12.5" rx="1.3" ry="1.8"/><path d="M10.8 16h2.4L12 17.4Z"/></g>',
 plane:'<path class="f" d="M21.5 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5l-2-1.5v-5.5Z"/>'
};
const PAT=(()=>{
  const rngOf=seed=>()=>(seed=(seed*16807)%2147483647)/2147483647;
  const motif=(m,x,y,s,rot,f,a,flip)=>`<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${rot||0}) scale(${(flip?-s:s).toFixed(3)} ${s.toFixed(3)}) translate(-12 -12)" style="--f:${f};--a:${a}">${MOTIFS[m]}</g>`;
  function build(cfg,P,W0){
    const {layout,motifs:M,cell:c=48,cols=4,rows=4}=cfg,n=M.length,C=P.c,r=rngOf(cfg.seed||7);
    let W=cols*c,H=rows*c,bg="",items=[],extra="";
    const col=k=>C[k%C.length],acc=k=>C[(k+1)%C.length];
    const add=(m,x,y,s,rot,ci,flip)=>items.push({m,x,y,s,rot,ci,flip});
    const cellLoop=(fn)=>{for(let j=0;j<rows;j++)for(let i=0;i<cols;i++)fn(i,j,i*c+c/2,j*c+c/2)};
    const S=c/24*(cfg.scale||.62);
    switch(layout){
     case "grid":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x,y,S,0,(i+2*j)%3));break;
     case "halfdrop":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x,y+(i%2)*c/2,S,0,i%3));break;
     case "brick":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x+(j%2)*c/2,y,S,0,j%3));break;
     case "rotate4":cellLoop((i,j,x,y)=>add(M[(i*3+j)%n],x,y,S,((i+j)%4)*90,(i+j)%3));break;
     case "mirror":cellLoop((i,j,x,y)=>add(M[j%n],x,y,S,(i+j)%2?-12:12,(i+j)%3,(i+j)%2));break;
     case "bigsmall":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x,y,(i+j)%2?S*.55:S*1.25,(i+j)%2?20:0,(i+j)%2?1:0));break;
     case "halftone":cellLoop((i,j,x,y)=>add(M[i%n],x+(j%2)*c/2,y,S*(.35+.85*Math.abs(Math.sin(Math.PI*j/rows))),0,j<rows/2?0:1));break;
     case "toss":case "doodle":case "memphis":{
       const N=Math.round(cols*rows*(cfg.density||1.1)),pts=[];
       for(let t=0;t<4000&&pts.length<N;t++){const x=r()*W,y=r()*H,min=c*(cfg.minD||.78);
         if(pts.every(p=>{let dx=Math.abs(p[0]-x),dy=Math.abs(p[1]-y);dx=Math.min(dx,W-dx);dy=Math.min(dy,H-dy);return dx*dx+dy*dy>min*min}))pts.push([x,y])}
       pts.forEach((p,k)=>add(M[k%n],p[0],p[1],S*(.75+r()*.45),Math.round(r()*80-40),k%3));
       if(layout==="memphis"){for(let k=0;k<cols*rows;k++){const x=r()*W,y=r()*H,t=k%3,cc=col(k+1),rot=Math.round(r()*360);
         extra+=t===0?`<path d="M0 -${c*.12} L${c*.11} ${c*.08} L-${c*.11} ${c*.08}Z" fill="${cc}" transform="translate(${x} ${y}) rotate(${rot})"/>`
              :t===1?`<path d="M-${c*.2} 0q${c*.05} -${c*.1} ${c*.1} 0t${c*.1} 0t${c*.1} 0" fill="none" stroke="${cc}" stroke-width="${c*.035}" stroke-linecap="round" transform="translate(${x} ${y}) rotate(${rot})"/>`
              :`<circle cx="${x}" cy="${y}" r="${c*.05}" fill="${cc}"/>`}}
       break}
     case "mandala":cellLoop((i,j,x,y)=>{const ring=6;for(let k=0;k<ring;k++){const t=k/ring*Math.PI*2;add(M[(i+j)%n],x+Math.cos(t)*c*.26,y+Math.sin(t)*c*.26,S*.42,k*60+90,(i+j)%3)}
       extra+=`<circle cx="${x}" cy="${y}" r="${c*.07}" fill="${col(2)}"/>`});break;
     case "polka":cellLoop((i,j,x,y)=>{add(M[(i+j)%n],x,y,S*.9,(i%2?-14:14),(i+j)%2);extra+=`<circle cx="${x-c/2}" cy="${y-c/2}" r="${c*.07}" fill="${col(2)}"/>`});break;
     case "checker":bg=`<g fill="${P.bg2}">${Array.from({length:cols*rows},(_,k)=>{const i=k%cols,j=k/cols|0;return (i+j)%2?`<rect x="${i*c}" y="${j*c}" width="${c}" height="${c}"/>`:""}).join("")}</g>`;
       cellLoop((i,j,x,y)=>add(M[(i+j)%n],x,y,S*.95,0,(i+j)%2?0:1));break;
     case "stripes":cellLoop((i,j,x,y)=>{if(j%2===0)add(M[(i+j/2)%n],x+(j%4?c/2:0),y,S*.85,0,i%3);});
       for(let j=1;j<rows;j+=2)extra+=`<rect x="0" y="${j*c+c*.3}" width="${W}" height="${c*.4}" fill="${col(1)}"/><rect x="0" y="${j*c+c*.16}" width="${W}" height="${c*.06}" fill="${col(2)}"/><rect x="0" y="${j*c+c*.78}" width="${W}" height="${c*.06}" fill="${col(2)}"/>`;break;
     case "wave":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x+(j%2)*c/2,y,S*.8,0,(i+j)%3));
       for(let j=0;j<rows;j++){let d=`M0 ${j*c}`;for(let i=0;i<cols*2;i++)d+=` q${c/4} ${i%2?c*.14:-c*.14} ${c/2} 0`;extra+=`<path d="${d}" fill="none" stroke="${col(1)}" stroke-width="${c*.04}" stroke-linecap="round"/>`}break;
     case "framed":cellLoop((i,j,x,y)=>{extra+=`<rect x="${x-c*.42}" y="${y-c*.42}" width="${c*.84}" height="${c*.84}" rx="${c*.2}" fill="${col(1)}" opacity=".18"/>`;add(M[(i+2*j)%n],x,y,S*.75,0,(i+j)%3)});break;
     case "hex":{const h=c*.866;H=rows*h;
       for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const x=i*c+c/2+(j%2)*c/2,y=j*h+h/2;add(M[(i+j)%n],x,y,S*.7,0,(i+j)%3);
         for(const dx of [-W,0,W])for(const dy of [-H,0,H]){const cx=x+dx,cy=y+dy,R=c*.54;extra+=`<path d="${[0,1,2,3,4,5].map(k=>{const t=Math.PI/3*k+Math.PI/6;return (k?"L":"M")+(cx+R*Math.cos(t)).toFixed(1)+" "+(cy+R*Math.sin(t)).toFixed(1)}).join("")}Z" fill="none" stroke="${col(1)}" stroke-width="${c*.035}" opacity=".7"/>`}}break}
     case "lattice":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x+(j%2)*c/2,y,S*.7,0,(i+j)%2));
       for(let k=-rows;k<=cols+rows;k++){extra+=`<path d="M${k*c} 0L${k*c+H} ${H}M${k*c} 0L${k*c-H} ${H}" stroke="${col(1)}" stroke-width="${c*.02}" opacity=".55"/>`}break;
     case "luxe":cellLoop((i,j,x,y)=>add(M[(i+j)%n],x,y,S*.55,0,(i+j)%2));
       extra+=`<path d="${Array.from({length:cols},(_,i)=>`M${i*c} 0V${H}`).join("")}${Array.from({length:rows},(_,j)=>`M0 ${j*c}H${W}`).join("")}" stroke="${col(1)}" stroke-width="${c*.012}" opacity=".45"/>`;
       cellLoop((i,j,x,y)=>extra+=`<circle cx="${x-c/2}" cy="${y-c/2}" r="${c*.035}" fill="${col(0)}"/>`);break;
    }
    // draw each motif 9× (tile wrap) so edges stay seamless
    let body="";items.forEach(o=>{for(const dx of [-W,0,W])for(const dy of [-H,0,H]){const x=o.x+dx,y=o.y+dy;if(x<-c||x>W+c||y<-c||y>H+c)continue;body+=motif(o.m,x,y,o.s,o.rot,col(o.ci),acc(o.ci+cfg.accShift||o.ci+1),o.flip)}});
    const under=(layout==="stripes"||layout==="hex"||layout==="lattice"||layout==="luxe"||layout==="framed"||layout==="wave")?extra:"",over=under?"":extra;
    return {W,H,inner:`<rect width="${W}" height="${H}" fill="${P.bg}"/>${bg}${under}${body}${over}`};
  }
  let uid=0;
  function defs(cfg,P,scale=1){const t=build(cfg,P),id="p"+(++uid);
    const st=cfg.style==="stroke"?`.${id} .f,.${id} .a{fill:none;stroke:var(--f);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}.${id} .a{stroke:var(--a)}`:`.${id} .f{fill:var(--f)}.${id} .a{fill:var(--a)}`;
    return {id,t,def:`<style>${st}</style><pattern id="${id}" class="${id}" patternUnits="userSpaceOnUse" width="${t.W}" height="${t.H}" patternTransform="scale(${scale}) rotate(${cfg.angle||0})">${t.inner}</pattern>`}}
  return {
    svg(cfg,P,w,h,scale=1,extraAttrs=""){const d=defs(cfg,P,scale);return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ${extraAttrs}><defs>${d.def}</defs><rect width="${w}" height="${h}" fill="url(#${d.id})"/></svg>`},
    shape(cfg,P,w,h,path,scale=1,shade=true){const d=defs(cfg,P,scale),cid="c"+d.id;
      return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><defs>${d.def}<clipPath id="${cid}"><path d="${path}"/></clipPath>
        <linearGradient id="g${cid}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity=".22"/><stop offset=".3" stop-color="#fff" stop-opacity=".08"/><stop offset=".7" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient></defs>
        <g clip-path="url(#${cid})"><rect width="${w}" height="${h}" fill="url(#${d.id})"/>${shade?`<rect width="${w}" height="${h}" fill="url(#g${cid})"/>`:""}</g><path d="${path}" fill="none" stroke="rgba(0,0,0,.18)" stroke-width="1.2"/></svg>`},
    tile(cfg,P,size){const t=build(cfg,P),k=size/Math.max(t.W,t.H),d=defs(cfg,P,1);
      return `<svg viewBox="0 0 ${t.W} ${t.H}" width="${t.W*k}" height="${t.H*k}"><defs>${d.def}</defs><rect width="${t.W}" height="${t.H}" fill="url(#${d.id})"/><rect x=".5" y=".5" width="${t.W-1}" height="${t.H-1}" fill="none" stroke="${P.c[0]}" stroke-dasharray="4 3" stroke-width="1.2"/></svg>`},
    motif(m,f,a,size,style){return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" style="--f:${f};--a:${a}"><style>${style==="stroke"?".f,.a{fill:none;stroke:var(--f);stroke-width:1.6}.a{stroke:var(--a)}":".f{fill:var(--f)}.a{fill:var(--a)}"}</style>${MOTIFS[m]}</svg>`}
  };
})();
