const express =
require("express");

const router =
express.Router();

const {
  getCourses,
  addCourse,
  getCourseById
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

module.exports = router;