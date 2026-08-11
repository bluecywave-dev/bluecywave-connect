import "./AuthHeader.css";

function AuthHeader({ title, subtitle }) {
  return (
    <div className="auth-header">
      <div className="auth-brand">
        Bluecywave Connect
      </div>

      <h2>{title}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default AuthHeader;