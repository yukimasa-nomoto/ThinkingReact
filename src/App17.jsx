import { useState , useEffect } from 'react';

export default function App() {
    const[ count , setCount ] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // useEffectを確認する
    useEffect(() => {
        console.log('useEffect called');

        const handleResize = () => {
            console.log('Window resized');
            setWindowWidth(window.innerWidth);
        };

        // イベントリスナーを追加
        window.addEventListener('resize', handleResize);

        // クリーンアップ関数を返す
        return () => {
            console.log('Cleanup function called');
            window.removeEventListener('resize', handleResize);
        }

    },[windowWidth])

    console.log("component rendered");

    return (
        <div>
            <h3>ウィンドウサイズトラッカー</h3>
            <p>Count: {count}</p>
            <p>現在のウィンドウ幅: {windowWidth}px</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    );
}