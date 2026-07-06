import { FaUsers } from "react-icons/fa";

import { Link } from "react-router-dom";

function CourseCard({
  title,
  students,
  id
}) {

  return (
    <div className="card">

      <h2>
        {title}
      </h2>

      <p>

        <FaUsers />

        {" "}
        Students :

        {" "}

        {students}

      </p>

      <Link to={`/course/${id}`}>
        <button>
          View Course
        </button>
      </Link>

    </div>
  );
}

export default CourseCard;