import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tonysImg from '../assets/tonys.jpeg';
import billarImg from '../assets/billar.jpg';
import birrasImg from '../assets/birras.jpg';


function Date() {
  const navigate = useNavigate();
  const [noBtnStyle, setNoBtnStyle] = useState({});
  
  const [typedText, setTypedText] = useState('');
  const fullText = "MMe quedé pensando en lo de nuestra primera cita...";

  useEffect(() => {
    let index = 0;
    setTypedText(''); 
    
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120); 

    return () => clearInterval(interval);
  }, []);

  const handleNoInteraction = () => {
    const randomX = Math.floor(Math.random() * 70) + 10;
    const randomY = Math.floor(Math.random() * 70) + 10;

    setNoBtnStyle({
      position: 'fixed',
      left: `${randomX}vw`,
      top: `${randomY}vh`,
      zIndex: 50,
      transition: 'all 0.15s ease-out',
    });
  };


  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: tonysImg, 
      text: 'Comer una rica torta en TonysBike, hablar un poquito y chismear.',
    },
    {
      id: 2,
      image: billarImg,
      text: 'Un bola 8 bien mamalón siqsi.',
    },
    {
      id: 3,
      image: birrasImg,
      text: 'Unas birritas. Maybe?',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen bg-neutral-850 text-white flex flex-col items-center justify-center p-6 font-poppins selection:bg-rose-500 selection:text-white overflow-hidden">
      <div className="max-w-3xl  text-center space-y-20">

        <div 
      className="absolute inset-0 bg-custom-pattern bg-cover bg-center opacity-40 pointer-events-none" 
      aria-hidden="true"
    />
        
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)] leading-tight min-h-[5rem] md:min-h-[8rem]">
          {typedText}
          <span className="animate-[pulse_1s_infinite] text-rose-400 ml-1 font-normal">|</span>
        </h1>

        <div className="bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-2xl">
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
            Es injusto que no hayamos tenido una, no me parece bien :(
            <span className="block mt-4 text-neutral-300">
              Es por eso que, aprovechando el momento en el que estamos, me gustaría corregirlo.
            </span>
          </p>
        </div>

        <h2 className="text-2xl md:text-4xl font-medium text-rose-400/90 tracking-wide animate-pulse">
          ¿Quieres salir conmigo el Sábado?
        </h2>

        <div className="relative flex items-center justify-center gap-6 mt-8 h-20">
          
          <button
            onClick={() => navigate('/yes')}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-neutral-200 transform hover:scale-105 transition-all duration-200 active:scale-95"
          >
            Sí
          </button>

          <button
            onMouseEnter={handleNoInteraction}
            onTouchStart={handleNoInteraction}
            style={noBtnStyle}
            className="px-8 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 font-semibold shadow-md hover:text-white transition-all duration-200 active:scale-95"
          >
            No
          </button>
          
        </div>

        <div className="w-full max-w-xl mx-auto pt-8 border-t border-neutral-900 text-left space-y-6">
          
          <h3 className="text-lg md:text-xl font-light text-neutral-50 tracking-wider uppercase pl-2">
            La cita incluye:
          </h3>

          <div className="relative group overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/20 backdrop-blur-xs aspect-[16/10]">
            
            <div className="w-full h-full relative">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`Cita opción ${slide.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-xs uppercase tracking-widest text-rose-400/80 font-semibold">
                      Parada 0{slide.id}
                    </span>
                    <p className="text-white text-base md:text-lg mt-1 font-light leading-relaxed">
                      {slide.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles de Navegación del Carrusel */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-neutral-800 text-white flex items-center justify-center transition-all opacity-50 group-hover:opacity-100 focus:opacity-100"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-neutral-800 text-white flex items-center justify-center transition-all opacity-50 group-hover:opacity-100 focus:opacity-100"
              aria-label="Siguiente"
            >
              →
            </button>

            {/* Indicadores inferiores (Puntitos) */}
            <div className="absolute top-4 right-4 z-20 flex gap-2 bg-black/30 px-3 py-1.5 rounded-full border border-neutral-850/50">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide ? 'bg-rose-400 w-4' : 'bg-neutral-600'
                  }`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default Date;