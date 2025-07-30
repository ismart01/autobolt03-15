import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = ({ hours = 23, minutes = 59, seconds = 59 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-black font-bold text-lg md:text-xl">⏳ Promoção encerra em:</span>
      <div className="flex gap-1">
        <span className="bg-primary text-white px-2 py-1 rounded">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-black">:</span>
        <span className="bg-primary text-white px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-black">:</span>
        <span className="bg-primary text-white px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;