import * as React from 'react'
import "./PasswordInput.scss"
import { FaEye, FaEyeSlash } from 'react-icons/fa'


const renderErrors = errors => {
  if (typeof errors === "undefined" || !errors || typeof errors === "boolean") {
    return (
      <div className="errors" />
    )
  }
  if (Array.isArray(errors)) {
    return (
      <div className="errors">
        {errors.map(err => (
          <div>{err.toString()}</div>
        ))}
      </div>
    )
  }
  if (typeof errors === "string") {
    return <div className="errors">
      {errors}
    </div>
  }
}

const PasswordInput = ({value, onChange, label, onBlur, ...opts}) => {
  const type = opts.type || "text"
  const showErrors =
    !!((opts.touched === "undefined" || opts.touched === true) &&
    opts.errors.length)
  const [showPassword, setShowPassword] = React.useState<boolean>(false)
  const toggleShowPassword = () => setShowPassword(!showPassword)

  return (
    <form className="password-input">
      <div className="input-wide-container">
        <label className={`input-wide ${showErrors ? "error" : ""}`}>
          <div className={`input-wide-label-text ${value !== "" ? "input-wide-label-text-show" : ""}`}>
            {label}
          </div>
          <div className="input-wide-password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder={label}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              spellCheck={false}
            />
            <div className="end-button" onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </label>
        {showErrors && renderErrors(opts.errors)}
      </div>
    </form>
  )
}

export default PasswordInput