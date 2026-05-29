import { useState, useEffect, useRef } from 'react'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'
import musicaSrc from './assets/musica.mp3'

const CONFIG = {
  nomeDele: 'Leandro',
  nomeDela: 'Beatriz',
  dataAniversario: '2025-05-31T22:00:00',
  dataExibicao: '31 de Maio de 2025',
  musicaUrl: musicaSrc,
  musicaNome: 'O Que É Que Tem',
  musicaArtista: 'Jorge & Mateus',
  timeline: [
    {
      data: '23 de Agosto de 2024',
      titulo: 'Primeira conversa',
      texto: 'O começo de tudo. Sem perceber, minha vida já estava mudando.',
      emoji: '💬',
    },
    {
      data: '31 de Maio de 2025',
      titulo: 'Primeiro encontro & Pedido de namoro',
      texto: 'O dia em que tudo mudou de verdade. O nosso primeiro encontro e o início oficial da nossa história.',
      emoji: '❤️',
    },
    {
      data: '26 de Setembro de 2025',
      titulo: 'Pedido de casamento',
      texto: 'O momento mais especial da nossa história. A certeza de que quero viver minha vida inteira ao seu lado.',
      emoji: '💍',
    },
    {
      data: '31 de Maio de 2026',
      titulo: 'Nosso Primeiro Ano',
      texto: 'Um ano depois, continuo me apaixonando por você todos os dias.',
      emoji: '🎉',
    },
  ],
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
  carta: [
    'Eu poderia escrever mil coisas aqui, mas nenhuma delas seria suficiente para explicar o quanto você mudou a minha vida.',
    'Obrigado por cada abraço, cada conversa, cada risada e por estar comigo até nos dias difíceis.',
    'Você é a melhor coisa que já aconteceu comigo, e eu tenho certeza de que quero te escolher todos os dias.',
    'Se esse foi apenas o primeiro capítulo, mal posso esperar para viver todos os próximos ao seu lado.',
  ],
  promessas: [
    'Te escolher todos os dias',
    'Estar presente nos momentos difíceis',
    'Celebrar cada conquista sua',
    'Te fazer sorrir sempre que puder',
    'Crescer junto a você',
    'Amar você cada dia mais',
  ],
}

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&family=Great+Vibes&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-overflow-scrolling: touch; }
  body { background: #080608; color: #f5e6d3; font-family: 'Montserrat', sans-serif; overflow-x: hidden; }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #080608; }
  ::-webkit-scrollbar-thumb { background: #3a1a1a; border-radius: 2px; }
  ::-webkit-scrollbar-thumb:hover { background: #c9a96e; }

  @keyframes floatPetal {
    0%   { transform: translateY(-10vh) rotate(0deg) translateX(0px); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 0.7; }
    100% { transform: translateY(110vh) rotate(720deg) translateX(80px); opacity: 0; }
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
    0%, 100% { transform: translate(-50%,-50%) scale(1);    opacity: 1; }
    50%       { transform: translate(-50%,-50%) scale(1.04); opacity: 0.7; }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes slideInLine {
    from { opacity: 0; transform: translateX(-18px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes scanline {
    0%   { top: 0%; }
    100% { top: 100%; }
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
  .photo-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; display: block; }
  .photo-card:hover img { transform: scale(1.07); }
  .photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(8,6,8,0.85) 0%, transparent 60%);
    opacity: 0; transition: opacity 0.4s ease;
    display: flex; align-items: flex-end; padding: 20px 24px;
  }
  .photo-card:hover .photo-overlay { opacity: 1; }

  .reason-card { perspective: 1000px; cursor: pointer; }
  .reason-inner { transition: transform 0.7s ease; transform-style: preserve-3d; position: relative; height: 140px; }
  .reason-card:hover .reason-inner { transform: rotateY(180deg); }
  .reason-front, .reason-back {
    position: absolute; inset: 0; backface-visibility: hidden;
    border-radius: 16px; display: flex; align-items: center; justify-content: center;
    padding: 16px; text-align: center;
  }
  .reason-back { transform: rotateY(180deg); }

  .promise-card { transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease; }
  .promise-card:hover {
    border-color: rgba(201,169,110,0.5) !important;
    background: linear-gradient(135deg, rgba(50,15,15,0.9), rgba(139,26,26,0.25)) !important;
    transform: translateY(-4px);
  }

  .enter-btn{
    padding:18px 52px;
    border-radius:999px;
    border:1px solid rgba(201,169,110,0.35);
    background:linear-gradient(135deg,#8b1a1a,#c9642e);
    color:#fff;
    font-size:14px;
    font-weight:600;
    letter-spacing:.25em;
    text-transform:uppercase;
    cursor:pointer;
    box-shadow:0 12px 40px rgba(139,26,26,.55);
    transition:all .35s ease;
  }

  .enter-btn:hover{
    transform:translateY(-4px) scale(1.05);
    box-shadow:0 20px 60px rgba(139,26,26,.75);
    border-color:rgba(201,169,110,.65);
  }

  .enter-btn:active{
    transform:scale(.98);
  }

  .music-player { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); animation: glowPulse 4s ease-in-out infinite; }

  .progress-bar { cursor: pointer; height: 4px; border-radius: 2px; background: rgba(255,255,255,0.12); position: relative; }
  .progress-fill { height: 100%; background: linear-gradient(90deg, #8b3a3a, #c9a96e); border-radius: 2px; transition: width 0.1s linear; pointer-events: none; }

  .grain-overlay {
    position: fixed; inset: 0; pointer-events: none; z-index: 9998; opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px;
  }

  @media (max-width: 640px) {
    .timeline-wrapper { padding-left: 40px; }
    .timeline-dot { left: 0 !important; transform: translateY(-50%) !important; }
    .timeline-card { width: 100% !important; }
    .timeline-row { justify-content: flex-start !important; }
    .timeline-line { left: 16px !important; }
  }
`

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
        <span key={p.id} className="petal" style={{ left: p.left, animationDuration: p.duration, animationDelay: p.delay, fontSize: p.size, opacity: 0 }}>
          {p.symbol}
        </span>
      ))}
    </div>
  )
}

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

function MusicPlayer({ url, nome, artista, externalAudioRef }) {
  const audioRef = externalAudioRef || useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.75)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const onTime  = () => setProgress((audio.currentTime / audio.duration) * 100 || 0)
    const onMeta  = () => setDuration(audio.duration)
    const onPlay  = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => setPlaying(false)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('loadedmetadata', onMeta)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)
    return () => {
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('loadedmetadata', onMeta)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    playing ? audioRef.current.pause() : audioRef.current.play()
  }

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

  const gold = '#c9a96e'; const cream = '#f5e6d3'

  return (
    <div className="music-player" style={{ background: 'linear-gradient(135deg, rgba(28,8,8,0.95), rgba(55,15,15,0.85))', border: '1px solid rgba(201,169,110,0.25)', borderRadius: 28, padding: '36px 44px', maxWidth: 520, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #7a1212, #c9a96e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, flexShrink: 0, boxShadow: '0 4px 24px rgba(139,26,26,0.5)', animation: playing ? 'spin 5s linear infinite' : 'none' }}>🎵</div>
        <div>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 600, color: cream, lineHeight: 1.2 }}>{nome}</p>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: gold, marginTop: 6, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{artista}</p>
        </div>
      </div>
      <div className="progress-bar" onClick={seekTo} style={{ marginBottom: 8 }}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(245,230,211,0.35)', marginBottom: 32, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
        <span>{fmt((progress / 100) * duration)}</span>
        <span>{fmt(duration)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
        <button onClick={toggle} style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #8b1a1a, #c94a2e)', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 30px rgba(139,26,26,0.6)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(139,26,26,0.8)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 6px 30px rgba(139,26,26,0.6)' }}>
          {playing ? '⏸' : '▶'}
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 14, opacity: 0.35 }}>🔈</span>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} style={{ flex: 1, accentColor: gold, cursor: 'pointer', height: 4 }} />
        <span style={{ fontSize: 14, opacity: 0.35 }}>🔊</span>
      </div>
    </div>
  )
}

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.96)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', animation: 'fadeIn 0.3s ease' }}>
      <img src={src} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 16, objectFit: 'contain', boxShadow: '0 0 80px rgba(0,0,0,0.9)', border: '1px solid rgba(201,169,110,0.15)' }} />
      <button onClick={onClose} style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: 20, width: 44, height: 44, borderRadius: '50%', cursor: 'pointer', lineHeight: '44px', textAlign: 'center', transition: 'background 0.2s' }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>✕</button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// STAGE 1 — Tela Hacker com loading real + matrix
// ─────────────────────────────────────────────────────────────
function HackerStage({ onNext }) {
  const [phase, setPhase] = useState('loading')
  const [barWidth, setBarWidth] = useState(0)
  const [visibleLines, setVisibleLines] = useState(0)

  const LINES = [
    '> INICIANDO PROTOCOLO DE AMOR...',
    '> CARREGANDO: leandro.heart ████████ 100%',
    '> CARREGANDO: beatriz.soul  ████████ 100%',
    '> SINCRONIZANDO CORAÇÕES...',
    '> WARNING: nível de amor acima do limite permitido',
    '> BYPASS: ignorando limite... ✓',
    '> COMPILANDO: 365 dias de memórias...',
    '> DEPLOY: primeiro_aniversario.exe',
    '> STATUS: amor instalado com sucesso ❤️',
    '> SISTEMA ESTÁVEL. BEM-VINDA, BEATRIZ.',
  ]

  useEffect(() => {
    if (phase !== 'loading') return
    let start = null
    const DURATION = 3200
    const tick = (ts) => {
      if (!start) start = ts
      const pct = Math.min(((ts - start) / DURATION) * 100, 100)
      setBarWidth(pct)
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setPhase('matrix'), 450)
      }
    }
    requestAnimationFrame(tick)
  }, [phase])

  useEffect(() => {
    if (phase !== 'matrix') return
    setVisibleLines(0)
    let i = 0
    const id = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= LINES.length) clearInterval(id)
    }, 360)
    return () => clearInterval(id)
  }, [phase])

  const isDone = phase === 'matrix' && visibleLines >= LINES.length

  return (
    <section style={{ minHeight: '100vh', background: '#020202', color: '#00ff88', fontFamily: '"Courier New", Courier, monospace', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px 24px' }}>
      {/* Scanlines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.03) 2px, rgba(0,255,136,0.03) 4px)' }} />
      {/* Linha de scan */}
      <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'rgba(0,255,136,0.18)', animation: 'scanline 4s linear infinite', pointerEvents: 'none', zIndex: 4 }} />
      {/* Fundo matrix */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, fontSize: 11, whiteSpace: 'pre-wrap', lineHeight: 1.3, color: '#00ff88', pointerEvents: 'none', overflow: 'hidden', wordBreak: 'break-all' }}>
        {Array(800).fill('10').join('01110100 01100101 01100001 ')}
      </div>

      <div style={{ width: '100%', maxWidth: 680, zIndex: 5 }}>
        <p style={{ fontSize: 13, letterSpacing: '0.4em', marginBottom: 36, textShadow: '0 0 12px #00ff88', textAlign: 'center' }}>
          [ LOVE.EXE — SISTEMA DE BOOT ]
        </p>

        {/* Barra de loading */}
        <div style={{ marginBottom: phase === 'loading' ? 0 : 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, fontSize: 12, opacity: 0.7 }}>
            <span>{phase === 'loading' ? 'CARREGANDO AMOR_SYSTEM...' : 'CARREGAMENTO CONCLUÍDO'}</span>
            <span style={{ color: '#00ff88' }}>{phase === 'loading' ? Math.round(barWidth) : 100}%</span>
          </div>
          <div style={{ width: '100%', height: 22, border: '1px solid #00ff88', borderRadius: 2, overflow: 'hidden', background: 'rgba(0,255,136,0.04)', boxShadow: '0 0 16px rgba(0,255,136,0.2)' }}>
            <div style={{ width: phase === 'loading' ? `${barWidth}%` : '100%', height: '100%', background: 'linear-gradient(90deg, #00b360, #00ff88)', boxShadow: '0 0 20px rgba(0,255,136,0.7)', transition: 'width 0.05s linear' }} />
          </div>
          {phase === 'loading' && (
            <p style={{ fontSize: 11, opacity: 0.4, letterSpacing: '0.2em', marginTop: 12, animation: 'blink 1.1s ease-in-out infinite' }}>
              ▌ inicializando módulos...
            </p>
          )}
        </div>

        {/* Linhas de código */}
        {phase !== 'loading' && (
          <div style={{ fontSize: 13, lineHeight: 2.1, textShadow: '0 0 8px rgba(0,255,136,0.6)', marginTop: 8 }}>
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={{ animation: 'slideInLine 0.35s ease forwards', color: line.includes('WARNING') ? '#ffdd00' : (line.includes('sucesso') || line.includes('ESTÁVEL')) ? '#00ffcc' : '#00ff88' }}>
                {line}
              </div>
            ))}
            {!isDone && <span style={{ animation: 'blink 0.6s step-end infinite' }}>▌</span>}
          </div>
        )}

        {/* Botão */}
        {isDone && (
          <div style={{ marginTop: 48, textAlign: 'center', animation: 'fadeInUp 0.6s ease both' }}>
            <button
              onClick={onNext}
              style={{ padding: '16px 44px', background: 'transparent', border: '1px solid #00ff88', color: '#00ff88', cursor: 'pointer', fontFamily: 'monospace', fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', boxShadow: '0 0 24px rgba(0,255,136,0.3)', transition: 'all 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,255,136,0.12)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,255,136,0.5)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,255,136,0.3)' }}
            >
              CONTINUAR →
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// STAGE 2 — Space Shooter
// ─────────────────────────────────────────────────────────────
function SpaceGameStage({ onNext }) {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState('intro') // 'intro' | 'playing' | 'win'
  const [showNext, setShowNext] = useState(false)

  useEffect(() => {
    if (gameState !== 'playing') return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.width
    const H = () => canvas.height

    const ship = { x: 80, y: 0, w: 48, h: 32 }
    ship.y = H() / 2

    const bullets  = []
    const enemies  = []
    const particles = []
    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * 900, y: Math.random() * 600,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 1.5 + 0.4,
      twinkle: Math.random() * Math.PI * 2,
    }))

    let scoreVal = 0
    let frame = 0
    let running = true
    let animId

    const keys = {}
    const onKeyDown = (e) => { keys[e.key] = true;  if (e.key === ' ') { shoot(); e.preventDefault() } }
    const onKeyUp   = (e) => { keys[e.key] = false }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup',   onKeyUp)

    let touchY = null
    const onTouchStart = (e) => { touchY = e.touches[0].clientY }
    const onTouchMove  = (e) => {
      if (touchY === null) return
      ship.y = Math.max(30, Math.min(H() - 30, ship.y + (e.touches[0].clientY - touchY)))
      touchY = e.touches[0].clientY
    }
    canvas.addEventListener('touchstart', onTouchStart, { passive: true })
    canvas.addEventListener('touchmove',  onTouchMove,  { passive: true })
    canvas.addEventListener('click', () => shoot())

    const shoot = () => bullets.push({ x: ship.x + ship.w / 2, y: ship.y, speed: 11 })

    const spawnEnemy = () => enemies.push({
      x: W() + 50,
      y: 60 + Math.random() * (H() - 120),
      w: 36, h: 28,
      speed: 2.0 + Math.random() * 1.6,
      wobble: Math.random() * Math.PI * 2,
    })

    const hit = (ax, ay, aw, ah, bx, by, bw, bh) =>
      Math.abs(ax - bx) < (aw + bw) / 2 && Math.abs(ay - by) < (ah + bh) / 2

    const drawShip = (x, y) => {
      ctx.save(); ctx.translate(x, y)
      ctx.fillStyle = '#8b1a1a'
      ctx.beginPath(); ctx.moveTo(28,0); ctx.lineTo(-20,-14); ctx.lineTo(-10,0); ctx.lineTo(-20,14); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#c9a96e'
      ctx.beginPath(); ctx.moveTo(28,0); ctx.lineTo(4,-6); ctx.lineTo(4,6); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#ff6633'; ctx.shadowColor = '#ff6633'; ctx.shadowBlur = 10
      ctx.beginPath(); ctx.ellipse(-14, 0, 6, 3, 0, 0, Math.PI * 2); ctx.fill()
      ctx.shadowBlur = 0; ctx.restore()
    }

    const drawEnemy = (e) => {
      ctx.save(); ctx.translate(e.x, e.y)
      ctx.fillStyle = '#1a5c1a'
      ctx.beginPath(); ctx.moveTo(-20,0); ctx.lineTo(10,-12); ctx.lineTo(18,0); ctx.lineTo(10,12); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#00ff88'; ctx.shadowColor = '#00ff88'; ctx.shadowBlur = 8
      ctx.beginPath(); ctx.arc(2, 0, 5, 0, Math.PI * 2); ctx.fill()
      ctx.shadowBlur = 0; ctx.restore()
    }

    const loop = () => {
      if (!running) return
      frame++
      ctx.clearRect(0, 0, W(), H())

      // Fundo
      ctx.fillStyle = '#050816'; ctx.fillRect(0, 0, W(), H())

      // Estrelas
      stars.forEach((s) => {
        s.x -= s.speed; if (s.x < 0) { s.x = W(); s.y = Math.random() * H() }
        s.twinkle += 0.05
        ctx.globalAlpha = 0.25 + Math.sin(s.twinkle) * 0.25
        ctx.fillStyle = '#ffffff'
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill()
      })
      ctx.globalAlpha = 1

      // Mover nave
      if (keys['ArrowUp']   || keys['w'] || keys['W']) ship.y -= 4.5
      if (keys['ArrowDown'] || keys['s'] || keys['S']) ship.y += 4.5
      ship.y = Math.max(30, Math.min(H() - 30, ship.y))

      // Spawn inimigos
      if (frame % 65 === 0) spawnEnemy()
      // Auto-atira
      if (frame % 24 === 0) shoot()

      // Balas
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i]
        b.x += b.speed
        if (b.x > W() + 20) { bullets.splice(i, 1); continue }
        let killed = false
        for (let j = enemies.length - 1; j >= 0; j--) {
          if (hit(b.x, b.y, 8, 8, enemies[j].x, enemies[j].y, enemies[j].w, enemies[j].h)) {
            for (let k = 0; k < 14; k++) {
              particles.push({ x: enemies[j].x, y: enemies[j].y, vx: (Math.random()-0.5)*7, vy: (Math.random()-0.5)*7, life: 1, color: ['#ff6633','#ffdd00','#ff3300'][Math.floor(Math.random()*3)] })
            }
            enemies.splice(j, 1); bullets.splice(i, 1)
            scoreVal++; setScore(scoreVal); killed = true
            if (scoreVal >= 7) {
              running = false; cancelAnimationFrame(animId)
              setGameState('win'); setTimeout(() => setShowNext(true), 700)
              window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('resize', resize)
              return
            }
            break
          }
        }
        if (!killed && i < bullets.length) {
          ctx.fillStyle = '#c9a96e'; ctx.shadowColor = '#c9a96e'; ctx.shadowBlur = 8
          ctx.fillRect(b.x - 12, b.y - 2, 14, 4); ctx.shadowBlur = 0
        }
      }

      // Inimigos
      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i]
        e.x -= e.speed; e.wobble += 0.055; e.y += Math.sin(e.wobble) * 1.4
        if (e.x < -60) { enemies.splice(i, 1); continue }
        drawEnemy(e)
      }

      // Partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.life -= 0.055
        if (p.life <= 0) { particles.splice(i, 1); continue }
        ctx.globalAlpha = p.life; ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 6
        ctx.beginPath(); ctx.arc(p.x, p.y, 3 * p.life + 1, 0, Math.PI * 2); ctx.fill()
        ctx.shadowBlur = 0
      }
      ctx.globalAlpha = 1

      drawShip(ship.x, ship.y)

      // HUD
      ctx.fillStyle = '#c9a96e'; ctx.font = '600 13px "Courier New"'
      ctx.fillText(`PONTOS: ${scoreVal} / 7`, 16, 28)
      ctx.fillStyle = 'rgba(201,169,110,0.4)'; ctx.font = '11px "Courier New"'
      ctx.fillText('↑↓ ou WASD para mover · ESPAÇO ou toque para atirar', 16, H() - 14)

      animId = requestAnimationFrame(loop)
    }

    animId = requestAnimationFrame(loop)

    return () => {
      running = false; cancelAnimationFrame(animId)
      window.removeEventListener('keydown', onKeyDown); window.removeEventListener('keyup', onKeyUp); window.removeEventListener('resize', resize)
    }
  }, [gameState])

  return (
    <section style={{ minHeight: '100vh', background: 'linear-gradient(#050816, #0d1020)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', fontFamily: '"Courier New", monospace', color: '#fff', position: 'relative', overflow: 'hidden' }}>

      {gameState === 'intro' && (
        <div style={{ textAlign: 'center', maxWidth: 600 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.5em', color: '#c9a96e', marginBottom: 20, textTransform: 'uppercase' }}>LEVEL 01 — SPACE SHOOTER</p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 6vw, 76px)', marginBottom: 20, lineHeight: 1.2 }}>
            MISSÃO:<br />
            <span style={{ color: '#c9a96e' }}>Destruir 7 naves ❤️</span>
          </h1>
          <p style={{ fontSize: 13, opacity: 0.55, marginBottom: 52, lineHeight: 2 }}>
            Setas ou WASD para mover<br />
            Arraste o dedo para mover<br />
            (a nave atira sozinha ✨)
          </p>
          <button
            onClick={() => setGameState('playing')}
            style={{ padding: '16px 52px', background: 'linear-gradient(135deg, #8b1a1a, #c9642e)', border: 'none', borderRadius: 999, color: '#fff', fontSize: 13, letterSpacing: '0.3em', cursor: 'pointer', boxShadow: '0 8px 40px rgba(139,26,26,0.55)', transition: 'transform 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            INICIAR MISSÃO ▶
          </button>
        </div>
      )}

      {gameState === 'playing' && (
        <div style={{ width: '100%', maxWidth: 820, position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 12, letterSpacing: '0.25em', opacity: 0.7 }}>
            <span>SPACE SHOOTER</span>
            <span>PONTOS: {score} / 7</span>
          </div>
          <canvas
            ref={canvasRef}
            style={{ width: '100%', height: 'clamp(300px, 50vw, 480px)', display: 'block', border: '1px solid rgba(201,169,110,0.25)', borderRadius: 16, background: '#050816', cursor: 'crosshair', touchAction: 'none' }}
          />
        </div>
      )}

      {gameState === 'win' && (
        <div style={{ textAlign: 'center', animation: 'fadeInUp 0.6s ease both' }}>
          <p style={{ fontSize: 52, marginBottom: 16 }}>🎉</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 72px)', marginBottom: 16, color: '#c9a96e' }}>MISSÃO CONCLUÍDA!</h2>
          <p style={{ opacity: 0.5, marginBottom: 52, fontSize: 13, letterSpacing: '0.25em' }}>{score} NAVES DESTRUÍDAS</p>
          {showNext && (
            <button
              onClick={onNext}
              style={{ padding: '16px 52px', background: 'linear-gradient(135deg, #8b1a1a, #c9642e)', border: 'none', borderRadius: 999, color: '#fff', fontSize: 13, letterSpacing: '0.25em', cursor: 'pointer', boxShadow: '0 8px 40px rgba(139,26,26,0.55)', animation: 'fadeInUp 0.5s ease both' }}
            >
              PRÓXIMA FASE ❤️
            </button>
          )}
        </div>
      )}
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// APP PRINCIPAL
// ─────────────────────────────────────────────────────────────
export default function App() {
  const [stage, setStage] = useState(0)
  const [entered, setEntered] = useState(false)
  const audioRef = useRef(null)
  const t = useCountup(CONFIG.dataAniversario)
  const [lightbox, setLightbox] = useState(null)

  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6]
  const gold  = '#c9a96e'
  const cream = '#f5e6d3'
  const wine  = '#8b1a1a'
  const bg    = '#080608'

  const sectionLabel = (text) => (
    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.5em', color: gold, textTransform: 'uppercase', marginBottom: 16 }}>{text}</p>
  )
  const sectionTitle = (text, style = {}) => (
    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 600, color: cream, ...style }}>{text}</h2>
  )

  return (
    <div style={{ background: bg, color: cream, minHeight: '100vh', overflowX: 'hidden', overflowY: entered ? 'auto' : 'hidden', height: entered ? 'auto' : '100vh' }}>
      <style>{GLOBAL_STYLES}</style>
      <div className="grain-overlay" />
      <audio ref={audioRef} src={CONFIG.musicaUrl} loop />
      {lightbox !== null && <Lightbox src={fotos[lightbox]} onClose={() => setLightbox(null)} />}

      {/* ══ STAGE 3 — HERO ══ */}
      {stage === 3 && (
        <section style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden', background: `radial-gradient(ellipse at 50% 60%, #1c0808 0%, ${bg} 70%)` }}>
          <FloatingPetals count={28} />
          {[500, 750, 1050].map((size, i) => (
            <div key={size} style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', border: `1px solid rgba(201,169,110,${0.08 - i * 0.02})`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: `ringPulse ${6 + i * 2}s ease-in-out infinite`, animationDelay: `${i * 0.8}s`, pointerEvents: 'none' }} />
          ))}
          <div style={{ position: 'relative', zIndex: 2, padding: '0 24px', maxWidth: 820 }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, letterSpacing: '0.55em', color: gold, marginBottom: 36, textTransform: 'uppercase', animation: 'fadeInUp 1s ease 0.2s both' }}>
              {CONFIG.dataExibicao} &nbsp;·&nbsp; Primeiro Aniversário
            </p>
            <h1 style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(52px, 14vw, 140px)', lineHeight: 1.05, marginBottom: 16, animation: 'fadeInUp 1s ease 0.4s both', background: `linear-gradient(135deg, ${gold}, ${cream}, ${gold})`, backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {CONFIG.nomeDele} & {CONFIG.nomeDela}
            </h1>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 5vw, 34px)', fontWeight: 300, fontStyle: 'italic', color: 'rgba(245,230,211,0.65)', marginBottom: 52, animation: 'fadeInUp 1s ease 0.6s both', letterSpacing: '0.04em' }}>
              "O melhor capítulo da minha vida."
            </h2>
            <div style={{ animation: 'fadeInUp 1s ease 0.8s both', marginBottom: 52 }}>
              <span className="heartbeat" style={{ fontSize: 52, display: 'inline-block' }}>❤️</span>
            </div>
            <button
              className="enter-btn"
              onClick={() => {
                setEntered(true)
                setStage(4)

                if (audioRef.current) {
                  audioRef.current.volume = 0.35
                  audioRef.current.play().catch(() => {})
                }

                setTimeout(() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth',
                  })
                }, 1200)
              }}
            >
              Entrar ↓
            </button>
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 220, background: `linear-gradient(to bottom, transparent, ${bg})`, pointerEvents: 'none', zIndex: 2 }} />
        </section>
      )}

      {/* ══ STAGE 0 — HACKER ══ */}
      {stage === 0 && <HackerStage onNext={() => setStage(1)} />}

      {/* ══ STAGE 1 — SPACE GAME ══ */}
      {stage === 1 && <SpaceGameStage onNext={() => setStage(2)} />}

      {/* ══ STAGE 2 — TRANSIÇÃO ══ */}
      {stage === 2 && (
        <section style={{ minHeight: '100vh', background: '#080608', color: '#f5e6d3', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '24px' }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 6vw, 72px)',
              maxWidth: 1000,
              lineHeight: 1.3,
              marginBottom: 40,
            }}
          >
            Não poderia faltar um presente feito do meu jeito ❤️
          </h2>

          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 18,
              color: 'rgba(245,230,211,0.7)',
              maxWidth: 800,
              marginBottom: 60,
              lineHeight: 2,
            }}
          >
            Afinal, você escolheu alguém que é programador,
            apaixonado por tecnologia, que gosta de games,
            adora criar coisas diferentes...
            <br /><br />
            Mas acima de tudo,
            alguém que te ama mais do que qualquer linha de código poderia explicar.
          </p>
          <button
            onClick={() => setStage(3)}
            style={{
              padding: '18px 46px',
              borderRadius: 999,
              border: 'none',
              background: 'linear-gradient(135deg, #8b1a1a, #c9642e)',
              color: '#fff',
              fontSize: 14,
              letterSpacing: '0.2em',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            Continuar ❤️
          </button>
        </section>
      )}

      {/* ══ STAGE 4 — SITE PRINCIPAL ══ */}
      {stage === 4 && entered && (
        <>
          {/* CONTADOR */}
          <section id="contador" style={{ padding: '110px 24px', textAlign: 'center', background: `linear-gradient(180deg, ${bg} 0%, #100608 100%)` }}>
            {sectionLabel('Estamos juntos há')}
            <h2 className="shimmer-text" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(52px, 9vw, 110px)', fontWeight: 700, lineHeight: 1, marginBottom: 8 }}>
              {t.years > 0 ? `${t.years} Ano${t.years > 1 ? 's' : ''}` : `${t.days} Dias`}
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontStyle: 'italic', color: 'rgba(245,230,211,0.35)', marginBottom: 72 }}>e cada segundo conta…</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 14, maxWidth: '92vw', margin: '0 auto 56px' }}>
              {[
                { n: String(t.hours).padStart(2,'0'),   l: 'Horas',    delay: '0s' },
                { n: String(t.minutes).padStart(2,'0'), l: 'Minutos',  delay: '0.15s' },
                { n: String(t.seconds).padStart(2,'0'), l: 'Segundos', delay: '0.3s' },
                { n: t.days.toLocaleString('pt-BR'),    l: 'Dias',     delay: '0.45s' },
              ].map(({ n, l, delay }) => (
                <div key={l} style={{ background: 'linear-gradient(135deg, rgba(28,8,8,0.85), rgba(48,16,16,0.6))', border: '1px solid rgba(201,169,110,0.18)', borderRadius: 22, padding: '36px 12px', animation: `pulse 4s ease-in-out infinite`, animationDelay: delay }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6vw, 62px)', fontWeight: 700, color: cream, lineHeight: 1 }}>{n}</p>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, letterSpacing: '0.35em', color: gold, marginTop: 14, textTransform: 'uppercase' }}>{l}</p>
                </div>
              ))}
            </div>
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

          {/* MÚSICA */}
          <section style={{ padding: '110px 24px', textAlign: 'center', background: '#0a0608' }}>
            {sectionLabel('Nossa Música')}
            {sectionTitle('A trilha sonora da nossa história.', { marginBottom: 64 })}
            <MusicPlayer url={CONFIG.musicaUrl} nome={CONFIG.musicaNome} artista={CONFIG.musicaArtista} externalAudioRef={audioRef} />
          </section>

          {/* TIMELINE */}
          <section style={{ padding: '110px 24px', background: `linear-gradient(180deg, #0a0608, ${bg})` }}>
            <div style={{ textAlign: 'center', marginBottom: 88 }}>
              {sectionLabel('Nossa História')}
              {sectionTitle('Cada momento valeu a pena.')}
            </div>
            <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative' }} className="timeline-wrapper">
              <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, rgba(201,169,110,0.25) 15%, rgba(201,169,110,0.25) 85%, transparent)`, transform: 'translateX(-50%)' }} />
              {CONFIG.timeline.map((item, i) => (
                <div key={i} className="timeline-row" style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: 52, position: 'relative' }}>
                  <div className="timeline-dot" style={{ position: 'absolute', left: '50%', top: 32, transform: 'translate(-50%, -50%)', width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${wine}, ${gold})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, zIndex: 2, boxShadow: `0 0 24px rgba(139,26,26,0.55)`, border: `2px solid rgba(201,169,110,0.3)` }}>
                    {item.emoji}
                  </div>
                  <div className="timeline-card" style={{ width: '44%', background: 'linear-gradient(135deg, rgba(28,8,8,0.92), rgba(18,6,6,0.85))', border: '1px solid rgba(201,169,110,0.14)', borderRadius: 22, padding: '28px 30px', backdropFilter: 'blur(12px)' }}>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: gold, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 10 }}>{item.data}</p>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 600, marginBottom: 10, color: cream }}>{item.titulo}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 13, lineHeight: 1.85, color: 'rgba(245,230,211,0.65)' }}>{item.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GALERIA */}
          <section style={{ padding: '110px 24px', background: '#0a0608' }}>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              {sectionLabel('Nossos Momentos')}
              {sectionTitle('Memórias que guardarei para sempre.')}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, maxWidth: 1200, margin: '0 auto' }}>
              {fotos.map((src, i) => (
                <div key={i} className="photo-card" onClick={() => setLightbox(i)} style={{ height: i % 3 === 1 ? 500 : 380 }}>
                  <img src={src} alt={`Memória ${i + 1}`} />
                  <div className="photo-overlay">
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontStyle: 'italic', color: cream }}>Memória {i + 1} &nbsp;❤️</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: 28, fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(245,230,211,0.25)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Clique para ampliar</p>
          </section>

          {/* MOTIVOS */}
          <section style={{ padding: '110px 24px', background: `linear-gradient(180deg, ${bg}, #100608)` }}>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              {sectionLabel('Por que te amo')}
              {sectionTitle(`${CONFIG.motivos.length} motivos que não cabem numa lista.`, { marginBottom: 12 })}
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(245,230,211,0.35)', letterSpacing: '0.15em' }}>Passe o mouse nos cards para revelar ✨</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14, maxWidth: 1000, margin: '0 auto' }}>
              {CONFIG.motivos.map((motivo, i) => (
                <div key={i} className="reason-card">
                  <div className="reason-inner">
                    <div className="reason-front" style={{ background: 'linear-gradient(135deg, rgba(28,8,8,0.92), rgba(48,16,16,0.7))', border: '1px solid rgba(201,169,110,0.18)' }}>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, fontWeight: 700, color: gold }}>{i + 1}</p>
                    </div>
                    <div className="reason-back" style={{ background: `linear-gradient(135deg, ${wine}, #3a0a0a)`, border: `1px solid rgba(201,169,110,0.28)` }}>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, lineHeight: 1.7, color: cream }}>{motivo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CARTA */}
          <section style={{ padding: '130px 24px', textAlign: 'center', background: bg }}>
            {sectionLabel('Para Você')}
            {sectionTitle('Obrigado por esse primeiro ano.', { marginBottom: 72 })}
            <div style={{ maxWidth: 700, margin: '0 auto', background: 'linear-gradient(135deg, rgba(28,8,8,0.7), rgba(18,6,6,0.85))', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 32, padding: 'clamp(40px, 6vw, 80px)', backdropFilter: 'blur(20px)' }}>
              {CONFIG.carta.map((para, i) => (
                <p key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(18px, 2.4vw, 26px)', lineHeight: 1.95, color: 'rgba(245,230,211,0.82)', fontStyle: 'italic', fontWeight: 300, marginBottom: i < CONFIG.carta.length - 1 ? 32 : 52 }}>
                  "{para}"
                </p>
              ))}
              <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: 'clamp(44px, 7vw, 80px)', color: gold, marginBottom: 12 }}>Eu te amo ❤️</p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 12, color: 'rgba(245,230,211,0.3)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>— {CONFIG.nomeDele}</p>
            </div>
          </section>

          {/* PROMESSAS */}
          <section style={{ padding: '110px 24px', background: `linear-gradient(180deg, ${bg}, #0d0408)` }}>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              {sectionLabel('Para o Futuro')}
              {sectionTitle('Minhas promessas para você.')}
            </div>
            <div style={{ maxWidth: 840, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
              {CONFIG.promessas.map((p, i) => (
                <div key={i} className="promise-card" style={{ background: 'linear-gradient(135deg, rgba(28,8,8,0.7), rgba(139,26,26,0.1))', border: '1px solid rgba(201,169,110,0.14)', borderRadius: 20, padding: '28px 26px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <span style={{ color: gold, fontSize: 18, marginTop: 2, flexShrink: 0 }}>✦</span>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 14, lineHeight: 1.75, color: 'rgba(245,230,211,0.78)' }}>{p}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer style={{ borderTop: '1px solid rgba(201,169,110,0.08)', padding: '72px 24px', textAlign: 'center', background: '#080608' }}>
            <p style={{ fontFamily: 'Great Vibes, cursive', fontSize: 56, color: gold, marginBottom: 20 }}>{CONFIG.nomeDele} & {CONFIG.nomeDela}</p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 11, color: 'rgba(245,230,211,0.22)', letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: 40 }}>{CONFIG.dataExibicao}</p>
            <span className="heartbeat" style={{ fontSize: 28, display: 'inline-block' }}>❤️</span>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 10, color: 'rgba(245,230,211,0.12)', letterSpacing: '0.25em', marginTop: 36, textTransform: 'uppercase' }}>Feito com muito amor</p>
          </footer>
        </>
      )}
    </div>
  )
}