function Sidebar() {
  return (
    <aside>

      <div className="card shadow-sm">

        <div className="card-header bg-success text-white">
          <h5 className="mb-0">Dashboard Menu</h5>
        </div>

        <div className="list-group list-group-flush">

          <a
            href="#"
            className="list-group-item list-group-item-action active"
          >
🏠 Dashboard
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action"
          >
            📚 Courses
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          >
            📝 Assignments
            <span className="badge bg-danger rounded-pill">3</span>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action"
          >
            📊 Results
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action"
          >
            ⚙ Settings
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action text-danger"
          >
            🚪 Logout
          </a>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;