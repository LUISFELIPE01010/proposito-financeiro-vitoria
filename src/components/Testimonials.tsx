
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ana Carolina",
    text: "Sempre achei que precisava ganhar mais. Mas o curso me mostrou que organização vem antes. Hoje tenho paz com meu dinheiro.",
    image: "/lovable-uploads/54787f38-a257-45c4-92a9-947cb4b3447f.png"
  },
  {
    name: "Mariana Silva",
    text: "A planilha mudou minha vida! Agora sei exatamente para onde vai cada centavo e consigo guardar dinheiro.",
    image: "/lovable-uploads/85f7b0e0-b7da-4b26-8d12-320cb84fa5b2.png"
  },
  {
    name: "Juliana Santos",
    text: "Método prático e direto. Em 30 dias já estava vendo resultados. Recomendo para todas as mulheres!",
    image: "/lovable-uploads/54787f38-a257-45c4-92a9-947cb4b3447f.png"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-brown via-brand-brown/95 to-brand-brown/90 px-4 md:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-32 h-32 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-16 animate-fade-in">
          Resultados reais de quem colocou o método em prática
        </h2>
        
        <div className="relative bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-brand-gold/30 animate-slide-up">
          <div className="flex flex-col items-center space-y-6">
            <img 
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-brand-gold animate-pulse"
            />
            
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed max-w-2xl">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <p className="font-semibold text-brand-brown text-lg">
              — {testimonials[currentIndex].name}
            </p>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-gold scale-125' 
                    : 'bg-gray-300 hover:bg-brand-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <button 
            onClick={handleCTAClick}
            className="bg-brand-brown hover:bg-brand-brown/90 text-white px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 shadow-2xl"
          >
            Quero ter esses resultados também
          </button>
        </div>
      </div>
    </section>
  );
};
