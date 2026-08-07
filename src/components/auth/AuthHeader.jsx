import "./AuthHeader.css";

function AuthHeader({ title, subtitle }) {
  return (
    <div className="auth-header">
      <h1>Bluecywave Connect</h1>

      <h2>{title}</h2>

      <p>{subtitle}</p>
    </div>
  );
}

export default AuthHeader;