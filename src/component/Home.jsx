import "../welcome.css";

import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh",
        padding: "0",
      }}
    >
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "80px 20px",
          color: "white",
          textAlign: "center",
          marginBottom: "40px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          className="display-4 fw-bold mb-4"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Welcome to Ticket House
        </h1>
        <p
          className="lead mb-5"
          style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "0 auto" }}
        >
          Discover amazing tickets, manage your events, and connect with our
          community.
        </p>

        <div className="d-flex justify-content-center gap-4">
          <Link
            to="/users"
            className="btn btn-lg px-4 py-2"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "white",
              border: "2px solid white",
              borderRadius: "30px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            View Users
          </Link>
          <Link
            to="/ticket"
            className="btn btn-lg px-4 py-2"
            style={{
              background: "white",
              color: "#764ba2",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
              transition: "all 0.3s ease",
            }}
          >
            Explore Tickets
          </Link>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                border: "none",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-body text-center p-4"
                style={{ background: "white" }}
              >
                <div
                  className="icon-container mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <i
                    className="bi bi-people-fill text-white"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </div>
                <h3 className="h4" style={{ color: "#764ba2" }}>
                  User Community
                </h3>
                <p className="text-muted">
                  Connect with other users and explore profiles in our growing
                  community.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                border: "none",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-body text-center p-4"
                style={{ background: "white" }}
              >
                <div
                  className="icon-container mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <i
                    className="bi bi-ticket-perforated-fill text-white"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </div>
                <h3 className="h4" style={{ color: "#764ba2" }}>
                  Ticket Management
                </h3>
                <p className="text-muted">
                  Easily create, manage, and track all your tickets in one
                  place.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                border: "none",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-body text-center p-4"
                style={{ background: "white" }}
              >
                <div
                  className="icon-container mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <i
                    className="bi bi-shield-fill-check text-white"
                    style={{ fontSize: "1.8rem" }}
                  ></i>
                </div>
                <h3 className="h4" style={{ color: "#764ba2" }}>
                  Secure Platform
                </h3>
                <p className="text-muted">
                  Your data is protected with our advanced security measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="cta-section py-5"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 className="h1 mb-4">Ready to get started?</h2>
          <p
            className="lead mb-4"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Join thousands of users who are already managing their tickets with
            our platform.
          </p>
          <Link
            to="/signup"
            className="btn btn-lg px-5 py-3"
            style={{
              background: "white",
              color: "#764ba2",
              borderRadius: "30px",
              fontWeight: "bold",
              marginTop: "20px",
              transition: "all 0.3s ease",
            }}
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}
