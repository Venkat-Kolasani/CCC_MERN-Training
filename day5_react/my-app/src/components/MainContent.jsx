function MainContent() {
  return (
    <section>

      {/* Welcome Card */}
      <div className="card shadow-sm mb-4">

        <div className="card-body">

          <h2 className="card-title">
            Welcome to Student Dashboard
          </h2>

          <p className="card-text">
            Manage your courses, assignments, attendance and results
            from one place.
          </p>

          <button className="btn btn-primary">
            Explore Dashboard
          </button>

        </div>

      </div>

      {/* Statistics Cards */}
      <div className="row">

        <div className="col-md-4 mb-3">

          <div className="card text-center border-primary">

            <div className="card-body">
 <h5>Courses</h5>

              <h2>6</h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card text-center border-success">

            <div className="card-body">

              <h5>Assignments</h5>

              <h2>3</h2>

            </div>

          </div>

        </div>

        <div className="col-md-4 mb-3">

          <div className="card text-center border-warning">

            <div className="card-body">

              <h5>Attendance</h5>

              <h2>95%</h2>

            </div>
</div>

        </div>

      </div>

      {/* Recent Activities */}
      <div className="card shadow-sm mt-4">

        <div className="card-header bg-secondary text-white">

          <h5 className="mb-0">
            Recent Activities
          </h5>

        </div>
<div className="card-body">

          <table className="table table-striped table-hover">

            <thead>

              <tr>

                <th>Course</th>
                <th>Status</th>
                <th>Marks</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>React JS</td>
                <td>Completed</td>
                <td>92</td>

              </tr>

              <tr>

                <td>Java</td>
                <td>In Progress</td>
  <td>88</td>

              </tr>

              <tr>

                <td>Database</td>
                <td>Completed</td>
                <td>90</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default MainContent;
