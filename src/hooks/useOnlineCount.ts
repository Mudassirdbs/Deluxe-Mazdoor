"use client";

import { useEffect, useState } from "react";

/** Live count of visitors currently on the site, via Pusher Presence Channels. */
export function useOnlineCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let activePusher: import("pusher-js").default | null = null;
    let activeChannel: ReturnType<import("pusher-js").default["subscribe"]> | null = null;

    const initPusher = async () => {
      const PusherModule = (await import("pusher-js")).default;
      const key = process.env.NEXT_PUBLIC_PUSHER_KEY;
      const cluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER || "ap2";

      if (!key) {
        console.warn("Pusher client key (NEXT_PUBLIC_PUSHER_KEY) is not defined.");
        return;
      }

      const pusher = new PusherModule(key, {
        cluster,
        authEndpoint: "/api/pusher/auth",
      });
      activePusher = pusher;

      const channel = pusher.subscribe("presence-mazdoor-chowk");
      activeChannel = channel;

      channel.bind("pusher:subscription_succeeded", (members: { count: number }) => {
        setCount(Math.max(1, members.count));
      });

      channel.bind("pusher:member_added", () => {
        const members = (channel as unknown as { members?: { count?: number } }).members;
        if (members?.count !== undefined) {
          setCount(Math.max(1, members.count));
        } else {
          setCount((prev) => prev + 1);
        }
      });

      channel.bind("pusher:member_removed", () => {
        const members = (channel as unknown as { members?: { count?: number } }).members;
        if (members?.count !== undefined) {
          setCount(Math.max(1, members.count));
        } else {
          setCount((prev) => Math.max(1, prev - 1));
        }
      });
    };

    void initPusher();

    return () => {
      if (activeChannel) {
        activeChannel.unbind_all();
      }
      if (activePusher) {
        activePusher.unsubscribe("presence-mazdoor-chowk");
        activePusher.disconnect();
      }
    };
  }, []);

  return count;
}
