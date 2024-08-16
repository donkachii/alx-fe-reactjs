import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        padding: "10px",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <li style={{ listStyleType: "none", margin: "0 10px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ listStyleType: "none", margin: "0 10px" }}>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            About
          </Link>
        </li>
        <li style={{ listStyleType: "none", margin: "0 10px" }}>
          <Link
            to="/services"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Services
          </Link>
        </li>
        <li style={{ listStyleType: "none", margin: "0 10px" }}>
          <Link
            to="/contact"
            style={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
