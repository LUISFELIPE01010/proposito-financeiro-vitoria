
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5513996888557', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/ivitoriamendes_/', '_blank');
  };

  const handleFinalCTA = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-8 animate-fade-in">
          Precisa falar comigo?
        </h2>
        
        <p className="text-lg text-gray-700 mb-12">
          Dúvidas antes de comprar? Fale comigo diretamente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </Button>
          
          <Button 
            onClick={handleInstagram}
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-6 h-6" />
            Instagram
          </Button>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-black mb-4">
            Não deixe para amanhã o que pode mudar sua vida hoje
          </h3>
          
          <p className="text-gray-700 mb-8 text-lg">
            Sua tranquilidade financeira está a um clique de distância.
          </p>
          
          <Button 
            onClick={handleFinalCTA}
            className="bg-brand-gold hover:bg-brand-gold/90 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sim, quero organizar minha vida financeira agora
          </Button>
        </div>
      </div>
    </section>
  );
};
