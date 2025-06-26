
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show the fixed CTA after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 p-4 z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="font-heading font-bold text-brand-brown text-lg">
            Organize suas finanças hoje mesmo
          </h3>
          <p className="text-gray-600 text-sm">
            Método prático + planilha digital
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleCTAClick}
            className="bg-brand-brown hover:bg-brand-brown/90 text-white px-6 py-3 font-semibold rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Quero começar agora
          </Button>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
