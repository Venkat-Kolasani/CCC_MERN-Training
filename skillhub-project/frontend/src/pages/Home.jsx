import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import CourseCard from "../components/CourseCard";

import API from "../api/courseApi";

import { toast } from "react-toastify";

function Home() {

  const [courses, setCourses] = useState([]);

  const [search, setSearch] = useState("");

  const [minStudents, setMinStudents] = useState("");

  const [maxStudents, setMaxStudents] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchCourses();

  }, []);

  async function fetchCourses() {

    try {

      const response =
        await API.get("/courses");

      setCourses(response.data);

    }

    catch (err) {

      setError(
        "Unable to Load Courses"
      );

    }

    finally {

      setLoading(false);

    }

  }

  async function handleDelete(id) {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this course?"
      );

    if (!confirmed) return;

    try {

      await API.delete(
        `/courses/${id}`
      );

      toast.success(
        "Course Deleted Successfully"
      );

      fetchCourses();

    }

    catch (error) {

      toast.error(
        "Failed To Delete Course"
      );

    }

  }

  if (loading)
    return <h2>Loading Courses...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (
    <>

      <Hero />

      <input
        className="search"
        type="text"
        placeholder="Search Course"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="filter-sort-controls">

        <div className="filter-group">

          <label>Min Students:</label>

          <input
            type="number"
            placeholder="Min"
            value={minStudents}
            onChange={(e) =>
              setMinStudents(e.target.value)
            }
            className="filter-input"
          />

        </div>

        <div className="filter-group">

          <label>Max Students:</label>

          <input
            type="number"
            placeholder="Max"
            value={maxStudents}
            onChange={(e) =>
              setMaxStudents(e.target.value)
            }
            className="filter-input"
          />

        </div>

        <div className="sort-group">

          <label>Sort By:</label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="sort-select"
          >

            <option value="">Default</option>

            <option value="title-asc">Title (A-Z)</option>

            <option value="title-desc">Title (Z-A)</option>

            <option value="students-desc">Students (High-Low)</option>

            <option value="students-asc">Students (Low-High)</option>

          </select>

        </div>

      </div>

      <div className="courses">

        {
          courses

            .filter((course) => {
              const matchesSearch =
                course.title
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  );

              const matchesMin =
                minStudents === "" ||
                course.students >=
                  parseInt(minStudents);

              const matchesMax =
                maxStudents === "" ||
                course.students <=
                  parseInt(maxStudents);

              return (
                matchesSearch &&
                matchesMin &&
                matchesMax
              );
            })

            .sort((a, b) => {
              if (sortBy === "title-asc") {
                return a.title.localeCompare(
                  b.title
                );
              } else if (
                sortBy === "title-desc"
              ) {
                return b.title.localeCompare(
                  a.title
                );
              } else if (
                sortBy === "students-desc"
              ) {
                return b.students - a.students;
              } else if (
                sortBy === "students-asc"
              ) {
                return a.students - b.students;
              }
              return 0;
            })

            .map((course) => (

              <CourseCard
                key={course._id}
                id={course._id}
                title={course.title}
                students={course.students}
                onDelete={handleDelete}
              />

            ))
        }

      </div>

    </>
  );
}

export default Home;