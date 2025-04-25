import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [response, setResponse] = useState('');
  const noBtnRef = useRef(null);

  const moveNoButton = () => {
    const btn = noBtnRef.current;
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    btn.style.position = 'absolute';
    btn.style.left = `${randomX}%`;
    btn.style.top = `${randomY}%`;
  };

  return (
    <div className="App">
      {/* Background Music */}
      <audio autoPlay loop>
        <source
          src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
          type="audio/mpeg"
        />
      </audio>

      <h1>To My Dearest Kushboo 💖</h1>
      <p>
        Every day with you feels like a dream. Your smile lights up my world,
        and your heart makes mine beat faster.
      </p>
      <p>
        I can't imagine a life without you. You complete me in every way.
      </p>
      <h2 style={{ marginTop: '40px', color: '#e75480' }}>
        Will you marry me? 💍
      </h2>

      {response ? (
        <p style={{ fontSize: '1.5em', color: '#ff1493', marginTop: '30px' }}>{response}</p>
      ) : (
        <div style={{ marginTop: '50px' }}>
          <button
            onClick={() => setResponse("Yes! 💖 You’ve made me the happiest person alive!")}
          >
            💗 Yes 💗
          </button>
          <button
            ref={noBtnRef}
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            style={{ marginLeft: '20px' }}
          >
            ❌ No ❌
          </button>
        </div>
      )}

      {/* Floating hearts */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${4 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
            position: 'absolute',
            bottom: '-50px',
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
