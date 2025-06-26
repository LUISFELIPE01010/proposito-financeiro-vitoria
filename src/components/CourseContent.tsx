
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export const CourseContent = () => {
  const benefits = [
    "Para onde seu dinheiro está indo",
    "Como dividir sua renda, mesmo ganhando pouco",
    "Como pagar dívidas e ainda começar a guardar",
    "Como sair do ciclo de ganhar e gastar tudo",
    "Como usar o cartão sem culpa",
    "Como ter uma rotina financeira que funciona para você"
  ];

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-brown via-brand-brown/95 to-brand-brown/90 text-white px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 animate-fade-in">
          Você não precisa de mais dinheiro. 
          <br />
          <span className="text-brand-gold">Precisa de clareza.</span>
        </h2>
        
        <div className="text-left max-w-3xl mx-auto animate-slide-up">
          <div className="text-lg md:text-xl mb-8 space-y-4 text-gray-300">
            <p>Você já se prometeu que esse seria o mês da virada.</p>
            <p>Mas os boletos vencem, o cartão estoura e sobra frustração.</p>
            <p className="text-brand-gold font-semibold">O problema não está na sua renda. Está na falta de método.</p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-gold mb-8">
            Com o Finanças com Propósito, você aprende:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-brand-brown/20 p-6 rounded-xl mb-8">
            <p className="text-brand-gold font-semibold text-lg mb-2">Inclui:</p>
            <p className="text-gray-300">
              Uma planilha digital simples, funcional e inteligente, criada especialmente para mulheres.
            </p>
          </div>
        </div>
        
        <Button 
          onClick={handleCTAClick}
          className="bg-brand-brown hover:bg-brand-brown/90 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
        >
          Quero começar agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};
