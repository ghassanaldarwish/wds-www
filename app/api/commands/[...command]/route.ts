import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

const commandsURL = "http://host.docker.internal:6777";

export async function GET(request: NextRequest) {
  try {
    const response = await axios.get(commandsURL + "/healthcheck");
    const data = response.data;
    const json = {
      data,
    };

    return NextResponse.json(json);
  } catch (error) {
    console.error(error);
    return NextResponse.json(null);
  }
}

export async function POST(request: NextRequest, { params }: any) {
  const session: any = await getServerSession(options);
  const authorization = session?.accessToken;
  const body = await request.json();
  const pathname = `/${params.command.join("/")}`;

  try {
    const response = await axios({
      method: "POST",
      url: commandsURL + pathname,
      headers: {
        Authorization: authorization,
      },
      data: body,

      withCredentials: true,
    });

    return NextResponse.json(body);
  } catch (error) {
    console.error(error);
    return NextResponse.json(null);
  }
}
