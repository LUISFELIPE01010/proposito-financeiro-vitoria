
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Juliana Andrade",
      text: "Sempre achei que precisava ganhar mais. Mas o curso me mostrou que organização vem antes. Hoje tenho paz com meu dinheiro.",
      avatar: "/lovable-uploads/85f7b0e0-b7da-4b26-8d12-320cb84fa5b2.png"
    },
    {
      name: "Marina Santos",
      text: "Consegui quitar minhas dívidas em 6 meses seguindo o método. A planilha é um divisor de águas!",
      avatar: "/lovable-uploads/54787f38-a257-45c4-92a9-947cb4b3447f.png"
    },
    {
      name: "Fernanda Lima",
      text: "Finalmente entendi para onde meu dinheiro ia. Agora tenho uma reserva de emergência pela primeira vez na vida.",
      avatar: "/lovable-uploads/787e3892-03db-45f4-9e82-10dc88294e87.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-brand-black text-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 animate-fade-in">
          Resultados reais de quem colocou o método 
          <span className="text-brand-gold"> em prática</span>
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-brand-brown/20 rounded-2xl p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl italic mb-6 text-gray-300 leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <cite className="text-brand-gold font-semibold text-lg">
                      — {testimonial.name}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brand-gold/20 hover:bg-brand-gold/40 p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brand-gold/20 hover:bg-brand-gold/40 p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-brand-gold' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={handleCTAClick}
            className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Quero ter esses resultados também
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
