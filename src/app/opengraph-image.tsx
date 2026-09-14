import { ImageResponse } from "next/og";

export const alt =
  "Dyvona — Building technology for problems that matter.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f1efe6",
          color: "#191917",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 16, height: 16, background: "#c7f04a" }} />
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, fontWeight: 700 }}>
            DYVONA
          </div>
          <div style={{ display: "flex", fontSize: 15, letterSpacing: 3, color: "#62615a", marginLeft: 10 }}>
            TECHNOLOGY / VENTURES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.06 }}>
            Building technology
          </div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.06 }}>
            for problems that matter.
          </div>
          <div style={{ display: "flex", fontSize: 23, color: "#62615a", marginTop: 26 }}>
            An early-stage venture — exploring ideas, building products, learning in public.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 15,
            letterSpacing: 2,
            color: "#62615a",
            borderTop: "1px solid rgba(25,25,23,0.25)",
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex" }}>MUMBAI, INDIA</div>
          <div style={{ display: "flex" }}>EST. 2026 — EARLY STAGE</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
