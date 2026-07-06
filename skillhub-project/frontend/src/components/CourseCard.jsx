import { FaUsers, FaTrash } from "react-icons/fa";

import { Link } from "react-router-dom";

function CourseCard({
  title,
  students,
  id,
  onDelete
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

      <div className="card-actions">

        <Link to={`/course/${id}`}>
          <button>
            View Course
          </button>
        </Link>

        <button
          onClick={() => onDelete(id)}
          className="delete-btn"
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default CourseCard;