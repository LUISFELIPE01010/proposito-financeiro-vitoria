
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-black mb-6 leading-tight">
          Organize sua vida financeira com{" "}
          <span className="text-brand-gold">leveza</span>,{" "}
          <span className="text-brand-brown">clareza</span> e{" "}
          <span className="text-brand-gold">autonomia</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-brand-brown mb-8 font-medium">
          Mesmo que você ganhe pouco. Mesmo começando do zero. 
          O que você precisa é de direção, não de mais dinheiro.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sua realidade financeira muda quando você aprende a lidar com o que já tem. 
          Se o dinheiro desaparece, as contas acumulam e a ansiedade domina, 
          esse curso é para você.
        </p>
        
        <Button 
          onClick={handleCTAClick}
          className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Quero organizar minhas finanças agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};
