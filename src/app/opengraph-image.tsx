import { ImageResponse } from "next/og";

export const alt = "Archangel — We deploy AI where work happens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const rays = Array.from({length: 13}, (_,i)=> {
  const r=160+i*33;
  return {r,left:680-r,top:300-r};
});

export default function Image() {
  return new ImageResponse(
    <div style={{
      display:"flex",width:"100%",height:"100%",position:"relative",overflow:"hidden",
      background:"#f8faf7",fontFamily:"sans-serif",color:"#182322",flexDirection:"column",padding:"54px 65px"
    }}>
      <div style={{display:"flex",justifyContent:"space-between",fontSize:19,letterSpacing:"0.22em",fontWeight:700,paddingBottom:27,borderBottom:"1px solid #d5ded8",zIndex:2}}>
        <span>ΛRCHΛNGEL</span><span style={{fontSize:12,letterSpacing:"0.11em",color:"#6b7b74"}}>FORWARD DEPLOYED AI ENGINEERING</span>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",flex:1,zIndex:3}}>
        <div style={{display:"flex",fontSize:83,lineHeight:1.04,letterSpacing:"-0.066em",fontWeight:600}}>We deploy AI</div>
        <div style={{display:"flex",fontSize:83,lineHeight:1.04,letterSpacing:"-0.066em",fontWeight:600,color:"#5a7772"}}>where work happens.</div>
        <div style={{display:"flex",fontSize:23,color:"#63746d",marginTop:28}}>Engineering across models, systems and teams.</div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",paddingTop:24,borderTop:"1px solid #d5ded8",zIndex:3,fontSize:13,letterSpacing:".07em",color:"#677c72"}}>
        <span>DESIGN / INTEGRATE / EVALUATE / DEPLOY</span><span>ARCHANGEL · BANGKOK, THAILAND</span>
      </div>
      <div style={{position:"absolute",width:740,height:740,borderRadius:"50%",right:-370,top:-190,background:"radial-gradient(circle, rgba(122,194,175,0.30), rgba(207,229,210,0.14) 45%, transparent 75%)",display:"flex"}}/>
      {rays.map(({r,left,top})=><div key={r} style={{position:"absolute",display:"flex",border:"1px solid rgba(57,126,120,.13)",width:r*2,height:r*2,borderRadius:999,left,top}}/>)}
    </div>, size
  );
}
