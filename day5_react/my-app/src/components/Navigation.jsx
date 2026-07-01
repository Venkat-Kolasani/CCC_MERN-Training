function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container-fluid">

        {/* Website Brand */}
        <a className="navbar-brand" href="#">
          Dashboard
        </a>

        {/* Toggle Button (Mobile View) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navigation;