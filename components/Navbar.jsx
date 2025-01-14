import Link from "next/link";
import Products from "./../pages/products/index";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/category">
                category
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/docs">
                docs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
