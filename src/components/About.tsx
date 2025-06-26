
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100/50 px-4 md:px-8 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-24 h-24 bg-brand-brown rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-16 right-32 w-32 h-32 bg-brand-gold rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-brown mb-8">
              Quem está por trás do <span className="text-brand-gold animate-pulse">Finanças com Propósito</span>
            </h2>
            
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                <strong className="text-brand-brown text-xl">Vitória Mendes</strong> é especialista em recuperação de crédito, 
                consultora financeira e CEO do Instituto Vitória Mendes. Atua há mais de 5 anos 
                ajudando famílias a recuperarem sua estabilidade financeira com orientação prática e realista.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                Sua missão é empoderar mulheres com ferramentas que funcionam — sem fórmulas mágicas, 
                com foco em resultados reais.
              </p>
            </div>
            
            <Button 
              onClick={handleCTAClick}
              className="bg-gradient-to-r from-brand-brown to-brand-brown/90 hover:from-brand-brown/90 hover:to-brand-brown text-white px-8 py-4 rounded-full transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-brand-brown/50"
            >
              Conheça o método que já mudou centenas de vidas
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 via-transparent to-brand-brown/10 rounded-3xl rotate-6 animate-pulse"></div>
              <img 
                src="/lovable-uploads/787e3892-03db-45f4-9e82-10dc88294e87.png" 
                alt="Vitória Mendes" 
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
