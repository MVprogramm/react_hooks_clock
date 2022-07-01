import React, { useState, useEffect } from 'react';
import getTimeWithOffset from './getTime.js';
import './clock.scss';

const Clock = ({ offset, location }) => {
  const [worldTime, setTime] = useState(getTimeWithOffset(offset));
  
  useEffect(() => {
    const interval = setInterval(
      () => setTime(getTimeWithOffset(offset)), 
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, [worldTime]);

  return (
    <div className="clock">
      <div className="clock__location">
          {location}
      </div>
      <div className="clock__time">
          {worldTime}
      </div>
    </div>
  );
}

export default Clock;