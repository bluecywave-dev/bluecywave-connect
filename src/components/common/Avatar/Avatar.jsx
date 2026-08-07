import "./Avatar.css";

function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "medium",
}) {
  if (src) {
    return (
      <img
        className={`avatar avatar-${size}`}
        src={src}
        alt={alt}
      />
    );
  }

  const initial = name
    ? name.charAt(0).toUpperCase()
    : "?";

  return (
    <div className={`avatar avatar-${size}`}>
      {initial}
    </div>
  );
}

export default Avatar;