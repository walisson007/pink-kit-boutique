
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - now.getTime();
      
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
    <div className="bg-black text-red-600 py-3 px-4 rounded-lg font-bold text-center mb-4">
      <p className="text-lg mb-2">Essa Promoção encerra em</p>
      <div className="text-2xl md:text-3xl tracking-wider">{timeRemaining}</div>
    </div>
  );
};

export default CountdownTimer;
