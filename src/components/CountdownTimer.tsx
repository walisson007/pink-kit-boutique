
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const diff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    setTimeRemaining(calculateTimeRemaining());
    
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 py-4 w-full text-center sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <p className="text-white text-lg mb-2 font-medium flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" />
          Essa Promoção encerra em
        </p>
        <div className="text-3xl md:text-4xl tracking-wider text-white font-mono bg-red-800/30 inline-block px-6 py-2 rounded-lg">
          {timeRemaining}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
