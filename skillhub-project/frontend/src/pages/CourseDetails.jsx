import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import API from "../api/courseApi";

import { toast } from "react-toastify";

function CourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    students: "",
    description: "",
    instructor: "",
    duration: "",
    category: ""
  });

  useEffect(() => {

    fetchCourse();

  }, [id]);

  async function fetchCourse() {

    try {

      const response =
        await API.get(`/courses/${id}`);

      setCourse(response.data);

      setFormData({
        title: response.data.title,
        students: response.data.students,
        description: response.data.description || "",
        instructor: response.data.instructor || "",
        duration: response.data.duration || "",
        category: response.data.category || ""
      });

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

  async function handleUpdate(e) {
    e.preventDefault();

    try {

      await API.put(
        `/courses/${id}`,
        formData
      );

      toast.success(
        "Course Updated Successfully"
      );

      setIsEditing(false);

      fetchCourse();

    }

    catch (error) {

      toast.error(
        "Failed To Update Course"
      );

    }

  }

  if (loading)
    return <h2>Loading Course...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (

    <div className="page-container course-details">

      <button
        onClick={() => navigate(-1)}
        className="back-btn"
      >
        ← Back
      </button>

      {!isEditing ? (

        <div className="course-view">

          <h1 className="course-title">{course.title}</h1>

          <div className="course-info">

            <p className="info-item">
              <span className="info-label">Students:</span>
              <span className="info-value">{course.students}</span>
            </p>

            {course.description && (
              <p className="info-item">
                <span className="info-label">Description:</span>
                <span className="info-value">{course.description}</span>
              </p>
            )}

            {course.instructor && (
              <p className="info-item">
                <span className="info-label">Instructor:</span>
                <span className="info-value">{course.instructor}</span>
              </p>
            )}

            {course.duration && (
              <p className="info-item">
                <span className="info-label">Duration:</span>
                <span className="info-value">{course.duration}</span>
              </p>
            )}

            {course.category && (
              <p className="info-item">
                <span className="info-label">Category:</span>
                <span className="info-value">{course.category}</span>
              </p>
            )}

          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="edit-btn"
          >
            Edit Course
          </button>

        </div>

      ) : (

        <div className="edit-form-container">

          <h1 className="form-title">Edit Course</h1>

          <form
            onSubmit={handleUpdate}
            className="course-form"
          >

            <div className="form-group">

              <label>Title:</label>

              <input
                type="text"
                placeholder="Course Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value
                  })
                }
                className="form-control"
              />

            </div>

            <div className="form-group">

              <label>Students:</label>

              <input
                type="number"
                placeholder="Students Count"
                value={formData.students}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    students: e.target.value
                  })
                }
                className="form-control"
              />

            </div>

            <div className="form-group">

              <label>Description:</label>

              <textarea
                rows="3"
                placeholder="Course Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value
                  })
                }
                className="form-control"
              />

            </div>

            <div className="form-group">

              <label>Instructor:</label>

              <input
                type="text"
                placeholder="Instructor Name"
                value={formData.instructor}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    instructor: e.target.value
                  })
                }
                className="form-control"
              />

            </div>

            <div className="form-group">

              <label>Duration:</label>

              <input
                type="text"
                placeholder="Duration (e.g., 4 weeks)"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    duration: e.target.value
                  })
                }
                className="form-control"
              />

            </div>

            <div className="form-group">

              <label>Category:</label>

              <input
                type="text"
                placeholder="Category (e.g., Web Development)"
                value={formData.category}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category: e.target.value
                  })
                }
                className="form-control"
              />

            </div>

            <div className="form-actions">

              <button type="submit" className="btn-primary">
                Save Changes
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn-secondary"
              >
                Cancel
              </button>

            </div>

          </form>

        </div>

      )}

    </div>

  );

}

export default CourseDetails;
