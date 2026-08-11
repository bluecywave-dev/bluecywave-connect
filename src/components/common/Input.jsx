import "./Input.css";

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value = "",
  onChange,
  required = false,
}) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default Input;