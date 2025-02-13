import { useEffect } from 'react';
import { createConnection } from './chat';

export default function ChatRoom({ roomId, serverUrl }) {
  useEffect(() => {
    const connection = createConnection({ roomId, serverUrl });
    connection.connect();
    return () => connection.disconnect();
  }, [ roomId, serverUrl ]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

