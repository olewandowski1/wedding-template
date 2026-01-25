import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.NAME} — ${siteConfig.SHORT_DESCRIPTION}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function KoniczynkaLogo() {
  return (
    <div
      style={{
        width: 200,
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 32,
        zIndex: 2,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <path d="M50 50C50 35 35 25 25 35C15 45 25 60 50 50Z" fill="#14532d" />
        <path d="M50 50C65 50 75 35 65 25C55 15 40 25 50 50Z" fill="#14532d" />
        <path d="M50 50C50 65 65 75 75 65C85 55 75 40 50 50Z" fill="#14532d" />
        <path d="M50 50C35 50 25 65 35 75C45 85 60 75 50 50Z" fill="#166534" />
        <path
          d="M50 55C50 55 50 85 40 95"
          stroke="#14532d"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default async function OpenGraphImage() {
  let fontData: Buffer | ArrayBuffer;

  try {
    fontData = await readFile(
      join(process.cwd(), "assets/PlayfairDisplay-Regular.ttf"),
    );
  } catch {
    fontData = new ArrayBuffer(0);
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        position: "relative",

        // ✅ Higher-contrast background
        backgroundImage:
          "linear-gradient(180deg, #ecfdf5 0%, #d1fae5 60%, #a7f3d0 100%)",
        color: "#14532d",
      }}
    >
      {/* Stronger radial glow */}
      <div
        style={{
          position: "absolute",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(20,83,45,0.35) 0%, rgba(20,83,45,0.18) 35%, rgba(20,83,45,0.05) 55%, rgba(0,0,0,0) 70%)",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -60%)",
        }}
      />

      <KoniczynkaLogo />

      <div
        style={{
          fontSize: 72,
          fontWeight: 800,
          fontFamily: "Playfair Display, serif",
          marginBottom: 24,
          textAlign: "center",
          lineHeight: 1.1,
          zIndex: 2,
        }}
      >
        {siteConfig.NAME}
      </div>

      <div
        style={{
          fontSize: 32,
          maxWidth: 900,
          textAlign: "center",
          opacity: 0.95,
          lineHeight: 1.4,
          zIndex: 2,
        }}
      >
        {siteConfig.DESCRIPTION}
      </div>
    </div>,
    {
      ...size,
      fonts:
        fontData.byteLength > 0
          ? [
              {
                name: "Playfair Display",
                data: fontData,
                style: "normal",
                weight: 400,
              },
            ]
          : [],
    },
  );
}
