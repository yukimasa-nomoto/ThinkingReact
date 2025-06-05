import { showNotification } from './20/notifications.js';
import { useState, useEffect } from 'react';
import { createConnection } from './20/chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
    useEffect(() => {
        console.log(`effect Started ${roomId} room!`);

        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        connection.on('connected', () => {
            console.log(`effect on ${roomId} room!`);

            showNotification(`Connected to the ${roomId} room!`, theme);
        });
        return () => {
            console.log(`effect Unmounted ${roomId} room!`);

            connection.disconnect();
            showNotification(`Disconnected from the ${roomId} room!`, theme);
        };
    },[roomId, theme])

    return(
        <h1>Welcome to the {roomId} room!</h1>
    )
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