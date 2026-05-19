export default function RomanticWebsiteConcept() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30" />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-sm text-zinc-300 mb-6">
            30 de Maio • Nosso Primeiro Ano
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            O melhor capítulo
            <br />
            da minha vida.
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Um pequeno lugar na internet para guardar tudo aquilo que fez
            eu me apaixonar por você todos os dias.
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
            Entrar
          </button>
        </div>
      </section>

      {/* CONTADOR */}
      <section className="py-24 px-6 bg-zinc-950 text-center">
        <p className="text-zinc-400 uppercase tracking-[0.3em] mb-4">
          Estamos juntos há
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-8">365 dias</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            ['1', 'Ano'],
            ['12', 'Meses'],
            ['52', 'Semanas'],
            ['8760', 'Horas'],
          ].map(([number, label]) => (
            <div
              key={label}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-4xl font-bold mb-2">{number}</h3>
              <p className="text-zinc-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-zinc-400 mb-4">
            Nossa História
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Cada momento valeu a pena.
          </h2>
        </div>

        <div className="space-y-12">
          {[
            {
              date: 'Primeira conversa',
              text: 'O começo de tudo. Sem perceber, minha vida já estava mudando.',
            },
            {
              date: 'Primeiro encontro',
              text: 'A ansiedade, o frio na barriga e a certeza de que eu queria viver aquilo de novo.',
            },
            {
              date: 'Pedido de namoro',
              text: 'O momento em que eu tive certeza de que era você.',
            },
            {
              date: 'Hoje',
              text: 'Um ano depois, continuo me apaixonando por você todos os dias.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/40 backdrop-blur"
            >
              <p className="text-zinc-400 mb-3">{item.date}</p>
              <p className="text-2xl leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-28 px-6 bg-zinc-950">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-zinc-400 mb-4">
            Nossos Momentos
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Algumas memórias favoritas.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516589091380-5d8e87df6999?q=80&w=1974&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1974&auto=format&fit=crop',
          ].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-zinc-800 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={src}
                className="w-full h-[500px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CARTA */}
      <section className="py-32 px-6 text-center max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Para Você
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Obrigado por esse primeiro ano.
        </h2>

        <div className="text-zinc-300 leading-9 text-lg md:text-2xl space-y-8">
          <p>
            Eu poderia escrever mil coisas aqui, mas nenhuma delas seria
            suficiente para explicar o quanto você mudou a minha vida.
          </p>

          <p>
            Obrigado por cada abraço, cada conversa, cada risada e por estar
            comigo até nos dias difíceis.
          </p>

          <p>
            Se esse foi apenas o primeiro capítulo, mal posso esperar para viver
            todos os próximos ao seu lado.
          </p>

          <p className="pt-8 text-white text-3xl font-semibold">
            Eu amo você ❤️
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500 text-sm">
        Feito com amor por você.
      </footer>
    </div>
  )
}
