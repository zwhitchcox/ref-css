import React, { useEffect, useState } from 'react';
import './App.scss';

import Input from './Cmpt/Input';


function App() {
  const [fixedPopOutOpen, setFixedPopOutOpen] = useState(false)
  const openFixedPopOut = () => setFixedPopOutOpen(true)
  const closeFixedPopOut = () => setFixedPopOutOpen(false)
  const toggleFixedPopOut = () => setFixedPopOutOpen(!fixedPopOutOpen)
  const logInBtn = (
    <div className="pop-out-btn">
      <a onClick={toggleFixedPopOut}>
        Login
      </a>
    </div>
  )

  const [formState, setFormState] = React.useState({
    username: "",
    password: "",
  })
  const [errors, setErrors] = React.useState<any>({
    username: false,
    password: false,
  })

  const handleChange = field => e => {
    setFormState({
      ...formState,
      [field]: e.target.value
    })
  }

  useEffect(() => {
    setErrors({
      ...errors,
      username: [
        "first error",
        "second error",
      ],
      password: "Only one error."
    })
  }, [])

  return (
    <div className="App">
        {/* <FixedPopOut {...({popOutOpen, closeFixedPopOut})} btn={logInBtn}>
          <div className="pop-out-title">
            Login
          </div>
          <div className="pop-out-content">
            I'm baby drinking vinegar try-hard mustache aesthetic, pop-up vinyl vaporware. Gentrify actually bitters, pug semiotics hexagon street art. Marfa mustache gastropub food truck succulents gentrify direct trade kinfolk pinterest hexagon la croix kale chips austin. Heirloom before they sold out readymade master cleanse, 8-bit poutine twee. DIY umami stumptown gochujang, dreamcatcher shoreditch poutine. Cronut before they sold out ennui, meh vaporware dreamcatcher 90's viral lomo stumptown. Mustache seitan banjo, 3 wolf moon tacos farm-to-table post-ironic hashtag.
          </div>
        </FixedPopOut> */}
        <br />
        <br />
        <br />
        <Input
          value={formState.username}
          error={errors.username}
          label="Username"
          onChange={handleChange("username")} />
        <Input
          value={formState.password}
          error={errors.password}
          label="Password"
          type="password"
          onChange={handleChange("password")} />
    </div>
  )
}

export default App