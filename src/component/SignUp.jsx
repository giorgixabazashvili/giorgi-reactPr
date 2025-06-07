import axios from "axios";
import { createContext, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [signUp, SetsignUp] = useState(false);
  const { SetAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://davits-api.vercel.app/api/users",
        {
          firstname: form.firstname,
          lastname: form.lastname,
          email: form.email,
          password: form.password,
        }
      );

      console.log("Signup successful:", response.data);
      setForm({ firstname: "", lastname: "", email: "", password: "" });

      SetAuth({
        isLoggedIn: true,
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        password: form.password,
      });

      navigate("/profile");
      SetsignUp(true);
    } catch (error) {
      // console.error("Signup error:", error.response?.data || error.message);
      // console.log(error.response.data.message);
      setError(true);
      setMessage(error.response.data.message);
    }
  };

  if (signUp) {
    return <Profile form={form} />;
  }

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
          <h2 className="h3 mb-0 fw-bold">Create Your Account</h2>
          <p className="mb-0 mt-2">Join our community today</p>
        </div>

        <div className="card-body p-4 p-md-5">
          <form onSubmit={handleSubmit}>
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
                placeholder="name@example.com"
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
                placeholder="Create a password"
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
              <small className="text-muted">
                Must be at least 6 characters
              </small>
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
              Sign Up
            </button>

            {error && (
              <div
                className="alert alert-danger mt-3 text-center"
                role="alert"
                style={{
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                {message}
              </div>
            )}

            <div className="text-center mt-4">
              <p className="mb-0">
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{
                    color: "#667eea",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
