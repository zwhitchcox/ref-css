import React, { useEffect, useState } from 'react';
import { validatePassword, validateUsername } from '@zecos/validate'
import './App.scss';

import Input from './Cmpt/Input';
import PasswordInput from './Cmpt/PasswordInput';
import FixedPopOut from './Cmpt/FixedPopOut';


function App() {
  const [fixedPopOutOpen, setFixedPopOutOpen] = useState(false)
  const closeFixedPopOut = () => setFixedPopOutOpen(false)
  const toggleFixedPopOut = () => setFixedPopOutOpen(!fixedPopOutOpen)
  const logInBtn = (
    <div className="pop-out-btn" onClick={toggleFixedPopOut}>
      Login
    </div>
  )

  const [formState, setFormState] = React.useState({
    username: "",
    password: "",
  })

  const [touched, setTouched] = useState({
    username: false,
    password: false,
  })

  const handleChange = field => e => {
    setFormState({
      ...formState,
      [field]: e.target.value
    })
  }

  const handleBlur = field => e => {
    if (!touched[field]) {
      setTouched({
        ...touched,
        [field]: true,
      })
    }
  }

  return (
    <div className="App">
        <FixedPopOut {...({popOutOpen:fixedPopOutOpen, closeFixedPopOut})} btn={logInBtn}>
          <div className="pop-out-title">
            Login
          </div>
          <div className="pop-out-content">
        <Input
          value={formState.username}
          errors={validateUsername(formState.username)}
          touched={touched.username}
          label="Username"
          onBlur={handleBlur("username")}
          onChange={handleChange("username")} />
        <PasswordInput
          value={formState.password}
          errors={validatePassword(formState.password)}
          touched={touched.password}
          label="Password"
          type="password"
          onBlur={handleBlur("password")}
          onChange={handleChange("password")} />
          </div>
        </FixedPopOut>
        <br />
        <br />
        <br />
    </div>
  )
}

export default App