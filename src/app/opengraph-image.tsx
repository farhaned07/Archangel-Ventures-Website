import { ImageResponse } from "next/og";

export const alt = "Archangel — Make AI useful at work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f6f2",
          color: "#11110f",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 22, letterSpacing: "0.28em", fontWeight: 700 }}>ΛRCHΛNGEL</div>
          <div style={{ fontSize: 18, color: "#70706a" }}>Bangkok · BOI promoted</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
          <div style={{ fontSize: 90, lineHeight: 0.94, letterSpacing: "-0.055em", fontWeight: 600 }}>
            Make AI useful
          </div>
          <div style={{ fontSize: 90, lineHeight: 0.94, letterSpacing: "-0.055em", fontWeight: 600, color: "#777771" }}>
            at work.
          </div>
          <div style={{ marginTop: 32, fontSize: 24, color: "#62625d" }}>
            Strategy + implementation for management teams in Thailand.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #d8d8d2", paddingTop: 24 }}>
          <div style={{ fontSize: 18, color: "#6c6c66" }}>AI Transformation Partner</div>
          <div style={{ fontSize: 18, color: "#6c6c66" }}>Management workshop · ฿45,000</div>
        </div>
      </div>
    ),
    size,
  );
}
