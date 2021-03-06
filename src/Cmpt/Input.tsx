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

const Input = ({value, onChange, label, onBlur, ...opts}) => {
  const type = opts.type || "text"
  const showErrors =
    !!((opts.touched === "undefined" || opts.touched === true) &&
    opts.errors.length)

  return (
    <form className="standard-input">
      <div className="input-wide-container">
        <label className={`input-wide ${showErrors ? "error" : ""}`}>
          <div className={`input-wide-label-text ${value !== "" ? "input-wide-label-text-show" : ""}`}>
            {label}
          </div>
          <input
            type={type}
            placeholder={label}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            spellCheck={false}
          />
        </label>
        {showErrors && renderErrors(opts.errors)}
      </div>
    </form>
  )
}

export default Input