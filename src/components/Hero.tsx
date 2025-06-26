
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-brown via-brand-brown/95 to-brand-brown/90 px-4 md:px-8 pb-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-brand-gold rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Organize sua vida financeira com{" "}
            <span className="text-brand-gold animate-pulse">leveza</span>,{" "}
            <span className="text-white/80">clareza</span> e{" "}
            <span className="text-brand-gold animate-pulse">autonomia</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/80 mb-6 font-medium">
            Mesmo que você ganhe pouco. Mesmo começando do zero. 
            O que você precisa é de direção, não de mais dinheiro.
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Sua realidade financeira muda quando você aprende a lidar com o que já tem. 
            Se o dinheiro desaparece, as contas acumulam e a ansiedade domina, 
            esse curso é para você.
          </p>
          
          <Button 
            onClick={handleCTAClick}
            className="bg-brand-brown hover:bg-brand-brown/90 text-white px-8 py-6 text-lg font-bold rounded-full transition-all duration-300 shadow-2xl"
          >
            Quero organizar minhas finanças agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        {/* Right side - Author photo */}
        <div className="relative animate-slide-up">
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96 lg:w-full lg:h-[500px] max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/30 via-transparent to-white/20 rounded-3xl rotate-3 animate-pulse"></div>
            <img 
              src="/lovable-uploads/787e3892-03db-45f4-9e82-10dc88294e87.png" 
              alt="Vitória Mendes" 
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
