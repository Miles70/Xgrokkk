import React, { useState, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti';
import StarsBackground from './StarsBackground';

function App() {
  const [timer, setTimer] = useState(60);
  const [earned, setEarned] = useState(0);
  const [claimable, setClaimable] = useState(false);

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Selam 👋 Ben XGROK AI. Sana nasıl yardımcı olabilirim?' }
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 1) {
          setClaimable(true);
          return 60;
        } else {
          return prevTimer - 1;
        }
      });

      setEarned(prevEarned => prevEarned + 0.3);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClaim = () => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#00FF00', '#FF69B4', '#00FFFF']
    });
    alert(`Claimed ${earned.toFixed(2)} XGROK! 🚀`);
    setClaimable(false);
    setEarned(0);
  };

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    const response = getFakeResponse(input);
    newMessages.push({ from: 'ai', text: response });
    setMessages(newMessages);
    setInput('');
  };

  const getFakeResponse = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes('farm')) return 'XGROK Farm, token kazanmanı sağlayan sistemdir!';
    if (lower.includes('claim')) return 'Claim butonuna basarak kazandığın tokenları alırsın.';
    if (lower.includes('token')) return 'XGROK token yakında ön satışa çıkacak!';
    return 'Şu anda bunu anlayamadım, ama yakında her şeyi bileceğim! 🧠';
  };

  return (
    <div className="app-container">
      <StarsBackground />

      <div className="container">
        <img
          src="/xgrok_logo.png"
          alt="XGROK Logo"
          className="xgrok-logo"
          style={{ maxWidth: '600px', width: '100%', marginBottom: '20px' }}
        />
        <div className="welcome-text neon-text">XGROK FARM</div>
        <div className="live-earned-title">Live Earnings:</div>
        <div className="live-earned-amount">{earned.toFixed(2)} XGROK</div>
        <div className="timer-text">Time left to claim: {timer}s</div>
        <br />
        <button
          className={claimable ? 'claim-button-active' : 'claim-button-disabled'}
          onClick={handleClaim}
          disabled={!claimable}
        >
          Claim Now!
        </button>
        <div className="golden-text">Presale Launching Very Soon – Get Ready to Join the Revolution! ⏳</div>
      </div>

      <div className="tasks-section">
        <div className="task-card">
          📢 <span>Follow on Twitter</span>: Stay updated, claim rewards!
        </div>
        <div className="task-card">
          🔁 <span>Retweet the Post</span>: Spread the word!
        </div>
        <div className="task-card">
          👥 <span>Join Telegram</span>: Strengthen the community!
        </div>
      </div>

      <div className="info-section">
        <h2>🚀 Roadmap</h2>
        <ul>
          <li>✅ Presale Launch – 12.09.2025</li>
          <li>🛠 Staking & Farming Module – 01.10.2025</li>
          <li>📱 Mobile Compatible Platform – 15.11.2025</li>
          <li>🌍 Partnerships & Global Launch – 01.01.2026</li>
        </ul>
      </div>

      <div className="info-section">
        <h2>📊 Tokenomics</h2>
        <ul>
          <li>Total Supply: 66,000,000,000,000 XGROK</li>
          <li>Community: 50%</li>
          <li>Team: 20% (locked for support)</li>
          <li>Liquidity: 20%</li>
          <li>Marketing: 10%</li>
        </ul>
      </div>

      <div className="partners">
        <div className="partners-title">🤝 Our Partners</div>
        <div className="partners-slider">
          <img src="/partners/binance.png" alt="binance" />
          <img src="/partners/ethereum.png" alt="ethereum" />
          <img src="/partners/uniswap.png" alt="uniswap" />
          <img src="/partners/solana.png" alt="solana" />
          <img src="/partners/openai.png" alt="openai" className="openai-logo" />
        </div>
      </div>

      {/* XGROK AI Chat Butonu */}
      <div className="xgrok-ai-button" onClick={toggleChat}>🤖</div>

      {isChatOpen && (
        <div className="xgrok-ai-chat-window">
          <div className="chat-header">
            <img src="/xgrok_ai_logo.png" alt="XGROK AI" className="chat-logo" />
            <span>XGROK AI</span>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <p key={i} className={msg.from}>{msg.text}</p>
            ))}
          </div>
          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Mesaj yaz..."
            />
            <button onClick={sendMessage}>Gönder</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
