import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const logoutHandler = () => {
    window.localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between py-2">
      <Link to="/">
        <div className="w-28">
          <img src="/images/crop.png" alt="logo" className="grayscale" />
        </div>
      </Link>
      <div>
        <button className="btn btn-secondary" onClick={logoutHandler}>
          log out
        </button>
      </div>
    </div>
  );
}

export default Navbar;
