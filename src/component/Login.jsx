import React, { useContext, useState } from "react";
import { checkIfUserExists } from "../services/api/check";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const navigate = useNavigate();
  const { SetAuth } = useContext(AuthContext);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await checkIfUserExists(form);

    if (user.exists) {
      setShowError(false);
      SetAuth({
        isLoggedIn: true,
        id: user.id,
        email: form.email,
        password: form.password,
        firstname: form.firstname,
        lastname: form.lastname,
      });
      navigate("/profile");
    } else {
      setShowError(true);
    }

    setForm({
      email: "",
      password: "",
      lastname: "",
      firstname: "",
    });
  };

  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
          overflow: "hidden",
          border: "none",
        }}
      >
        <div
          className="card-header py-4 text-center"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <h2 className="h3 mb-0 fw-bold">Welcome Back</h2>
          <p className="mb-0 mt-2">Please login to your account</p>
        </div>

        <div className="card-body p-4 p-md-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="form-label fw-bold"
                style={{ color: "#764ba2" }}
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  borderRadius: "10px",
                  padding: "12px 15px",
                  border: "1px solid #ced4da",
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label fw-bold"
                style={{ color: "#764ba2" }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                name="password"
                required
                style={{
                  borderRadius: "10px",
                  padding: "12px 15px",
                  border: "1px solid #ced4da",
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label fw-bold"
                style={{ color: "#764ba2" }}
              >
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first name"
                value={form.firstname}
                onChange={handleChange}
                name="firstname"
                required
                style={{
                  borderRadius: "10px",
                  padding: "12px 15px",
                  border: "1px solid #ced4da",
                }}
              />
            </div>

            <div className="mb-4">
              <label
                className="form-label fw-bold"
                style={{ color: "#764ba2" }}
              >
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                value={form.lastname}
                onChange={handleChange}
                name="lastname"
                required
                style={{
                  borderRadius: "10px",
                  padding: "12px 15px",
                  border: "1px solid #ced4da",
                }}
              />
            </div>

            <div className="mb-4 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                style={{
                  border: "1px solid #764ba2",
                }}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>

            <button
              className="btn w-100 py-3 mb-3 fw-bold"
              type="submit"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                borderRadius: "10px",
                border: "none",
                transition: "all 0.3s ease",
              }}
            >
              Login
            </button>

            {showError && (
              <div
                className="alert alert-danger text-center"
                role="alert"
                style={{
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                User does not exist
              </div>
            )}

            <div className="text-center mt-4">
              <p className="mb-0">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  style={{
                    color: "#667eea",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
