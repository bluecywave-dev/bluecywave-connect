import "./Checkbox.css";

function Checkbox({
  label,
  checked,
  onChange,
  name,
}) {
  return (
    <label className="checkbox">

      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />

      <span className="checkmark"></span>

      <span className="checkbox-label">
        {label}
      </span>

    </label>
  );
}

export default Checkbox;