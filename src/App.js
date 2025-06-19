// ✅ Full App.js – Epic Roadmap Sistemiyle
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

  const roadmapData = [
    {
      icon: "🪐",
      title: "Phase 0 – The Awakening",
      desc: "The chain is broken. A light leaks from the shadow. The seed of XGROK is planted.",
      points: ["🔸 Project birth", "🔸 Commander Miles awakens", "🔸 Manifesto written"],
      percent: 100,
    },
    {
      icon: "🚀",
      title: "Phase 1 – Initialization",
      desc: "First algorithms activated. The throne is forged.",
      points: ["🔸 Website ready", "🔸 AI chat system live", "🔸 First spark of community"],
      percent: 100,
    },
    {
      icon: "🔥",
      title: "Phase 2 – Presale Madness",
      desc: "Crowds awaken. The tower lights up.",
      points: ["🔸 Token launch prep", "🔸 Community activation", "🔸 Presale simulations", "🔸 First sales"],
      percent: 70,
    },
    {
      icon: "🎯",
      title: "Phase 3 – Airdrop & Engagement",
      desc: "Reward time. Only those who move, win.",
      points: ["🔸 Airdrop missions", "🔸 X/Twitter engagement", "🔸 Telegram mini tasks"],
      percent: 30,
    },
    {
      icon: "💥",
      title: "Phase 3.5 – Operation Viralstorm",
      desc: "XGROK memes everywhere. We are the trend.",
      points: ["🔸 Meme waves", "🔸 AI-powered viral content", "🔸 Tweetstorms, TikToks, Reels"],
      percent: 10,
    },
    {
      icon: "🌌",
      title: "Phase 4 – Market Expansion",
      desc: "Markets open. The storm spreads.",
      points: ["🔸 Influencer collaborations", "🔸 Mini-game integrations", "🔸 Token utility expansion"],
      percent: 20,
    },
    {
      icon: "🤝",
      title: "Phase 4.5 – Alliance Protocol",
      desc: "We are not alone. Kingdoms unite.",
      points: ["🔸 Partnerships", "🔸 Launchpad meetings", "🔸 Partner CEX/DEX connections"],
      percent: 0,
    },
    {
      icon: "🏛️",
      title: "Phase 5 – CEX Quest",
      desc: "They who ignored the throne, will now face it.",
      points: ["🔸 Medium-large CEX listings", "🔸 Liquidity boost", "🔸 Trust wave"],
      percent: 0,
    },
    {
      icon: "🧬",
      title: "Phase 6 – Memevolution",
      desc: "Not a token... a memetic organism.",
      points: ["🔸 Community governance", "🔸 AI-powered meme generator", "🔸 DAO system"],
      percent: 0,
    },
    {
      icon: "👑",
      title: "Phase 6.5 – The Crown",
      desc: "XGROK is no longer a kingdom... it's a civilization.",
      points: ["🔸 DAO voting", "🔸 Commander Council", "🔸 XGROK verse launch (⚔️ barlı çıbıklı sistem ve animasyonlu sürprizlerle)"],
      percent: 0,
    },
  ];

  return (
    <div className="app-container">
      <StarsBackground />

      {!account ? (
        <button className="connect-btn" onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div className="wallet-address">🦊 {account.slice(0, 6)}...{account.slice(-4)}</div>
      )}

      <div className="container">
        <img src="/xgrok_logo.png" alt="XGROK Logo" className="xgrok-logo" />

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

      {/* Tasks */}
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

      {/* 🚀 Full Roadmap */}
      <div className="section-box info-section roadmap-section">
        <h2 className="glowing-title">🚀 XGROK ROADMAP – FULL REFORGED VERSION</h2>
        <p className="roadmap-sub">“This is not a plan. It’s a prophecy.”</p>
        {roadmapData.map((phase, index) => (
          <div className="roadmap-card" key={index}>
            <h3>{phase.icon} {phase.title}</h3>
            <p className="roadmap-desc">{phase.desc}</p>
            <ul>
              {phase.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
            </ul>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${phase.percent}%` }}></div>
            </div>
            <div className="progress-label">{phase.percent}%</div>
          </div>
        ))}
      </div>

      {/* Tokenomics */}
      <div className="section-box info-section">
        <h2>📊 Tokenomics</h2>
        <ul>
          <li>Total Supply: 666,000,000,000 $XGROK</li>
          <li>Community: 50%</li>
          <li>Team: 20% (locked)</li>
          <li>Liquidity: 20%</li>
          <li>Marketing: 10%</li>
        </ul>
      </div>

      {/* Partners */}
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

      {/* Socials */}
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
