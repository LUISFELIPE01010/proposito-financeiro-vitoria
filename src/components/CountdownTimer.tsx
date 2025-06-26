
import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(17 * 60); // 17 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          // Reset timer when it reaches 0
          return 17 * 60;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600/90 backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-2xl animate-pulse border border-red-400/50">
      <div className="text-center">
        <p className="text-sm font-semibold mb-2 text-yellow-100">
          🔥 OFERTA ESPECIAL TERMINA EM:
        </p>
        <div className="text-3xl font-bold font-mono tracking-wider">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        <p className="text-xs mt-2 text-yellow-200">
          Garante sua planilha digital agora!
        </p>
      </div>
    </div>
  );
};
