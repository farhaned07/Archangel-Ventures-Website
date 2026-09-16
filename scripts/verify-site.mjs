// Run against a production server: node scripts/verify-site.mjs http://localhost:3001
import assert from 'node:assert/strict';
const base=process.argv[2]||'http://localhost:3001';
const paths=['/','/ai-transformation-partner-thailand','/ai-transformation','/work','/farhan-sabbir','/insights/ai-transformation-thailand-2026','/book','/book/confirmed','/privacy'];
const pages=new Map();
for(const path of paths){const r=await fetch(new URL(path,base));assert.equal(r.status,200,path);pages.set(path,await r.text());}
const results=[];
for(const [path,html] of pages){
 assert.equal((html.match(/<h1\b/g)||[]).length,1,`${path}: one h1`);
 assert.match(html,/<main[^>]*id="main-content"/,`${path}: skip target`);
 assert.match(html,/<title>[^<]+<\/title>/,`${path}: title`);
 assert.match(html,/<meta name="description" content="[^\"]+"/,`${path}: description`);
 const canonical=html.match(/<link rel="canonical" href="([^\"]+)"/);assert.ok(canonical,`${path}: canonical`);
 assert.equal(new URL(canonical[1]).pathname,path,`${path}: canonical path`);
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(m=>JSON.parse(m[1]));
 assert.ok(schemas.some(x=>x['@graph']?.some(y=>y['@type']==='Organization')),`${path}: organization`);
 if(path.startsWith('/book'))assert.match(html,/name="robots" content="noindex/);
 for(const m of html.matchAll(/<a\b[^>]*href="([^\"]+)"/g)){
  const href=m[1].replaceAll('&amp;','&');if(!href.startsWith('/')&&!href.startsWith('#'))continue;
  const u=new URL(href,new URL(path,base));if(u.origin!==new URL(base).origin)continue;
  assert.ok(pages.has(u.pathname),`${path}: unknown internal link ${href}`);
  if(u.hash)assert.ok(pages.get(u.pathname).includes(`id="${u.hash.slice(1)}"`),`${path}: missing anchor ${href}`);
 }
 results.push({path,status:200,h1:1,canonical:canonical[1],schemas:schemas.length});
}
const book=pages.get('/book');assert.match(book,/https:\/\/calendar.google.com\/calendar\/u\/0\/appointments\/schedules\//);assert.match(book,/data-cta="booking-email"/);
const sitemap=await(await fetch(new URL('/sitemap.xml',base))).text();for(const p of paths.filter(x=>!x.startsWith('/book')))assert.ok(sitemap.includes(p==='/'?'<loc>':p),`sitemap ${p}`);
for(const p of ['/robots.txt','/sitemap-ai.xml','/favicon.ico','/images/bangkok.webp','/opengraph-image'])assert.equal((await fetch(new URL(p,base))).status,200,p);
console.log(JSON.stringify({passed:true,pages:results,checks:'Routes, one H1, skip targets, descriptions, canonical paths, JSON-LD parsing, Organization entity, booking noindex, internal links/anchors, Calendar/email CTAs, sitemap and assets'},null,2));
