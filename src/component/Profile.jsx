import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const { Auth } = useContext(AuthContext);

  if (!Auth.isLoggedIn) {
    return (
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          minHeight: "100vh",
        }}
      >
        <div
          className="card shadow-lg text-center p-5"
          style={{
            borderRadius: "15px",
            border: "none",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <h3 className="text-danger mb-3" style={{ color: "#dc3545" }}>
            No user data available
          </h3>
          <p className="mb-4">Please sign up to view your profile.</p>
          <Link
            to="/signup"
            className="btn px-4 py-2 mx-auto"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: "20px",
              border: "none",
              width: "fit-content",
            }}
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div
          className="card mb-4 border-0 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div className="card-body py-4 text-center">
            <h2
              className="text-white mb-0 fw-bold"
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              User Profile
            </h2>
          </div>
        </div>

        <div
          className="card shadow-lg border-0"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <div
                className="mx-auto"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "20px",
                }}
              >
                {Auth.firstname?.charAt(0).toUpperCase()}
                {Auth.lastname?.charAt(0).toUpperCase()}
              </div>
              <h3 className="fw-bold mb-1" style={{ color: "#764ba2" }}>
                {Auth.firstname} {Auth.lastname}
              </h3>
              <p className="text-muted">{Auth.email}</p>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label
                  className="form-label fw-semibold"
                  style={{ color: "#667eea" }}
                >
                  First Name
                </label>
                <div
                  className="p-3"
                  style={{
                    background: "rgba(102, 126, 234, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                  }}
                >
                  {Auth.firstname}
                </div>
              </div>
              <div className="col-md-6">
                <label
                  className="form-label fw-semibold"
                  style={{ color: "#667eea" }}
                >
                  Last Name
                </label>
                <div
                  className="p-3"
                  style={{
                    background: "rgba(102, 126, 234, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                  }}
                >
                  {Auth.lastname}
                </div>
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label
                  className="form-label fw-semibold"
                  style={{ color: "#667eea" }}
                >
                  Email
                </label>
                <div
                  className="p-3"
                  style={{
                    background: "rgba(102, 126, 234, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                  }}
                >
                  {Auth.email}
                </div>
              </div>
              <div className="col-md-6">
                <label
                  className="form-label fw-semibold"
                  style={{ color: "#667eea" }}
                >
                  Password
                </label>
                <div
                  className="p-3"
                  style={{
                    background: "rgba(102, 126, 234, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                  }}
                >
                  {Auth.password}
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link
                to="/edit"
                className="btn px-4 py-2"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  borderRadius: "20px",
                  border: "none",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
