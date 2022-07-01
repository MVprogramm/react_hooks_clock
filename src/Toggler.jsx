import React from 'react';
import classNames from 'classnames';
import './toggler.scss';

const Toggler = ({ visible, toggleVisible }) => {
  return (
    <button 
      className={classNames('btn', { 
          'btn__show': visible === false,
          'btn__hide': visible === true 
        }
      )} 
      onClick={toggleVisible}
    >
      { 
        visible
          ? 'Hide'
          : 'Show world time'
      }
    </button>
  );
};

export default Toggler;