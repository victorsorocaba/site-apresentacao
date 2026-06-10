import { FadeIn } from './components/FadeIn';
import { AnimatedHeading } from './components/AnimatedHeading';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans flex flex-col">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src="./background-nature.mp4"
      />

      {/* Navbar Container */}
      <div className="px-6 md:px-12 lg:px-16 pt-6">
        <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">Dream Park</div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">O Condomínio</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Design Biofílico</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Plantas</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Contato</a>
          </div>

          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
            Pré-Lançamento
          </button>
        </nav>
      </div>

      {/* Hero Content Container */}
      <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16 z-10">
        <div className="lg:grid lg:grid-cols-2 lg:items-end w-full">
          {/* Left Column */}
          <div className="flex flex-col">
            <AnimatedHeading
              text={"O apartamento ficou\npequeno demais para os\nplanos da sua família?"}
              className="font-normal mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              style={{ letterSpacing: '-0.04em' }}
            />
            
            <FadeIn delay={800} duration={1000} className="mb-5">
              <p className="text-base md:text-lg text-gray-300">
                Descubra a liberdade de viver em uma casa planejada com quintal privativo e envolta pela natureza.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Quero Participar
                </button>
                <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">
                  Conheça o Projeto
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <FadeIn delay={1400} duration={1000}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light">
                  Design Biofílico. Quintais Privativos. Coworking.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
