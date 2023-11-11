import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Kiwi
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/pits">
              PIT
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/healthchecks">
              Health Checks
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/transmitters">
              Transmitters
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
