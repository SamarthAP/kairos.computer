import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    // Get custom text from query parameters if needed
    const { searchParams } = new URL(req.url);
    const subtitle =
      searchParams.get("subtitle") || "turn screen recordings into automations";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            padding: "80px",
            backgroundColor: "#0c0a09", // stone-950
            color: "#fafaf9", // stone-50
          }}
        >
          {/* Top branding */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                color: "#d97706",
                fontSize: "72px",
                fontWeight: "bold",
                marginBottom: "16px",
                display: "flex",
              }}
            >
              KAIROS
            </div>
            <div
              style={{
                color: "#737373",
                fontSize: "32px",
                display: "flex",
              }}
            >
              {"// " + subtitle}
            </div>
          </div>

          {/* Main message */}
          <div
            style={{
              fontSize: "80px",
              fontWeight: "bold",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              marginBottom: "40px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Show it once.</span>
            <span>Automate it forever.</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(`${e}`);
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
