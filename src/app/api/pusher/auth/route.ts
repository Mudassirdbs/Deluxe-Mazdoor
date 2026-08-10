import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID || "",
  key: process.env.PUSHER_KEY || process.env.NEXT_PUBLIC_PUSHER_KEY || "",
  secret: process.env.PUSHER_SECRET || "",
  cluster: process.env.PUSHER_CLUSTER || process.env.NEXT_PUBLIC_PUSHER_CLUSTER || "",
  useTLS: true,
});

export async function POST(request: Request) {
  try {
    const text = await request.text();
    const params = new URLSearchParams(text);
    const socketId = params.get("socket_id");
    const channelName = params.get("channel_name");

    if (!socketId || !channelName) {
      return NextResponse.json({ error: "Missing socket_id or channel_name" }, { status: 400 });
    }

    const socketUserId = `user-${Math.random().toString(36).substring(2, 10)}-${Date.now()}`;
    const presenceData = {
      user_id: socketUserId,
      user_info: {
        onlineAt: new Date().toISOString(),
      },
    };

    const authResponse = pusher.authorizeChannel(socketId, channelName, presenceData);
    return NextResponse.json(authResponse);
  } catch (error) {
    console.error("Pusher auth error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
