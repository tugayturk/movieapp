import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import "./MoviePage.scss";
import "./Navbar.scss";

const Navbar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e: any) => {
    await logout();
    dispatch(logoutHandle());
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="navbar">
      <div className="navbar__title">{`${user.email}`}</div>
      <ul className="navbar__list">
        <li className="navbar__listitem">
          <a className="active" href="/home">
            Home
          </a>
        </li>
        <li className="navbar__listitem">
          <a href="/movies">Movies</a>
        </li>
        <li className="navbar__listitem">
          <a href="/about">About Us</a>
        </li>
        <li className="navbar__listitem">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar__listitem" onClick={handleLogout}>
          <a href="#about">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
