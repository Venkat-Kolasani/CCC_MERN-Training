const express =
require("express");

const router =
express.Router();

const {
  getCourses,
  addCourse,
  getCourseById,
  updateCourse
}
=
require(
  "../controllers/courseController"
);

router.get(
  "/",
  getCourses
);

router.post(
  "/",
  addCourse
);

router.get(
  "/:id",
  getCourseById
);

router.put(
  "/:id",
  updateCourse
);

module.exports = router;