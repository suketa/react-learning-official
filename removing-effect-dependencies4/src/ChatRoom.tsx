import { useState, useEffect, useRef, useLayoutEffect } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from './chat';

export default function ChatRoom({ roomId, onMessage, serverUrl, isEncrypted }) {
  const refOnMessage = useRef(onMessage);

  useLayoutEffect(() => {
    refOnMessage.current = onMessage;
  }, [onMessage]);

  useEffect(() => {
    function createConnection() {
      const options = {
        serverUrl: serverUrl,
        roomId: roomId,
      };
      if (isEncrypted) {
        return createEncryptedConnection(options);
      } else {
        return createUnencryptedConnection(options);
      }
    }

    const connection = createConnection();
    connection.on('message', (msg) => refOnMessage.current(msg));
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

