const Course =
require("../models/Course");

// GET ALL COURSES

const getCourses =
async (req, res) => {

  try {

    const courses =
      await Course.find();

    res.status(200).json(courses);

  } catch (error) {

    res.status(500).json({  
      message: error.message  
    });

  }

};

// ADD COURSE

const addCourse =
async (req, res) => {

  try {

    const course =
      await Course.create({
        title: req.body.title,
        students: req.body.students,
        description: req.body.description,
        instructor: req.body.instructor,
        duration: req.body.duration,
        category: req.body.category
      });

    res.status(201).json(course);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// GET SINGLE COURSE

const getCourseById =
async (req, res) => {

  try {

    const course =
      await Course.findById(
        req.params.id
      );

    if (!course) {
      return res
        .status(404)
        .json({
          message: "Course not found"
        });
    }

    res.status(200).json(course);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// UPDATE COURSE

const updateCourse =
async (req, res) => {

  try {

    const course =
      await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    if (!course) {
      return res
        .status(404)
        .json({
          message: "Course not found"
        });
    }

    res.status(200).json(course);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// DELETE COURSE

const deleteCourse =
async (req, res) => {

  try {

    const course =
      await Course.findByIdAndDelete(
        req.params.id
      );

    if (!course) {
      return res
        .status(404)
        .json({
          message: "Course not found"
        });
    }

    res.status(200).json({
      message: "Course deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  getCourses,
  addCourse,
  getCourseById,
  updateCourse,
  deleteCourse
};