import React from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import { deleteUser } from "../services/api/user";
import { Link } from "react-router-dom";
import { Await } from "react-router-dom";
function UserDetails() {
  const { id } = useParams();
  const navigation = useNavigate();
  const loaderData = useLoaderData();

  const handleDelete = async () => {
    const status = await deleteUser(id);
    if (status === 200) {
      navigation("/users");
    }
  };

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
              User Profile Details
            </h2>
          </div>
        </div>

        <React.Suspense
          fallback={
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              <div
                className="spinner"
                style={{
                  width: "3rem",
                  height: "3rem",
                  border: "0.25em solid rgba(102, 126, 234, 0.2)",
                  borderTopColor: "#667eea",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
            </div>
          }
        >
          <Await resolve={loaderData.user}>
            {(user) => (
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div
                    className="card shadow-lg border-0"
                    style={{
                      borderRadius: "15px",
                      overflow: "hidden",
                    }}
                  >
                    {/* User Avatar Header */}
                    <div
                      className="text-center py-4"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
                      }}
                    >
                      <div
                        className="mx-auto mb-3"
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
                        }}
                      >
                        {user.firstname?.charAt(0).toUpperCase()}
                        {user.lastname?.charAt(0).toUpperCase()}
                      </div>
                      <h3 className="fw-bold mb-1" style={{ color: "#764ba2" }}>
                        {user.firstname} {user.lastname}
                      </h3>
                      <p className="text-muted">{user.email}</p>
                    </div>

                    {/* User Details */}
                    <div className="card-body p-4 p-md-5">
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
                            {user.firstname}
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
                            {user.lastname}
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
                            {user.email}
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
                            ••••••••
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="d-flex justify-content-center gap-3 mt-4">
                        <Link
                          to="/users"
                          className="btn px-4 py-2"
                          style={{
                            background: "rgba(102, 126, 234, 0.1)",
                            color: "#667eea",
                            borderRadius: "20px",
                            border: "1px solid rgba(102, 126, 234, 0.3)",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                        >
                          Back to Users
                        </Link>
                        <button
                          className="btn px-4 py-2"
                          onClick={handleDelete}
                          style={{
                            background: "rgba(220, 53, 69, 0.1)",
                            color: "#dc3545",
                            borderRadius: "20px",
                            border: "1px solid rgba(220, 53, 69, 0.3)",
                            fontWeight: "500",
                            transition: "all 0.3s ease",
                          }}
                        >
                          Delete User
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Await>
        </React.Suspense>
      </div>
    </div>
  );
}

export default UserDetails;
