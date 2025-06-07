import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function Header() {
  const { Auth, Logout } = useContext(AuthContext);

  return (
    <header
      className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="first d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
        <span
          className="title fs-2 ms-5 mt-2 fw-bold"
          style={{
            color: "white",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Ticket House
        </span>
      </div>

      <ul className="nav nav-pills hd align-items-center">
        <li className="nav-item me-2">
          <Link
            to="/"
            className="nav-link text-white"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "20px",
              transition: "all 0.3s ease",
            }}
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li className="nav-item me-2">
          <Link
            to="/ticket"
            className="nav-link text-white"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              transition: "all 0.3s ease",
            }}
          >
            Ticket
          </Link>
        </li>

        <li className="nav-item me-2">
          <Link
            to="/profile"
            className="nav-link text-white"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              transition: "all 0.3s ease",
            }}
          >
            Profile
          </Link>
        </li>
        <li className="nav-item me-2">
          <Link
            to="/users"
            className="nav-link text-white"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              transition: "all 0.3s ease",
            }}
          >
            Users
          </Link>
        </li>

        {Auth.isLoggedIn ? (
          <div className="d-flex align-items-center">
            <li className="nav-item">
              <button onClick={Logout} className="auth-btn logout-btn me-2">
                Log Out
              </button>
            </li>
          </div>
        ) : (
          <div className="btn-auth d-flex align-items-center">
            <li className="nav-item">
              <Link to="/login" className="auth-btn login-btn ms-3">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="auth-btn signup-btn ms-3 me-4">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </ul>
    </header>
  );
}
