import { useState, useEffect, useContext } from "react";
import { supabase } from "../supabase-client";
import { Link } from "react-router-dom";

function Phones() {
  const [ticket, setAddPhone] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  // const { setItem } = useContext(Favitems);

  const [result, setResult] = useState([]);

  const fetchPhones = async () => {
    const { data, error } = await supabase.from("phone api").select("*");

    if (error) {
      console.error("Fetch error:", error.message);
    } else {
      setResult(data);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image, price, description } = ticket;

    try {
      const { data, error } = await supabase
        .from("phone api")
        .insert([{ name, image, price: parseFloat(price), description }])
        .select();

      if (error) throw error;

      setResult((prev) => [...prev, ...data]);
      setAddPhone({ name: "", image: "", price: "", description: "" });
    } catch (error) {
      console.error("Insert error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div
          className="col-md-3 p-4"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            minHeight: "100vh",
          }}
        >
          <h4 className="fw-bold mb-4">Ticket House</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <button
                className="nav-link text-white w-100 text-start"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "10px 15px",
                }}
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item mb-2">
              <button
                className="nav-link active text-white w-100 text-start"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  borderRadius: "20px",
                  padding: "10px 15px",
                }}
              >
                Tickets
              </button>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/users"
                className="nav-link text-white w-100 text-start"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "20px",
                  padding: "10px 15px",
                }}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-md-9 p-4" style={{ background: "#f8f9fa" }}>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-4" style={{ color: "#764ba2" }}>
                Add New Ticket
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Name</label>
                  <input
                    name="name"
                    value={ticket.name}
                    onChange={(e) =>
                      setAddPhone((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="form-control"
                    placeholder="Ticket name"
                    style={{ borderRadius: "20px", padding: "10px 15px" }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Price</label>
                  <input
                    name="price"
                    value={ticket.price}
                    className="form-control"
                    onChange={(e) =>
                      setAddPhone((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    placeholder="Price in USD"
                    style={{ borderRadius: "20px", padding: "10px 15px" }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold">Description</label>
                  <textarea
                    name="description"
                    value={ticket.description}
                    onChange={(e) =>
                      setAddPhone((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    className="form-control"
                    placeholder="Ticket description"
                    style={{
                      borderRadius: "20px",
                      padding: "10px 15px",
                      minHeight: "100px",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    borderRadius: "20px",
                    padding: "10px 25px",
                    border: "none",
                    fontWeight: "bold",
                  }}
                >
                  Add Ticket
                </button>
              </form>
            </div>
          </div>

          <h4 className="mb-4" style={{ color: "#764ba2" }}>
            Ticket List
          </h4>
          <div className="row">
            {result.map((ticket, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card shadow-sm h-100"
                  style={{ borderRadius: "15px", border: "none" }}
                >
                  <div
                    className="card-body"
                    style={{ background: "white", borderRadius: "15px" }}
                  >
                    <h5
                      className="card-title fw-bold"
                      style={{ color: "#764ba2" }}
                    >
                      {ticket.name}
                    </h5>
                    <p className="card-text text-muted">{ticket.description}</p>
                    <p className="card-text">
                      <strong style={{ color: "#667eea" }}>Price:</strong>
                      <span className="fw-bold"> ${ticket.price}</span>
                    </p>
                    <button
                      onClick={() =>
                        (window.location.href =
                          "https://checkout.stripe.com/c/pay/cs_test_a1dAGrP47CcXtR0rvxI5qxr57RsxAm0NCC11fNE7i2AL5bssJmujLHGwO8")
                      }
                      style={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        borderRadius: "20px",
                        padding: "10px 25px",
                        border: "none",
                        fontWeight: "bold",
                      }}
                    >
                      buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phones;
