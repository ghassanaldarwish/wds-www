import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Webdrei";

    //   const fontData = await fetch(
    //     new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
    //   ).then((res) => res.arrayBuffer())

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div style={{ marginTop: 40 }}>{title}</div>
        </div>
      ),
      {
        //   fonts: [
        //     {
        //       name: "Inter",
        //       data: fontData,
        //       style: "normal",
        //     },
        //   ],
      }
    );
  } catch (e: any) {
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
