
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 md:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-28 h-28 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-brand-brown rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-brown mb-8 animate-fade-in">
          Precisa falar comigo?
        </h2>
        
        <p className="text-lg text-gray-700 mb-12">
          Dúvidas antes de comprar? Fale comigo diretamente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            onClick={handleWhatsApp}
            className="bg-brand-brown hover:bg-brand-brown/90 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp
          </Button>
          
          <Button 
            onClick={handleInstagram}
            className="bg-brand-brown hover:bg-brand-brown/90 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all duration-300 shadow-xl"
          >
            <Instagram className="w-6 h-6" />
            Instagram
          </Button>
        </div>
        
        <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-8 shadow-2xl animate-slide-up border border-brand-gold/20 hover:shadow-3xl transition-shadow duration-500">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-brown mb-4">
            Não deixe para amanhã o que pode mudar sua vida hoje
          </h3>
          
          <p className="text-gray-700 mb-8 text-lg">
            Sua tranquilidade financeira está a um clique de distância.
          </p>
          
          <Button 
            onClick={handleFinalCTA}
            className="bg-brand-brown hover:bg-brand-brown/90 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-300 shadow-2xl"
          >
            Sim, quero organizar minha vida financeira agora
          </Button>
        </div>
      </div>
    </section>
  );
};
