import { useState, useEffect } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
}

function Playground() {
  const [text, setText] = useState('a');

  useEffect(() => {
    function onTimeout() {
      console.log('timer trgger',text);
    }

    console.log('setTimer', text);
    const timeoutId = setTimeout(onTimeout, 5000);

    return () => {
      console.log('stopTimer', text);
      clearTimeout(timeoutId);
    };

  },[text])

  return (
    <>
      <label>
        What to log:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  );
}
