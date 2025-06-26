
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-8">
              Quem está por trás do <span className="text-brand-gold">Finanças com Propósito</span>
            </h2>
            
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong className="text-brand-brown">Vitória Mendes</strong> é especialista em recuperação de crédito, 
                consultora financeira e CEO do Instituto Vitória Mendes. Atua há mais de 5 anos 
                ajudando famílias a recuperarem sua estabilidade financeira com orientação prática e realista.
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Sua missão é empoderar mulheres com ferramentas que funcionam — sem fórmulas mágicas, 
                com foco em resultados reais.
              </p>
            </div>
            
            <Button 
              onClick={handleCTAClick}
              variant="outline"
              className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-6 py-3 rounded-full transition-all duration-300"
            >
              Conheça o método que já mudou centenas de vidas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              <img 
                src="/lovable-uploads/787e3892-03db-45f4-9e82-10dc88294e87.png" 
                alt="Vitória Mendes" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
