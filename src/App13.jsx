import {useState,useRef,useEffect } from 'react';
import { createConnection } from './13/chat';

export default function App() {
    const inputRef = useRef(null);

    const[ show, setShow ] = useState(true);
    const ref = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [text , setText] = useState('');

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>
                Focus the input
            </button>

            <div>
                <button
                    onClick={() => {
                        setShow(!show);
                    }}>
                    Toggle with setState
                </button>
                <button
                    onClick={() => {
                    ref.current.remove();
                    }}>
                    Remove from the DOM
                </button>            
            </div>
            {show && <p ref={ref}>Hello world</p>}

            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />

            <ChatRoom />
        </>    
    );
}

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
        console.log('Playing video');
        ref.current.play();
    } else {
        console.log('Pausing video');
        ref.current.pause();
    }
  },[isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

function ChatRoom(){
    useEffect(() => {
        const connection = createConnection();
        connection.connect();

        return() => {
            connection.disconnect();
            console.log('ChatRoom component unmounted, connection closed');
        }
    },[])
}
