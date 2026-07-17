import React from 'react';
import { useNavigate } from 'react-router-dom';

import thanksImg from '../assets/thanks.jpg';

function Yes() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-neutral-750 text-white flex flex-col items-center justify-center p-6 font-poppins selection:bg-rose-500 selection:text-white overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-custom-pattern bg-cover bg-center opacity-15 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" 
        aria-hidden="true"
      />

      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/60 border border-neutral-800/80 text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-all duration-200 text-sm backdrop-blur-xs active:scale-95"
      >
        ← Volver
      </button>

      {/* Contenedor Principal */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 my-auto">
        
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-100 leading-tight">
          ¡Gracias por aceptar!
        </h1>

        <div className="max-w-md mx-auto rounded-2xl overflow-hidden">
          <img
            src={thanksImg} 
            alt="Celebración"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Mensaje de Confirmación (Estilo rosa, brillante y romántico) */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-medium text-rose-400/95 tracking-wide animate-pulse">
            Te veo entonces
          </h2>
          
          <div className="text-lg md:text-2xl font-light text-neutral-300 space-y-1">
            <p className="font-medium text-white">Sábado 18 de Julio</p>
            <p className="text-neutral-400">3:00 pm - 4:00 pm</p>
          </div>

          <p className="text-rose-300/80 text-sm md:text-base font-light italic mt-6 max-w-sm mx-auto leading-relaxed">
            Ponte bien bonita, porque yo me voy a poner bien bonito &lt;3
          </p>
        </div>

      </div>
    </div>
  );
}

export default Yes;