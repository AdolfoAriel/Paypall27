import React, { useState, useRef, useEffect } from 'react';
import '../styles/timer.css'
type TimerProps = {
  initialTime?: number;
};

const Timer: React.FC<TimerProps> = ({ initialTime = 305000000 }) => {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, []); // el array vacío significa que solo se ejecutará al montar el componente

  return (
    <div className='timecon'>
        <h1>Únete a la comunidad global de más de 250 millones de
          <br/> usuarios que compran, envían y reciben 
            dinero de manera segura
            <br/> 
            todos los días con PayPal.</h1>
      <h1 className='time'>{time}</h1>
      
    </div>
  );
};

export default Timer;
