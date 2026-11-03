import { ImageResponse } from "next/og";
export const alt = "Archangel — We deploy AI where work happens";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Original, brand-aligned social preview. */
export default function Image(){
 return new ImageResponse(
  (<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"58px 66px",fontFamily:"sans-serif",color:"#132423",background:"linear-gradient(125deg,#f8faf6 0%,#eef3ed 57%,#b2cfc4 100%)",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",width:570,height:570,borderRadius:570,top:80,right:-50,border:"1px solid #719c90",opacity:.24,display:"flex"}}/>
    <div style={{position:"absolute",width:420,height:420,borderRadius:420,top:160,right:25,border:"1px solid #719c90",opacity:.38,display:"flex"}}/>
    <div style={{position:"absolute",width:285,height:285,borderRadius:285,top:225,right:90,border:"1px solid #719c90",opacity:.55,display:"flex"}}/>
    <div style={{position:"absolute",width:9,height:9,borderRadius:9,background:"#2d837d",top:362,right:222,display:"flex"}}/>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",borderBottom:"1px solid #b6c7bd",paddingBottom:23}}>
      <span style={{fontSize:24,fontWeight:700,letterSpacing:".13em"}}>ΛRCHΛNGEL</span>
      <span style={{fontSize:13,letterSpacing:".13em",color:"#45645a"}}>FORWARD DEPLOYED ENGINEERING / THAILAND</span>
    </div>
    <div style={{display:"flex",flexDirection:"column",marginTop:38,maxWidth:900}}>
      <div style={{fontSize:79,lineHeight:1.01,letterSpacing:"-.065em",fontWeight:600}}>We deploy AI</div>
      <div style={{fontSize:79,lineHeight:1.01,letterSpacing:"-.065em",fontWeight:600,color:"#4e7c70"}}>where work</div>
      <div style={{fontSize:79,lineHeight:1.01,letterSpacing:"-.065em",fontWeight:600,color:"#4e7c70"}}>happens.</div>
      <div style={{fontSize:21,lineHeight:1.35,marginTop:30,color:"#435d53"}}>AI SYSTEMS · ENGINEERING · INTEGRATION · OPERATIONS</div>
    </div>
    <div style={{display:"flex",justifyContent:"space-between",borderTop:"1px solid #b6c7bd",paddingTop:20,width:"100%",fontSize:13,letterSpacing:".09em",color:"#48685d"}}>
      <span>INDEPENDENT BY DESIGN</span><span>ARCHANGEL COMPANY LIMITED</span>
    </div>
  </div>),size
 );
}
