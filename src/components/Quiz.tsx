
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Você sabe quanto gasta com supérfluos?",
      options: ["Sim, tenho controle total", "Mais ou menos", "Não faço ideia"]
    },
    {
      question: "Você parcela compras sem certeza de pagamento?",
      options: ["Nunca", "Às vezes", "Frequentemente"]
    },
    {
      question: "Tem uma reserva de emergência?",
      options: ["Sim, tenho", "Estou criando", "Não tenho"]
    },
    {
      question: "Sente culpa ao gastar?",
      options: ["Raramente", "Às vezes", "Sempre"]
    },
    {
      question: "Já tentou se organizar e desistiu?",
      options: ["Nunca desisti", "Uma vez", "Várias vezes"]
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const score = answers.reduce((sum, answer) => sum + answer, 0);
    if (score <= 4) return { level: "Satisfatório", message: "Você tem um bom controle, mas sempre há espaço para melhorar!" };
    if (score <= 8) return { level: "Em construção", message: "Você está no caminho certo, precisa só de mais organização." };
    return { level: "Baixo", message: "Hora de tomar o controle da sua vida financeira!" };
  };

  const handleCTAClick = () => {
    window.open('https://pay.kiwify.com.br/pJETYxg', '_blank');
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();
    return (
      <section className="py-20 bg-gray-50 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl font-heading font-bold text-brand-black mb-4">
            Seu nível de organização é:
          </h2>
          <div className="text-4xl font-bold text-brand-gold mb-4">{result.level}</div>
          <p className="text-lg text-gray-700 mb-8">{result.message}</p>
          
          <div className="space-y-4">
            <Button 
              onClick={handleCTAClick}
              className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
            >
              Quero começar meu plano agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              onClick={resetQuiz}
              variant="outline"
              className="border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white px-6 py-3 rounded-full w-full"
            >
              Refazer o quiz
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-black mb-4 animate-fade-in">
            Em que nível está sua vida financeira hoje?
          </h2>
          <p className="text-lg text-gray-600">
            Responda perguntas rápidas e descubra seu nível de organização.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg animate-slide-up">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-500">
                Pergunta {currentQuestion + 1} de {questions.length}
              </span>
              <div className="flex space-x-1">
                {questions.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= currentQuestion ? 'bg-brand-gold' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-brand-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-brand-black mb-6">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left border border-gray-200 rounded-xl hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
