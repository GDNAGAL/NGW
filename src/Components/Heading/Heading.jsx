import React from 'react'
import './Heading.css'

const Heading = ({ HeadingText, showBar=true, className }) => {
    return (
      <div className='Heading'>
        {showBar ? (
          <h2 className={`Bar display-6 mb-0 ${className}`}>{HeadingText}</h2>
        ) : (
          <h2 className={`display-6 mb-0 ${className}`}>{HeadingText}</h2>
        )}
      </div>
    );
  };
  
  export default Heading;
  