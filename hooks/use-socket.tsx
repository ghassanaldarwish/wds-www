import { useEffect, useState } from "react";

import socketio from "socket.io-client";
export default function useSocket({
  workspace,
  url,
  path = "/socket.io",
}: {
  workspace: string;
  url: string;
  path: string;
}) {
  const [socket, setSocket]: any = useState();

  useEffect(() => {
    if (!workspace && !url && !path) return;
    const getSocket = () => {
      return socketio(url, {
        withCredentials: true,
        path,
        // auth: { token },
      });
    };
    setSocket(getSocket());
  }, [path, url, workspace]);

  return socket;
}
