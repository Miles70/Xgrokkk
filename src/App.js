import React, { useState, useEffect } from 'react';
import './App.css';
import StarsBackground from './StarsBackground';

function App() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: "Hello 👋 I'm XGROK AI. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [account, setAccount] = useState(null);

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
    return "I couldn't understand that right now, but soon I'll know everything! 🧠";
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("MetaMask bağlantısı reddedildi:", error);
      }
    } else {
      alert("MetaMask yüklü değil! Lütfen MetaMask tarayıcı eklentisini kur.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  return (
    <div className="app-container">
      <StarsBackground />

      {/* Wallet Button - Top Right */}
      <div className="wallet-section">
        {!account ? (
          <button className="connect-btn" onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <div className="wallet-address">🦊 {account.slice(0, 6)}...{account.slice(-4)}</div>
        )}
      </div>

      <div className="container">
        <img
          src="/xgrok_logo.png"
          alt="XGROK Logo"
          className="xgrok-logo"
        />

        {/* AI Chat */}
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
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>

      {/* HOW TO BUY XGROK */}
      <div className="section-box tasks-section">
        <div className="task-card">
          🦊 <span>Connect Wallet</span>: Use MetaMask or WalletConnect
        </div>
        <div className="task-card">
          💳 <span>Buy ETH</span>: Transfer ETH to your wallet
        </div>
        <div className="task-card">
          🌐 <span>Join Presale</span>: Swap ETH for $XGROK via the presale portal
        </div>
      </div>

      {/* ROADMAP */}
      <div className="section-box info-section">
        <h2 style={{ color: '#00bfff' }}>🚀 Roadmap</h2>
        <ul>
          <li><span style={{ color: '#00bfff' }}>Phase 1 – Initialization</span><br />▰▰▰▰▰▰▰▰▰▰ 100%</li>
          <li><span style={{ color: '#00bfff' }}>Phase 2 – Presale Madness</span><br />▰▰▰▰▰▰▰▱▱▱ 70%</li>
          <li><span style={{ color: '#00bfff' }}>Phase 3 – Airdrop & Engagement</span><br />▰▰▰▱▱▱▱▱▱▱ 30%</li>
          <li><span style={{ color: '#00bfff' }}>Phase 4 – Market Expansion</span><br />▰▰▱▱▱▱▱▱▱▱ 20%</li>
          <li><span style={{ color: '#00bfff' }}>Phase 5 – CEX Quest</span><br />▱▱▱▱▱▱▱▱▱▱ 0%</li>
          <li><span style={{ color: '#00bfff' }}>Phase 6 – Memevolution</span><br />▱▱▱▱▱▱▱▱▱▱ 0%</li>
        </ul>
      </div>

      {/* TOKENOMICS */}
      <div className="section-box info-section">
        <h2 style={{ color: '#00bfff' }}>📊 Tokenomics</h2>
        <ul>
          <li style={{ color: '#00bfff' }}>Total Supply: 666,000,000,000 $XGROK</li>
          <li style={{ color: '#00bfff' }}>Community: 50%</li>
          <li style={{ color: '#00bfff' }}>Team: 20% (locked)</li>
          <li style={{ color: '#00bfff' }}>Liquidity: 20%</li>
          <li style={{ color: '#00bfff' }}>Marketing: 10%</li>
        </ul>
      </div>

      {/* PARTNERS */}
      <div className="section-box partners">
        <div className="partners-title">🤝 Our Partners</div>
        <div className="partners-slider">
          <img src="/partners/binance.png" alt="binance" />
          <img src="/partners/ethereum.png" alt="ethereum" />
          <img src="/partners/uniswap.png" alt="uniswap" />
          <img src="/partners/solana.png" alt="solana" />
          <img src="/partners/openai.png" alt="openai" className="openai-logo" />
        </div>
      </div>

      {/* Floating Socials */}
      <div className="floating-social-links">
        <a href="https://t.me/Xgrokkk" target="_blank" rel="noopener noreferrer">
          <img src="/icons/telegram.png" alt="Telegram" />
        </a>
        <a href="https://twitter.com/Xgrokkk" target="_blank" rel="noopener noreferrer">
          <img src="/icons/twitter.png" alt="Twitter" />
        </a>
        <a href="https://instagram.com/xgrokkk" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
}

export default App;
