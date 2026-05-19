import { useState, useEffect, useRef } from 'react'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'

// ╔══════════════════════════════════════════════════════════════╗
// ║         ⚙️  CONFIGURAÇÕES — edite aqui para personalizar     ║
// ╚══════════════════════════════════════════════════════════════╝
const CONFIG = {
  // Nomes do casal
  nomeDele: 'Seu Nome',
  nomeDela: 'Nome Dela',

  // Data de início do namoro (YYYY-MM-DD)
  dataAniversario: '2024-05-30',
  dataExibicao: '30 de Maio de 2024',

  // Música — coloque o arquivo em /src/assets/musica.mp3
  musicaUrl: './assets/musica.mp3',
  musicaNome: 'Nossa Música',
  musicaArtista: 'Artista',

  // Linha do tempo
  timeline: [
    {
      data: 'Janeiro 2024',
      titulo: 'Primeira conversa',
      texto: 'O começo de tudo. Sem perceber, minha vida já estava mudando.',
      emoji: '💬',
    },
    {
      data: 'Fevereiro 2024',
      titulo: 'Primeiro encontro',
      texto: 'A ansiedade, o frio na barriga e a certeza de que eu queria viver aquilo de novo.',
      emoji: '☕',
    },
    {
      data: '30 de Maio de 2024',
      titulo: 'Pedido de namoro',
      texto: 'O momento em que eu tive certeza de que era você.',
      emoji: '❤️',
    },
    {
      data: 'Hoje',
      titulo: 'Nosso Primeiro Ano',
      texto: 'Um ano depois, continuo me apaixonando por você todos os dias.',
      emoji: '🎉',
    },
  ],

  // Motivos — os cards viram ao passar o mouse
  motivos: [
    'Seu sorriso que ilumina qualquer ambiente',
    'A forma como você me faz sentir especial',
    'Sua gargalhada contagiante',
    'Sua força nos momentos difíceis',
    'A paz que sinto ao seu lado',
    'Cada mensagem de bom dia sua',
    'Como você cuida de mim',
    'Seus abraços que parecem um lar',
    'Sua inteligência e criatividade',
    'Tudo. Absolutamente tudo.',
  ],

  // Parágrafos da carta
  carta: [
    'Eu poderia escrever mil coisas aqui, mas nenhuma delas seria suficiente para explicar o quanto você mudou a minha vida.',
    'Obrigado por cada abraço, cada conversa, cada risada e por estar comigo até nos dias difíceis.',
    'Você é a melhor coisa que já aconteceu comigo, e eu tenho certeza de que quero te escolher todos os dias.',
    'Se esse foi apenas o primeiro capítulo, mal posso esperar para viver todos os próximos ao seu lado.',
  ],

  // Promessas para o futuro
  promessas: [
    'Te escolher todos os dias',
    'Estar presente nos momentos difíceis',
    'Celebrar cada conquista sua',
    'Te fazer sorrir sempre que puder',
    'Crescer junto a você',
    'Amar você cada dia mais',
  ],
}

// ─────────────────────────────────────────────────────────────
// Estilos globais (fontes + keyframes)
// ─────────────────────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&family=Great+Vibes&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: #080608;
    color: #f5e6d3;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #080608; }
  ::-webkit-scrollbar-thumb { background: #3a1a1a; border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: #c9a96e; }

  @keyframes floatPetal {
    0%   { transform: translateY(-10vh) rotate(0deg)   translateX(0px);   opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 0.7; }
    100% { transform: translateY(110vh) rotate(720deg) translateX(80px);  opacity: 0; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    15%      { transform: scale(1.35); }
    30%      { transform: scale(1); }
    45%      { transform: scale(1.18); }
    60%      { transform: scale(1); }
  }

  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50%       { transform: scale(1.04); }
  }

  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(180,80,80,0.15); }
    50%       { box-shadow: 0 0 50px rgba(180,80,80,0.45); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  @keyframes ringPulse {
    0%, 100% { transform: translate(-50%,-50%) scale(1);   opacity: 1; }
    50%       { transform: translate(-50%,-50%) scale(1.04); opacity: 0.7; }
  }

  .petal {
    position: absolute;
    pointer-events: none;
    animation: floatPetal linear infinite;
  }

  .shimmer-text {
    background: linear-gradient(90deg, #c9a96e 0%, #f5e6d3 40%, #e8c49a 60%, #c9a96e 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }

  .heartbeat { animation: heartbeat 2.4s ease-in-out infinite; }

  .photo-card {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    cursor: zoom-in;
    border: 1px solid rgba(201,169,110,0.12);
  }
  .photo-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
    display: block;
  }
  .photo-card:hover img { transform: scale(1.07); }
  .photo-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(8,6,8,0.85) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    padding: 20px 24px;
  }
  .photo-card:hover .photo-overlay { opacity: 1; }

  .reason-card { perspective: 1000px; cursor: pointer; }
  .reason-inner {
    transition: transform 0.7s ease;
    transform-style: preserve-3d;
    position: relative;
    height: 140px;
  }
  .reason-card:hover .reason-inner { transform: rotateY(180deg); }
  .reason-front, .reason-back {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    text-align: center;
  }
  .reason-back { transform: rotateY(180deg); }

  .promise-card {
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }
  .promise-card:hover {
    border-color: rgba(201,169,110,0.5) !important;
    background: linear-gradient(135deg, rgba(50,15,15,0.9), rgba(139,26,26,0.25)) !important;
    transform: translateY(-4px);
  }

  .enter-btn {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .enter-btn:hover {
    transform: scale(1.06) !important;
    box-shadow: 0 16px 60px rgba(139,26,26,0.75) !important;
  }

  .music-player {
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    animation: glowPulse 4s ease-in-out infinite;
  }

  .progress-bar {
    cursor: pointer;
    height: 4px;
    border-radius: 2px;
    background: rgba(255,255,255,0.12);
    position: relative;
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #8b3a3a, #c9a96e);
    border-radius: 2px;
    transition: width 0.1s linear;
    pointer-events: none;
  }

  .grain-overlay {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px;
  }

  @media (max-width: 640px) {
    .timeline-wrapper { padding-left: 40px; }
    .timeline-dot {
      left: 0 !important;
      transform: translateY(-50%) !important;
    }
    .timeline-card { width: 100% !important; }
    .timeline-row { justify-content: flex-start !important; }
    .timeline-line { left: 16px !important; }
  }
`

// ─────────────────────────────────────────────────────────────
// Pétalas flutuantes
// ─────────────────────────────────────────────────────────────
const SYMBOLS = ['🌹', '🌸', '❤️', '🌺', '✨', '🌷', '💕']

function FloatingPetals({ count = 24 }) {
  const petals = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${9 + Math.random() * 14}s`,
      delay: `${Math.random() * 12}s`,
      size: `${13 + Math.random() * 14}px`,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    }))
  ).current

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size,
            opacity: 0,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Hook — contador ao vivo
// ─────────────────────────────────────────────────────────────
function useCountup(dateStr) {
  const calc = () => {
    const diff = Date.now() - new Date(dateStr).getTime()
    const s = Math.floor(diff / 1000)
    return {
      years:   Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)),
      months:  Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)),
      weeks:   Math.floor(diff / (1000 * 60 * 60 * 24 * 7)),
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor(diff / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(diff / (1000 * 60)) % 60,
      seconds: Math.floor(diff / 1000) % 60,
      totalSeconds: s,
    }
  }

  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return t
}

// ─────────────────────────────────────────────────────────────
// Player de música
// ─────────────────────────────────────────────────────────────
function MusicPlayer({ url, nome, artista }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.75)

  const toggle = () => {
    if (!audioRef.current) return
    playing ? audioRef.current.pause() : audioRef.current.play()
    setPlaying(!playing)
  }

  const onTime = () => {
    if (!audioRef.current) return
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0)
  }

  const onMeta = () => audioRef.current && setDuration(audioRef.current.duration)

  const seekTo = (e) => {
    if (!audioRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * audioRef.current.duration
  }

  useEffect(() => { if (audioRef.current) audioRef.current.volume = volume }, [volume])

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
  }

  return (
    <div
      className="music-player"
      style={{
        background: 'linear-gradient(135deg, rgba(28,8,8,0.95), rgba(55,15,15,0.85))',
        border: '1px solid rgba(201,169,110,0.25)',
        borderRadius: 28,
        padding: '36px 44px',
        maxWidth: 520,
        margin: '0 auto',
      }}
    >
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={onTime}
        onLoadedMetadata={onMeta}
        onEnded={() => setPlaying(false)}
        loop
      />

      {/* Disco + título */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7a1212, #c9a96e)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            flexShrink: 0,
            boxShadow: '0 4px 24px rgba(139,26,26,0.5)',
            animation: playing ? 'spin 5s linear infinite' : 'none',
          }}
        >
          🎵
        </div>
        <div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 600, color: '#f5e6d3', lineHeight: 1.2 }}>
            {nome}
          </p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: '#c9a96e', marginTop: 6, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {artista}
          </p>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="progress-bar" onClick={seekTo} style={{ marginBottom: 8 }}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(245,230,211,0.35)', marginBottom: 32, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
        <span>{fmt((progress / 100) * duration)}</span>
        <span>{fmt(duration)}</span>
      </div>

      {/* Botão play */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
        <button
          onClick={toggle}
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #8b1a1a, #c94a2e)',
            border: 'none',
            color: '#fff',
            fontSize: 22,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 30px rgba(139,26,26,0.6)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(139,26,26,0.8)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 6px 30px rgba(139,26,26,0.6)' }}
        >
          {playing ? '⏸' : '▶'}
        </button>
      </div>

      {/* Volume */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 14, opacity: 0.35 }}>🔈</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{ flex: 1, accentColor: '#c9a96e', cursor: 'pointer', height: 4 }}
        />
        <span style={{ fontSize: 14, opacity: 0.35 }}>🔊</span>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────────────────────
function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.96)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'zoom-out',
        animation: 'fadeIn 0.3s ease',
      }}
    >
      <img
        src={src}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: 16,
          objectFit: 'contain',
          boxShadow: '0 0 80px rgba(0,0,0,0.9)',
          border: '1px solid rgba(201,169,110,0.15)',
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: '#fff',
          fontSize: 20,
          width: 44,
          height: 44,
          borderRadius: '50%',
          cursor: 'pointer',
          lineHeight: '44px',
          textAlign: 'center',
          transition: 'background 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
      >
        ✕
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────────────────────
export default function App() {
  const t = useCountup(CONFIG.dataAniversario)
  const [lightbox, setLightbox] = useState(null)

  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6]

  // tokens de cor (usados inline)
  const gold  = '#c9a96e'
  const cream = '#f5e6d3'
  const wine  = '#8b1a1a'
  const bg    = '#080608'

  const sectionLabel = (text) => (
    <p style={{
      fontFamily: 'Montserrat, sans-serif',
      fontSize: 11,
      letterSpacing: '0.5em',
      color: gold,
      textTransform: 'uppercase',
      marginBottom: 16,
    }}>
      {text}
    </p>
  )

  const sectionTitle = (text, style = {}) => (
    <h2 style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: 'clamp(32px, 5vw, 64px)',
      fontWeight: 600,
      color: cream,
      ...style,
    }}>
      {text}
    </h2>
  )

  return (
    <div style={{ background: bg, color: cream, minHeight: '100vh', overflowX: 'hidden' }}>
      <style>{GLOBAL_STYLES}</style>
      <div className="grain-overlay" />

      {lightbox !== null && (
        <Lightbox src={fotos[lightbox]} onClose={() => setLightbox(null)} />
      )}

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: `radial-gradient(ellipse at 50% 60%, #1c0808 0%, ${bg} 70%)`,
        }}
      >
        <FloatingPetals count={28} />

        {/* Anéis decorativos */}
        {[500, 750, 1050].map((size, i) => (
          <div
            key={size}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              borderRadius: '50%',
              border: `1px solid rgba(201,169,110,${0.08 - i * 0.02})`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              animation: `ringPulse ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: 820 }}>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 11,
            letterSpacing: '0.55em',
            color: gold,
            marginBottom: 36,
            textTransform: 'uppercase',
            animation: 'fadeInUp 1s ease 0.2s both',
          }}>
            {CONFIG.dataExibicao} &nbsp;·&nbsp; Primeiro Aniversário
          </p>

          <h1
            style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: 'clamp(64px, 13vw, 150px)',
              lineHeight: 1.05,
              marginBottom: 16,
              animation: 'fadeInUp 1s ease 0.4s both',
              background: `linear-gradient(135deg, ${gold}, ${cream}, ${gold})`,
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {CONFIG.nomeDele} & {CONFIG.nomeDela}
          </h1>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(18px, 3vw, 34px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(245,230,211,0.65)',
              marginBottom: 52,
              animation: 'fadeInUp 1s ease 0.6s both',
              letterSpacing: '0.04em',
            }}
          >
            "O melhor capítulo da minha vida."
          </h2>

          <div style={{ animation: 'fadeInUp 1s ease 0.8s both', marginBottom: 52 }}>
            <span className="heartbeat" style={{ fontSize: 52, display: 'inline-block' }}>❤️</span>
          </div>

          <a
            href="#contador"
            className="enter-btn"
            style={{
              display: 'inline-block',
              padding: '18px 56px',
              borderRadius: 100,
              background: `linear-gradient(135deg, ${wine}, #c9642e)`,
              color: '#fff',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 12,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              animation: 'fadeInUp 1s ease 1s both',
              boxShadow: '0 8px 40px rgba(139,26,26,0.55)',
            }}
          >
            Entrar ↓
          </a>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 220, background: `linear-gradient(to bottom, transparent, ${bg})`, pointerEvents: 'none', zIndex: 2 }} />
      </section>

      {/* ══════════════════════════════════════════
          CONTADOR AO VIVO
      ══════════════════════════════════════════ */}
      <section
        id="contador"
        style={{ padding: '110px 24px', textAlign: 'center', background: `linear-gradient(180deg, ${bg} 0%, #100608 100%)` }}
      >
        {sectionLabel('Estamos juntos há')}

        <h2
          className="shimmer-text"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(52px, 9vw, 110px)', fontWeight: 700, lineHeight: 1, marginBottom: 8 }}
        >
          {t.years > 0 ? `${t.years} Ano${t.years > 1 ? 's' : ''}` : `${t.days} Dias`}
        </h2>

        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,230,211,0.35)', marginBottom: 72 }}>
          e cada segundo conta…
        </p>

        {/* Cards principais */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, maxWidth: 820, margin: '0 auto 56px' }}>
          {[
            { n: String(t.hours).padStart(2, '0'),   l: 'Horas',    delay: '0s' },
            { n: String(t.minutes).padStart(2, '0'), l: 'Minutos',  delay: '0.15s' },
            { n: String(t.seconds).padStart(2, '0'), l: 'Segundos', delay: '0.3s' },
            { n: t.days.toLocaleString('pt-BR'),      l: 'Dias',     delay: '0.45s' },
          ].map(({ n, l, delay }) => (
            <div
              key={l}
              style={{
                background: 'linear-gradient(135deg, rgba(28,8,8,0.85), rgba(48,16,16,0.6))',
                border: '1px solid rgba(201,169,110,0.18)',
                borderRadius: 22,
                padding: '36px 12px',
                animation: `pulse 4s ease-in-out infinite`,
                animationDelay: delay,
              }}
            >
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6vw, 62px)', fontWeight: 700, color: cream, lineHeight: 1 }}>
                {n}
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.35em', color: gold, marginTop: 14, textTransform: 'uppercase' }}>
                {l}
              </p>
            </div>
          ))}
        </div>

        {/* Stats secundárias */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap' }}>
          {[
            { n: t.weeks.toLocaleString('pt-BR'), l: 'semanas juntos' },
            { n: t.totalSeconds?.toLocaleString('pt-BR'), l: 'segundos de amor' },
            { n: (t.days * 24).toLocaleString('pt-BR'), l: 'horas inesquecíveis' },
          ].map(({ n, l }) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30, fontWeight: 600, color: 'rgba(201,169,110,0.75)' }}>{n}</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(245,230,211,0.28)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MÚSICA
      ══════════════════════════════════════════ */}
      <section style={{ padding: '110px 24px', textAlign: 'center', background: '#0a0608' }}>
        {sectionLabel('Nossa Música')}
        {sectionTitle('A trilha sonora da nossa história.', { marginBottom: 64 })}
        <MusicPlayer url={CONFIG.musicaUrl} nome={CONFIG.musicaNome} artista={CONFIG.musicaArtista} />
      </section>

      {/* ══════════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════════ */}
      <section style={{ padding: '110px 24px', background: `linear-gradient(180deg, #0a0608, ${bg})` }}>
        <div style={{ textAlign: 'center', marginBottom: 88 }}>
          {sectionLabel('Nossa História')}
          {sectionTitle('Cada momento valeu a pena.')}
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative' }} className="timeline-wrapper">
          {/* Linha central */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              background: `linear-gradient(to bottom, transparent, rgba(201,169,110,0.25) 15%, rgba(201,169,110,0.25) 85%, transparent)`,
              transform: 'translateX(-50%)',
            }}
          />

          {CONFIG.timeline.map((item, i) => (
            <div
              key={i}
              className="timeline-row"
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: 52,
                position: 'relative',
              }}
            >
              {/* Ponto central */}
              <div
                className="timeline-dot"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 32,
                  transform: 'translate(-50%, -50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${wine}, ${gold})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  zIndex: 2,
                  boxShadow: `0 0 24px rgba(139,26,26,0.55)`,
                  border: `2px solid rgba(201,169,110,0.3)`,
                }}
              >
                {item.emoji}
              </div>

              <div
                className="timeline-card"
                style={{
                  width: '44%',
                  background: 'linear-gradient(135deg, rgba(28,8,8,0.92), rgba(18,6,6,0.85))',
                  border: '1px solid rgba(201,169,110,0.14)',
                  borderRadius: 22,
                  padding: '28px 30px',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: gold, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 10 }}>
                  {item.data}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 600, marginBottom: 10, color: cream }}>
                  {item.titulo}
                </h3>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.85, color: 'rgba(245,230,211,0.65)' }}>
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GALERIA
      ══════════════════════════════════════════ */}
      <section style={{ padding: '110px 24px', background: '#0a0608' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          {sectionLabel('Nossos Momentos')}
          {sectionTitle('Memórias que guardarei para sempre.')}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
          maxWidth: 1200,
          margin: '0 auto',
        }}>
          {fotos.map((src, i) => (
            <div
              key={i}
              className="photo-card"
              onClick={() => setLightbox(i)}
              style={{ height: i % 3 === 1 ? 500 : 380 }}
            >
              <img src={src} alt={`Memória ${i + 1}`} />
              <div className="photo-overlay">
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontStyle: 'italic', color: cream }}>
                  Memória {i + 1} &nbsp;❤️
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: 28, fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(245,230,211,0.25)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
          Clique para ampliar
        </p>
      </section>

      {/* ══════════════════════════════════════════
          MOTIVOS (flip cards)
      ══════════════════════════════════════════ */}
      <section style={{ padding: '110px 24px', background: `linear-gradient(180deg, ${bg}, #100608)` }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          {sectionLabel('Por que te amo')}
          {sectionTitle(`${CONFIG.motivos.length} motivos que não cabem numa lista.`, { marginBottom: 12 })}
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(245,230,211,0.35)', letterSpacing: '0.15em' }}>
            Passe o mouse nos cards para revelar ✨
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 14,
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {CONFIG.motivos.map((motivo, i) => (
            <div key={i} className="reason-card">
              <div className="reason-inner">
                <div
                  className="reason-front"
                  style={{
                    background: 'linear-gradient(135deg, rgba(28,8,8,0.92), rgba(48,16,16,0.7))',
                    border: '1px solid rgba(201,169,110,0.18)',
                  }}
                >
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, fontWeight: 700, color: gold }}>
                    {i + 1}
                  </p>
                </div>
                <div
                  className="reason-back"
                  style={{
                    background: `linear-gradient(135deg, ${wine}, #3a0a0a)`,
                    border: `1px solid rgba(201,169,110,0.28)`,
                  }}
                >
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.7, color: cream }}>
                    {motivo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CARTA
      ══════════════════════════════════════════ */}
      <section style={{ padding: '130px 24px', textAlign: 'center', background: bg }}>
        {sectionLabel('Para Você')}
        {sectionTitle('Obrigado por esse primeiro ano.', { marginBottom: 72 })}

        <div style={{
          maxWidth: 700,
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(28,8,8,0.7), rgba(18,6,6,0.85))',
          border: '1px solid rgba(201,169,110,0.15)',
          borderRadius: 32,
          padding: 'clamp(40px, 6vw, 80px)',
          backdropFilter: 'blur(20px)',
        }}>
          {CONFIG.carta.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(18px, 2.4vw, 26px)',
                lineHeight: 1.95,
                color: 'rgba(245,230,211,0.82)',
                fontStyle: 'italic',
                fontWeight: 300,
                marginBottom: i < CONFIG.carta.length - 1 ? 32 : 52,
              }}
            >
              "{para}"
            </p>
          ))}

          <p
            style={{
              fontFamily: 'Great Vibes, cursive',
              fontSize: 'clamp(44px, 7vw, 80px)',
              background: `linear-gradient(135deg, ${gold}, ${cream})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 12,
            }}
          >
            Eu te amo ❤️
          </p>

          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(245,230,211,0.3)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            — {CONFIG.nomeDele}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROMESSAS
      ══════════════════════════════════════════ */}
      <section style={{ padding: '110px 24px', background: `linear-gradient(180deg, ${bg}, #0d0408)` }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          {sectionLabel('Para o Futuro')}
          {sectionTitle('Minhas promessas para você.')}
        </div>

        <div style={{ maxWidth: 840, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
          {CONFIG.promessas.map((p, i) => (
            <div
              key={i}
              className="promise-card"
              style={{
                background: 'linear-gradient(135deg, rgba(28,8,8,0.7), rgba(139,26,26,0.1))',
                border: '1px solid rgba(201,169,110,0.14)',
                borderRadius: 20,
                padding: '28px 26px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 16,
              }}
            >
              <span style={{ color: gold, fontSize: 18, marginTop: 2, flexShrink: 0 }}>✦</span>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, lineHeight: 1.75, color: 'rgba(245,230,211,0.78)' }}>
                {p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer style={{
        borderTop: '1px solid rgba(201,169,110,0.08)',
        padding: '72px 24px',
        textAlign: 'center',
        background: '#080608',
      }}>
        <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: 56, color: gold, marginBottom: 20 }}>
          {CONFIG.nomeDele} & {CONFIG.nomeDela}
        </p>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(245,230,211,0.22)', letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: 40 }}>
          {CONFIG.dataExibicao}
        </p>
        <span className="heartbeat" style={{ fontSize: 28, display: 'inline-block' }}>❤️</span>
        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(245,230,211,0.12)', letterSpacing: '0.25em', marginTop: 36, textTransform: 'uppercase' }}>
          Feito com muito amor
        </p>
      </footer>
    </div>
  )
}