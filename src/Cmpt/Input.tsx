import * as React from 'react'
import { isArrayTypeNode } from 'typescript'
import "./Input.scss"

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
          <div>{err}</div>
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

const Input = ({value, onChange, label, ...opts}) => {
  const type = opts.type || "text"

  return (
    <form className="standard-input">
      <div className="input-wide-container">
        <label className={`input-wide ${opts.error ? "error" : ""}`}>
          <div className={`input-wide-label-text ${value !== "" ? "input-wide-label-text-show" : ""}`}>
            {label}
          </div>
          <input
            type={type}
            placeholder={label}
            value={value}
            onChange={onChange}
          />
        </label>
        {renderErrors(opts.error)}
      </div>
    </form>
  )
}

export default Input