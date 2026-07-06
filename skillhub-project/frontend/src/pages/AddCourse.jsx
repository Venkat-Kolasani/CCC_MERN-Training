import { useState } from "react";

import API from "../api/courseApi";

import { toast } from "react-toastify";

function AddCourse() {

  const [course, setCourse] =  
    useState({  
      title: "",  
      students: "",
      description: "",
      instructor: "",
      duration: "",
      category: ""
    });

  async function handleSubmit(e) {

    e.preventDefault();

    if (  
      !course.title ||  
      !course.students  
    ) {

      toast.error(
        "All Fields Required"
      );

      return;  
    }

    try {

      await API.post(
        "/courses",
        course
      );

      toast.success(
        "Course Added Successfully"
      );

      setCourse({  
        title: "",  
        students: "",
        description: "",
        instructor: "",
        duration: "",
        category: ""
      });

    }

    catch (error) {

      toast.error(
        "Failed To Add Course"
      );

    }

  }

  return (

    <div className="page-container">

      <h1>Add Course</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Course Title"
          value={course.title}
          onChange={(e) =>
            setCourse({  
              ...course,  
              title: e.target.value  
            })  
          }
        />

        <br /><br />

        <input
          type="number"
          placeholder="Students Count"
          value={course.students}
          onChange={(e) =>
            setCourse({  
              ...course,  
              students: e.target.value  
            })  
          }
        />

        <br /><br />

        <textarea
          rows="3"
          placeholder="Course Description"
          value={course.description}
          onChange={(e) =>
            setCourse({  
              ...course,  
              description: e.target.value  
            })  
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Instructor Name"
          value={course.instructor}
          onChange={(e) =>
            setCourse({  
              ...course,  
              instructor: e.target.value  
            })  
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Duration (e.g., 4 weeks)"
          value={course.duration}
          onChange={(e) =>
            setCourse({  
              ...course,  
              duration: e.target.value  
            })  
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Category (e.g., Web Development)"
          value={course.category}
          onChange={(e) =>
            setCourse({  
              ...course,  
              category: e.target.value  
            })  
          }
        />

        <br /><br />

        <button type="submit">  
          Add Course  
        </button>

      </form>

    </div>

  );
}

export default AddCourse;