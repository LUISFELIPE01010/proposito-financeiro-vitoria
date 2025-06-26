
import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(17 * 60); // 17 minutes in seconds
  const [isVisible, setIsVisible] = useState(false);

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

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show the timer after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-brand-brown/95 backdrop-blur-sm text-white px-6 py-3 shadow-lg z-50 animate-slide-up">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold mb-1">
          OFERTA ESPECIAL TERMINA EM:
        </p>
        <div className="text-2xl font-bold font-mono tracking-wider">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
