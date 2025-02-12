import { useState, useEffect, useRef, useInsertionEffect } from 'react';
import { createConnection, sendMessage } from './chat';
import { showNotification } from './notifications';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  const refShowNotification = useRef(null);

  useInsertionEffect(() => {
    refShowNotification.current = () => {
      showNotification("Connected!", theme);
    }
  }, [showNotification, theme]);

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      refShowNotification.current();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}

