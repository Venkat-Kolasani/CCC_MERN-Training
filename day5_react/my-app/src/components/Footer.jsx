function Footer() {
  return (
    <footer className="bg-dark text-white mt-4 py-3">

      <div className="container-fluid">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start">

            <p className="mb-0">
              © 2026 Student Dashboard. All Rights Reserved.
            </p>

          </div>
{/* Right Side */}
          <div className="col-md-6 text-center text-md-end">

            <a href="#" className="text-white text-decoration-none me-3">
              Privacy
            </a>

            <a href="#" className="text-white text-decoration-none me-3">
              Terms
            </a>

            <a href="#" className="text-white text-decoration-none">
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
