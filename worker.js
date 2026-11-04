export default{async fetch(req,env){const u=new URL(req.url);
if(u.pathname==='/api/checks'){let s=JSON.parse(await env.CHECKS.get('s')||'{"lin":{},"yao":{}}');
if(req.method==='POST'){try{const b=await req.json();if((b.who==='lin'||b.who==='yao')&&/^\d+-\d+$/.test(b.id)){if(b.done)s[b.who][b.id]=1;else delete s[b.who][b.id];await env.CHECKS.put('s',JSON.stringify(s))}}catch(e){}}
return new Response(JSON.stringify(s),{headers:{'content-type':'application/json','cache-control':'no-store'}})}
return env.ASSETS.fetch(req)}}
