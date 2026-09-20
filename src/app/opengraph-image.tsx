import { ImageResponse } from "next/og";

export const alt = "Archangel — Ideas into working technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#14221a", color: "#f4f7ee", padding: "58px 67px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #435546", paddingBottom: 24 }}>
          <div style={{ fontSize: 23, letterSpacing: "0.26em", fontWeight: 700 }}>ΛRCHΛNGEL</div>
          <div style={{ fontSize: 16, color: "#abc1aa" }}>BANGKOK / TECHNOLOGY STUDIO</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 0.99, letterSpacing: "-0.068em", fontWeight: 600 }}>Ideas into</div>
          <div style={{ fontSize: 96, lineHeight: 0.99, letterSpacing: "-0.068em", fontWeight: 600, color: "#d4f36c" }}>working technology.</div>
          <div style={{ fontSize: 25, color: "#b8c8b5", marginTop: 28 }}>AI systems · Software products · Digital experiences</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #435546", paddingTop: 24, color: "#abc1aa", fontSize: 17 }}>
          <span>DESIGN + ENGINEERING + IMPLEMENTATION</span>
          <span>ARCHANGEL COMPANY LIMITED</span>
        </div>
      </div>
    ), size
  );
}
