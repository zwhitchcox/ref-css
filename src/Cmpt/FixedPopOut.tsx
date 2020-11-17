import React, { useState } from 'react';
import './FixedPopOut.scss';

function FixedPopOut({children, popOutOpen, closeFixedPopOut, btn}) {
  return (
    <>
    <div className={`pop-out-bg ${popOutOpen ? "is-open" : ""}`} onClick={closeFixedPopOut} />
    <div className="fixed-pop-out">
      {btn}
      <div className={
        `fixed-pop-out-container ${popOutOpen ? "is-open" : ""}`
      }>
        {children}
      </div>
    </div>
    </>
  )
}

export default FixedPopOut
