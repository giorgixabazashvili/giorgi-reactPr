import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export default function Edit() {
  const { Auth, SetAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (Auth) {
      setFormData({
        firstname: Auth.firstname || "",
        lastname: Auth.lastname || "",
        email: Auth.email || "",
        password: Auth.password || "",
      });
    }
  }, [Auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log("Auth context structure:", Auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!Auth?.id?._id) {
        throw new Error("No user ID available");
      }

      const response = await axios.put(
        `https://davits-api.vercel.app/api/users/${Auth.id._id}`,
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data) {
        SetAuth((prev) => ({
          ...prev,
          ...formData,
        }));
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!Auth) {
    return (
      <div className="container text-center py-5">
        <h3>Please log in to edit your profile</h3>
        <Link to="/login" className="btn btn-primary mt-3">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div
        className="card shadow-lg rounded-4"
        style={{ backgroundColor: "#f9f9fc", border: "none" }}
      >
        <div className="card-body p-5">
          <h2 className="mb-4 text-center text-primary">Edit Profile</h2>

          {error && <div className="alert alert-danger mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstname"
                    id="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="firstname">First Name</label>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Last name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="lastname">Last Name</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-4 rounded-pill me-2"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
              <Link
                to="/profile"
                className="btn btn-outline-secondary px-4 rounded-pill"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
