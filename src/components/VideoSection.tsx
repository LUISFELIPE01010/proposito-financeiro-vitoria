
export const VideoSection = () => {
  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-12 animate-fade-in">
          Assista o vídeo abaixo e dê esse passo tão importante para 
          <span className="text-brand-gold"> alcançar seus objetivos</span>
        </h2>
        
        <div className="relative bg-gray-100 rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
          <div className="aspect-video bg-gradient-to-br from-brand-brown/10 to-brand-gold/10 flex items-center justify-center">
            <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <p className="p-4 text-gray-600 italic">
            Vídeo será incorporado aqui com o conteúdo personalizado
          </p>
        </div>
      </div>
    </section>
  );
};
