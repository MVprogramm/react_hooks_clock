import React, { useState } from 'react';
import Clock from './Clock.jsx';
import Toggler from './Toggler.jsx';

const App = () => {
  const [visible, setVisible] = useState(true);
   
  const toggleVisible = () => {
    setVisible(!visible);
  }
  
  return (
    <>
      <div className='clocks'>
        {
          visible && <Clock location="New York" offset={-4} />
        }
        {
          visible && <Clock location="Kyiv" offset={3} />
        }
        {
          visible && <Clock location="London" offset={0} />
        }
      </div>

      <Toggler 
        toggleVisible={toggleVisible} 
        visible={visible}
      />
    </>
  );
}


export default App;