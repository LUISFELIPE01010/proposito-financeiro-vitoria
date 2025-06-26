
export const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-20 h-20 bg-brand-gold rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-brand-brown rounded-full blur-xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-brown mb-12 animate-fade-in">
          Assista o vídeo abaixo e dê esse passo tão importante para 
          <span className="text-brand-gold"> alcançar seus objetivos</span>
        </h2>
        
        <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-3xl overflow-hidden shadow-2xl animate-slide-up hover:shadow-3xl transition-shadow duration-500 border border-brand-gold/20">
          <div className="aspect-video bg-gradient-to-br from-brand-brown/10 to-brand-gold/10 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-gold/5 to-transparent"></div>
            <div className="w-20 h-20 bg-gradient-to-r from-brand-gold to-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-500 shadow-2xl hover:shadow-brand-gold/50 animate-pulse">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-white to-gray-50">
            <p className="text-gray-600 italic text-lg">
              Vídeo será incorporado aqui com o conteúdo personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
