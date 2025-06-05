import { createConnection } from './19/chat.js';
import { useState , useEffect, use } from 'react';

const serverUrl = 'https://example.com/chat';


function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId]);
    return(
        <div>
            <h2>Chat Room: {roomId}</h2>
        </div>
    )
}

export default function App() {
    const[roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);

    return (
        <>
            <label>
                Choose the char room:{' '}
                <select
                    value={roomId}
                    onChange={(e) => {
                        setRoomId(e.target.value);
                    }}
                >
                    <option value="general">General</option>
                    <option value="tech">Tech</option>
                    <option value="random">Random</option>
                    <option value="news">News</option>

                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} /> }           
        </>
    );
}