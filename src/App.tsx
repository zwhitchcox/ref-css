import React, { useState } from 'react';
import './App.scss';

import FixedPopOut from './Cmpt/FixedPopOut';

function App() {
  const [popOutOpen, setFixedPopOutOpen] = useState(false)
  const openFixedPopOut = () => setFixedPopOutOpen(true)
  const closeFixedPopOut = () => setFixedPopOutOpen(false)
  const toggleFixedPopOut = () => setFixedPopOutOpen(!popOutOpen)
  const logInBtn = (
    <div className="pop-out-btn">
      <a onClick={toggleFixedPopOut}>
        Login
      </a>
    </div>
  )
  return (
    <div className="App">
        awef awlejfa wlefja wlefj aw;elf jawe
        <FixedPopOut {...({popOutOpen, closeFixedPopOut})} btn={logInBtn}>
          <div className="pop-out-title">
            Login
          </div>
          <div className="pop-out-content">
            I'm baby drinking vinegar try-hard mustache aesthetic, pop-up vinyl vaporware. Gentrify actually bitters, pug semiotics hexagon street art. Marfa mustache gastropub food truck succulents gentrify direct trade kinfolk pinterest hexagon la croix kale chips austin. Heirloom before they sold out readymade master cleanse, 8-bit poutine twee. DIY umami stumptown gochujang, dreamcatcher shoreditch poutine. Cronut before they sold out ennui, meh vaporware dreamcatcher 90's viral lomo stumptown. Mustache seitan banjo, 3 wolf moon tacos farm-to-table post-ironic hashtag.
          </div>
        </FixedPopOut>
    </div>
  )
}

export default App