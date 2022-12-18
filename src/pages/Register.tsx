import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../firebase";
import "./Register.scss";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await register(email, password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };
  return (
    <div className="registerPage">
      <div className="registerPage__container">
        <form className="registerPage__form" onSubmit={handleSubmit}>
          <img src="icon.jpg" alt="app-icon" className="registerPage__icon" />
          <label className="registerPage__emailLabel">E-Mail</label>
          <input
            type="text"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="registerPage__emailInput"
          />
          <label className="registerPage__passwordLabel">Password</label>
          <input
            type="text"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="registerPage__passwordInput"
          />
          <div>
            <button
              className="registerPage__registerButton"
              disabled={!email || !password}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
