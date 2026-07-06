import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import API from "../api/courseApi";

function CourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchCourse();

  }, [id]);

  async function fetchCourse() {

    try {

      const response =
        await API.get(`/courses/${id}`);

      setCourse(response.data);

    }

    catch (err) {

      setError(
        "Unable to Load Course"
      );

    }

    finally {

      setLoading(false);

    }

  }

  if (loading)
    return <h2>Loading Course...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (

    <div className="page-container">

      <button
        onClick={() => navigate(-1)}
        className="back-btn"
      >
        ← Back
      </button>

      <h1>{course.title}</h1>

      <p><strong>Students:</strong> {course.students}</p>

      {course.description && (
        <p><strong>Description:</strong> {course.description}</p>
      )}

      {course.instructor && (
        <p><strong>Instructor:</strong> {course.instructor}</p>
      )}

      {course.duration && (
        <p><strong>Duration:</strong> {course.duration}</p>
      )}

      {course.category && (
        <p><strong>Category:</strong> {course.category}</p>
      )}

    </div>

  );

}

export default CourseDetails;
