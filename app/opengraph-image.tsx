import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Portfolio de Mohamed Khalifa Boufares — Full-Stack, Data & Intelligence artificielle";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public", "photo-original.jpg"));
const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #070913 0%, #0d1024 55%, #160d2b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -140,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(34, 211, 238, 0.16)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 260,
            bottom: -220,
            width: 620,
            height: 620,
            borderRadius: 999,
            background: "rgba(139, 92, 246, 0.18)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -60,
            width: 520,
            height: 520,
            borderRadius: 999,
            border: "1px solid rgba(255, 255, 255, 0.14)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 720,
            height: "100%",
            padding: "0 0 0 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 6,
              color: "#67e8f9",
              marginBottom: 28,
            }}
          >
            PORTFOLIO · 2026
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Mohamed Khalifa
            <br />
            Boufares
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: "#c4b5fd",
              marginTop: 26,
            }}
          >
            Full-Stack · Data &amp; IA
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 34,
              padding: "12px 22px",
              borderRadius: 999,
              background: "rgba(52, 211, 153, 0.14)",
              border: "1px solid rgba(52, 211, 153, 0.35)",
              color: "#6ee7b7",
              fontSize: 20,
            }}
          >
            Disponible pour un PFE
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 70,
            top: 55,
            width: 410,
            height: 520,
            borderRadius: 44,
            overflow: "hidden",
            border: "4px solid rgba(255, 255, 255, 0.18)",
            display: "flex",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.55)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={410}
            height={520}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
