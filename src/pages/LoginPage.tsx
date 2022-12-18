import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../firebase";
import "./LoginPage.scss";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      navigate("/home", {
        replace: true,
      });
    }
  };
  return (
    <div className="loginpage">
      <div className="loginpage__container">
        <img src="icon.jpg" alt="app-icon" className="loginpage__icon" />
        <form className="loginpage__form" onSubmit={handleSubmit}>
          <label className="loginpage__emailLabel">E-Mail</label>
          <input
            type="text"
            name={email}
            placeholder="you@example.com"
            value={email}
            className="loginpage__emailInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="loginpage__passwordLabel">Password</label>
          <input
            type="text"
            placeholder="******"
            name={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="loginpage__passwordInput"
          />
          <button
            className="loginpage__loginButton"
            disabled={!email || !password}
            type="submit"
          >
            Login
          </button>

          <div className="loginpage__registerContainer">
            <span className="loginpage__registerContainerText">
              You dont't have an account?
            </span>
            <Link to={"/register"}>
              <button className="loginpage__registerButton">Register</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
