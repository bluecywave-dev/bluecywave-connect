import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./PasswordInput.css";

function PasswordInput({
  label,
  name,
  placeholder,
  value = "",
  onChange,
  required = false,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="password-input-group">
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <div className="password-input">
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />

        <button
          type="button"
          onClick={() => setShow((previous) => !previous)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;