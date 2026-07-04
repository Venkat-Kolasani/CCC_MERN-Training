  
New skillhub project(MERN Stack)

Skill Hub Documentation and Folder Architecture:  
……………………………………………..   
skillhub-project  
│  
├── frontend  
│   ├── src  
│   │   ├── api  
│   │   │   └── courseApi.js  
│   │   │  
│   │   ├── components  
│   │   │   ├── Navbar.jsx  
│   │   │   ├── Sidebar.jsx  
│   │   │   ├── Hero.jsx  
│   │   │   ├── Footer.jsx  
│   │   │   ├── CourseCard.jsx  
│   │   │    └── ThemeContext.jsx  
│   │   │  
│   │   ├── pages  
│   │   │   ├── Home.jsx  
│   │   │   ├── Courses.jsx  
│   │   │   ├── Contact.jsx  
│   │   │    └── AddCourse.jsx  
│   │   │  
│   │   ├── App.jsx  
│   │   ├── main.jsx  
│   │    └── index.css  
│   │  
│   └── package.json  
│  
└── backend  
    │  
    ├── config  
    │   └── db.js  
    │  
    ├── controllers  
    │   ├── courseController.js  
    │    └── contactController.js  
    │  
    ├── models  
    │   ├── Course.js  
    │    └── Contact.js  
    │  
    ├── routes  
    │   ├── courseRoutes.js  
    │    └── contactRoutes.js  
    │  
    ├── .env  
    ├── server.js  
    └── package.json   
…………………………………………………………………….  
skillhub-project \> npm create vite@latest frontend   
select- React \-\> javascript+reactjs compiler  
 skillhub-project\> cd frontend   
skillhub-project\\ frontend\>   
node\_modules must be inside the frontend folder. Ensure this.

Example: npm install react-router-dom react-toastify react-icons framer-motion axios  
After installation, we will have in package.json as   
“install all dependencies like “  "axios": "^1.18.0",  
    "framer-motion": "^12.40.0",  
    "react": "^19.2.6",  
    "react-dom": "^19.2.6",  
    "react-icons": "^5.6.0",  
    "react-router-dom": "^7.18.0",  
    "react-toastify": "^11.1.0"  
”  \- do not copy and paste this package.json in your vs code.  
………………………………………………….  
Inside src-\>   
Create – api ,components,pages folders as seen in folder architecture   
├── api  
           └── courseApi.js

courseApi.js  
import axios from "axios";

const API \= axios.create({  
  baseURL: "http://localhost:5000/api"  
});  
export default API;  
…………………………………..  
├── components  
     ├── Navbar.jsx  
     ├── Sidebar.jsx  
     ├── Hero.jsx   
            ├── Footer.jsx  
            ├── CourseCard.jsx  
             └── ThemeContext.jsx

Navbar.jsx   
import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { ThemeContext } from "./ThemeContext";

import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

  const \[open, setOpen\] \= useState(false);

  const { dark, setDark } \=  
    useContext(ThemeContext);

  return (  
    \<nav\>

      \<h2\>SkillHub\</h2\>

      \<ul\>

        \<li\>  
          \<Link to="/"\>  
            Home  
          \</Link\>  
        \</li\>

        \<li  
          onClick={() \=\> setOpen(\!open)}  
          className="menu-item"  
        \>

          Courses ▼

          {  
            open && (

              \<div className="dropdown"\>

                \<Link to="/courses"\>  
                  All Courses  
                \</Link\>

                \<Link to="/add-course"\>  
                  Add Course  
                \</Link\>

              \</div\>

            )  
          }

        \</li\>

        \<li\>  
          \<Link to="/contact"\>  
            Contact  
          \</Link\>  
        \</li\>

      \</ul\>

      \<button  
        className="theme-btn"  
        onClick={() \=\> setDark(\!dark)}  
      \>

        {  
          dark  
            ? \<FaSun /\>  
            : \<FaMoon /\>  
        }

      \</button\>

    \</nav\>  
  );  
}

export default Navbar;  
……………………………………  
Sidebar.jsx   
import { Link } from "react-router-dom";

function Sidebar() {

  return (  
    \<aside\>

      \<h3\>Categories\</h3\>

      \<p\>  
        \<Link to="/courses"\>  
          Frontend  
        \</Link\>  
      \</p\>

      \<p\>  
        \<Link to="/courses"\>  
          Backend  
        \</Link\>  
      \</p\>

      \<p\>  
        \<Link to="/courses"\>  
          Database  
        \</Link\>  
      \</p\>

      \<p\>  
        \<Link to="/courses"\>  
          Cloud  
        \</Link\>  
      \</p\>

      \<hr /\>

      \<h3\>Quick Menu\</h3\>

      \<p\>  
        \<Link to="/"\>  
          Dashboard  
        \</Link\>  
      \</p\>

      \<p\>  
        \<Link to="/add-course"\>  
          Add Course  
        \</Link\>  
      \</p\>

      \<p\>  
        \<Link to="/contact"\>  
          Contact  
        \</Link\>  
      \</p\>

    \</aside\>  
  );  
}

export default Sidebar;  
…………………..  
Hero.jsx 

import { motion } from "framer-motion";

function Hero() {

  return (

    \<motion.section  
      className="hero"

      initial={{  
        opacity: 0,  
        y: \-50  
      }}

      animate={{  
        opacity: 1,  
        y: 0  
      }}

      transition={{  
        duration: 0.8  
      }}  
    \>

      \<h1\>  
        Learn Modern Technology  
      \</h1\>

      \<p\>  
        Build Real World Applications  
        using React, Java,  
        Node JS and MERN Stack  
      \</p\>

      \<button\>  
        Start Learning  
      \</button\>

    \</motion.section\>

  );  
}

export default Hero;  
………………………………….  
Footer.jsx   
function Footer() {

  const year \=  
    new Date().getFullYear();

  return (  
    \<footer\>

      \<h3\>  
        SkillHub Learning Platform  
      \</h3\>

      \<p\>  
        © {year} All Rights Reserved  
      \</p\>

    \</footer\>  
  );  
}

export default Footer;  
………………………………….  
CourseCard.jsx   
import { FaUsers } from "react-icons/fa";

function CourseCard({  
  title,  
  students  
}) {

  return (  
    \<div className="card"\>

      \<h2\>  
        {title}  
      \</h2\>

      \<p\>

        \<FaUsers /\>

        {" "}  
        Students :

        {" "}

        {students}

      \</p\>

      \<button\>  
        View Course  
      \</button\>

    \</div\>  
  );  
}

export default CourseCard;  
…………………………………………   
ThemeContext.jsx   
import {  
  createContext,  
  useState  
}  
from "react";

export const ThemeContext \=  
  createContext();

export function ThemeProvider({  
  children  
}) {

  const \[dark, setDark\] \=  
    useState(false);

  return (

    \<ThemeContext.Provider  
      value={{  
        dark,  
        setDark  
      }}  
    \>

      \<div  
        className={  
          dark  
            ? "dark"  
            : ""  
        }  
      \>

        {children}

      \</div\>

    \</ThemeContext.Provider\>

  );  
}  
…………………………………………………….

├── pages  
     ├── Home.jsx  
     ├── Courses.jsx  
     ├── Contact.jsx  
              └── AddCourse.jsx

Home.jsx   
import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import CourseCard from "../components/CourseCard";

import API from "../api/courseApi";

function Home() {

  const \[courses, setCourses\] \= useState(\[\]);

  const \[search, setSearch\] \= useState("");

  const \[loading, setLoading\] \= useState(true);

  const \[error, setError\] \= useState("");

  useEffect(() \=\> {

    fetchCourses();

  }, \[\]);

  async function fetchCourses() {

    try {

      const response \=  
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

  if (loading)  
    return \<h2\>Loading Courses...\</h2\>;

  if (error)  
    return \<h2\>{error}\</h2\>;

  return (  
    \<\>

      \<Hero /\>

      \<input  
        className="search"  
        type="text"  
        placeholder="Search Course"  
        value={search}  
        onChange={(e) \=\>  
          setSearch(e.target.value)  
        }  
      /\>

      \<div className="courses"\>

        {  
          courses

            .filter((course) \=\>  
              course.title  
                .toLowerCase()  
                .includes(  
                  search.toLowerCase()  
                )  
            )

            .map((course) \=\> (

              \<CourseCard  
                key={course.\_id}  
                title={course.title}  
                students={course.students}  
              /\>

            ))  
        }

      \</div\>

    \</\>  
  );  
}

export default Home;  
……………………………………………..  
Courses.jsx   
import { useEffect, useState } from "react";

import API from "../api/courseApi";

function Courses() {

  const \[courses, setCourses\] \=  
    useState(\[\]);

  useEffect(() \=\> {

    getCourses();

  }, \[\]);

  async function getCourses() {

    try {

      const response \=  
        await API.get("/courses");

      setCourses(response.data);

    }

    catch (error) {

      console.log(error);

    }

  }

  return (

    \<div className="page-container"\>

      \<h1\>Available Courses\</h1\>

      \<h3\>  
        Total Courses :  
        {" "}  
        {courses.length}  
      \</h3\>

      {  
        courses.map((course) \=\> (

          \<div  
            key={course.\_id}  
            className="course-item"  
          \>

            📘 {course.title}

            {" "}

            (  
            {course.students}  
            Students  
            )

          \</div\>

        ))  
      }

    \</div\>

  );  
}

export default Courses;  
……………………………………………………….  
Contact.jsx   
import { useState } from "react";

import API from "../api/courseApi";

import { toast } from "react-toastify";

function Contact() {

  const \[formData, setFormData\] \=  
    useState({  
      name: "",  
      email: "",  
      message: ""  
    });

  async function handleSubmit(e) {

    e.preventDefault();

    if (  
      \!formData.name ||  
      \!formData.email ||  
      \!formData.message  
    ) {

      toast.error(  
        "All Fields Required"  
      );

      return;  
    }

    try {

      await API.post(  
        "/contact",  
        formData  
      );

      toast.success(  
        "Message Sent Successfully"  
      );

      setFormData({  
        name: "",  
        email: "",  
        message: ""  
      });

    }

    catch (error) {

      toast.error(  
        "Failed To Send Message"  
      );

    }

  }

  return (

    \<div className="page-container"\>

      \<h1\>Contact Us\</h1\>

      \<form onSubmit={handleSubmit}\>

        \<input  
          type="text"  
          placeholder="Enter Name"  
          value={formData.name}  
          onChange={(e) \=\>  
            setFormData({  
              ...formData,  
              name: e.target.value  
            })  
          }  
        /\>

        \<br /\>\<br /\>

        \<input  
          type="email"  
          placeholder="Enter Email"  
          value={formData.email}  
          onChange={(e) \=\>  
            setFormData({  
              ...formData,  
              email: e.target.value  
            })  
          }  
        /\>

        \<br /\>\<br /\>

        \<textarea  
          rows="5"  
          placeholder="Enter Message"  
          value={formData.message}  
          onChange={(e) \=\>  
            setFormData({  
              ...formData,  
              message: e.target.value  
            })  
          }  
        /\>

        \<br /\>\<br /\>

        \<button type="submit"\>  
          Send Message  
        \</button\>

      \</form\>

    \</div\>

  );  
}

export default Contact;  
………………………………….  
AddCourse.jsx   
import { useState } from "react";

import API from "../api/courseApi";

import { toast } from "react-toastify";

function AddCourse() {

  const \[course, setCourse\] \=  
    useState({  
      title: "",  
      students: ""  
    });

  async function handleSubmit(e) {

    e.preventDefault();

    if (  
      \!course.title ||  
      \!course.students  
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
        students: ""  
      });

    }

    catch (error) {

      toast.error(  
        "Failed To Add Course"  
      );

    }

  }

  return (

    \<div className="page-container"\>

      \<h1\>Add Course\</h1\>

      \<form onSubmit={handleSubmit}\>

        \<input  
          type="text"  
          placeholder="Course Title"  
          value={course.title}  
          onChange={(e) \=\>  
            setCourse({  
              ...course,  
              title: e.target.value  
            })  
          }  
        /\>

        \<br /\>\<br /\>

        \<input  
          type="number"  
          placeholder="Students Count"  
          value={course.students}  
          onChange={(e) \=\>  
            setCourse({  
              ...course,  
              students: e.target.value  
            })  
          }  
        /\>

        \<br /\>\<br /\>

        \<button type="submit"\>  
          Add Course  
        \</button\>

      \</form\>

    \</div\>

  );  
}

export default AddCourse;  
……………………………………..

Inside src folder  
├── src  
  ├── App.jsx  
  ├── main.jsx  
      └── index.css 

App.jsx   
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";  
import Sidebar from "./components/Sidebar";  
import Footer from "./components/Footer";

import Home from "./pages/Home";  
import Courses from "./pages/Courses";  
import Contact from "./pages/Contact";  
import AddCourse from "./pages/AddCourse";

import { ThemeProvider } from "./components/ThemeContext";

import { ToastContainer } from "react-toastify";

function App() {  
  return (  
    \<ThemeProvider\>

      \<BrowserRouter\>

        \<Navbar /\>

        \<div className="layout"\>

          \<Sidebar /\>

          \<main\>

            \<Routes\>

              \<Route  
                path="/"  
                element={\<Home /\>}  
              /\>

              \<Route  
                path="/courses"  
                element={\<Courses /\>}  
              /\>

              \<Route  
                path="/contact"  
                element={\<Contact /\>}  
              /\>

              \<Route  
                path="/add-course"  
                element={\<AddCourse /\>}  
              /\>

            \</Routes\>

          \</main\>

        \</div\>

        \<Footer /\>

        \<ToastContainer  
          position="top-right"  
          autoClose={3000}  
        /\>

      \</BrowserRouter\>

    \</ThemeProvider\>  
  );  
}  
export default App;  
………………………………………………………………………………………  
main.jsx   
no changes required in main.jsx.  since we have only one component “App.jsx”  
………………………………………………………………………………..  
index.css   
\* {  
  margin: 0;  
  padding: 0;  
  box-sizing: border-box;  
}

body {  
  font-family: Arial, Helvetica, sans-serif;

  background-image: url("./assets/background.jpg");

  background-size: cover;

  background-position: center;

  background-attachment: fixed;  
}

/\* \===========================  
   NAVBAR  
\=========================== \*/

nav {  
  height: 70px;

  background: \#111;

  color: white;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 0 40px;  
}

nav h2 {  
  cursor: pointer;  
}

nav ul {  
  display: flex;

  gap: 30px;

  list-style: none;  
}

nav ul li {  
  position: relative;

  cursor: pointer;  
}

nav a {  
  text-decoration: none;

  color: white;

  font-weight: bold;  
}

.theme-btn {  
  padding: 10px 15px;

  border: none;

  border-radius: 8px;

  cursor: pointer;  
}

/\* \===========================  
   DROPDOWN  
\=========================== \*/

.dropdown {  
  position: absolute;

  top: 35px;

  left: 0;

  background: white;

  width: 180px;

  border-radius: 8px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.2);

  display: flex;

  flex-direction: column;

  z-index: 100;  
}

.dropdown a {  
  color: black;

  padding: 12px;

  text-decoration: none;  
}

.dropdown a:hover {  
  background: \#f1f1f1;  
}

/\* \===========================  
   LAYOUT  
\=========================== \*/

.layout {  
  display: flex;

  min-height: calc(100vh \- 140px);  
}

main {  
  flex: 1;

  padding: 25px;  
}

/\* \===========================  
   SIDEBAR  
\=========================== \*/

aside {  
  width: 230px;

  background: \#222;

  color: white;

  padding: 20px;  
}

aside h3 {  
  margin-bottom: 15px;  
}

aside p {  
  margin-bottom: 10px;  
}

aside a {  
  color: white;

  text-decoration: none;  
}

aside a:hover {  
  color: \#00bfff;  
}

aside hr {  
  margin: 20px 0;  
}

/\* \===========================  
   HERO SECTION  
\=========================== \*/

.hero {  
  background: white;

  padding: 50px;

  border-radius: 15px;

  margin-bottom: 25px;  
}

.hero h1 {  
  margin-bottom: 15px;

  color: \#222;  
}

.hero p {  
  margin-bottom: 20px;

  color: \#444;  
}

.hero button {  
  padding: 12px 20px;

  border: none;

  background: \#007bff;

  color: white;

  border-radius: 8px;

  cursor: pointer;  
}

.hero button:hover {  
  background: \#0056b3;  
}

/\* \===========================  
   SEARCH BOX  
\=========================== \*/

.search {  
  width: 350px;

  padding: 12px;

  border: 1px solid \#ccc;

  border-radius: 8px;

  margin-bottom: 25px;  
}

/\* \===========================  
   COURSE CARDS  
\=========================== \*/

.courses {  
  display: flex;

  flex-wrap: wrap;

  gap: 20px;  
}

.card {  
  background: white;

  width: 260px;

  padding: 20px;

  border-radius: 15px;

  box-shadow: 0 4px 8px rgba(0,0,0,0.1);  
}

.card h2 {  
  margin-bottom: 15px;  
}

.card p {  
  margin-bottom: 15px;  
}

.card button {  
  width: 100%;

  padding: 10px;

  border: none;

  background: \#28a745;

  color: white;

  border-radius: 8px;

  cursor: pointer;  
}

.card button:hover {  
  background: \#1e7e34;  
}

/\* \===========================  
   PAGE CONTAINER  
\=========================== \*/

.page-container {  
  background: white;

  padding: 25px;

  border-radius: 15px;  
}

.page-container h1 {  
  margin-bottom: 20px;  
}

/\* \===========================  
   COURSE PAGE  
\=========================== \*/

.course-item {  
  padding: 15px;

  margin-bottom: 12px;

  border-radius: 8px;

  background: \#f5f5f5;  
}

/\* \===========================  
   FORMS  
\=========================== \*/

form {  
  max-width: 500px;  
}

input,  
textarea {  
  width: 100%;

  padding: 12px;

  border: 1px solid \#ccc;

  border-radius: 8px;  
}

button\[type="submit"\] {  
  padding: 12px 20px;

  border: none;

  background: \#007bff;

  color: white;

  border-radius: 8px;

  cursor: pointer;  
}

button\[type="submit"\]:hover {  
  background: \#0056b3;  
}

/\* \===========================  
   FOOTER  
\=========================== \*/

footer {  
  background: \#111;

  color: white;

  text-align: center;

  padding: 20px;  
}

/\* \===========================  
   DARK MODE  
\=========================== \*/

.dark {  
  background: \#111;

  color: white;

  min-height: 100vh;  
}

.dark .hero,  
.dark .card,  
.dark .page-container {  
  background: \#333;

  color: white;  
}

.dark .course-item {  
  background: \#444;  
}

.dark input,  
.dark textarea {  
  background: \#555;

  color: white;

  border: 1px solid \#777;  
}

.dark nav {  
  background: black;  
}

.dark aside {  
  background: \#111;  
}

/\* \===========================  
   RESPONSIVE  
\=========================== \*/

@media screen and (max-width: 768px) {

  .layout {  
    flex-direction: column;  
  }

  aside {  
    width: 100%;  
  }

  nav {  
    flex-direction: column;

    height: auto;

    gap: 15px;

    padding: 20px;  
  }

  nav ul {  
    flex-direction: column;

    align-items: center;  
  }

  .courses {  
    justify-content: center;  
  }

  .search {  
    width: 100%;  
  }

  .card {  
    width: 100%;  
  }

}

………………………………………………………………………….  
Backend process  
………………………………………………………………………….  
Firstly create Data base in the name of “skillhub” and collections –   
1\. contacts  
2\. courses   
………………………………………………………………………….  
(Folder name is “backend”)  
You must be inside of “skillhub-project\\ backend\>   
Then install ,  
npm init \-y   
then install the following,  
  "cors": "^2.8.6",  
    "dotenv": "^17.4.2",  
    "express": "^5.2.1",  
    "mongoose": "^9.7.1"  
Ex: npm install express mongoose cors dotenv  
………………………….  
└── backend

   ├── config  
                └── db.js

db.js   
const mongoose \= require("mongoose");  
const connectDB \= async () \=\> {

  try {  
    await mongoose.connect(  
      process.env.MONGO\_URI  
    );  
    console.log(  
      "MongoDB Connected Successfully"  
    );  
  } catch (error) {  
    console.log(  
      "MongoDB Connection Failed"  
    );  
    console.log(error);  
    process.exit(1);  
  }  
};  
module.exports \= connectDB;  
…………………………………………

├── controllers  
            ├── courseController.js  
             └── contactController.js

courseController.js  
const Course \=  
require("../models/Course");

// GET ALL COURSES

const getCourses \=  
async (req, res) \=\> {

  try {

    const courses \=  
      await Course.find();

    res.status(200).json(courses);

  } catch (error) {

    res.status(500).json({  
      message: error.message  
    });

  }

};

// ADD COURSE

const addCourse \=  
async (req, res) \=\> {

  try {

    const course \=  
      await Course.create({  
        title: req.body.title,  
        students: req.body.students  
      });

    res.status(201).json(course);

  } catch (error) {

    res.status(500).json({  
      message: error.message  
    });

  }

};

module.exports \= {  
  getCourses,  
  addCourse  
};  
……………………………………….  
contactController.js  
const Contact \=  
require("../models/Contact");

// SAVE CONTACT MESSAGE

const saveMessage \=  
async (req, res) \=\> {

  try {

    const message \=  
      await Contact.create({

        name: req.body.name,

        email: req.body.email,

        message: req.body.message

      });

    res.status(201).json(message);

  }

  catch (error) {

    res.status(500).json({  
      message: error.message  
    });

  }

};

module.exports \= {  
  saveMessage  
};  
……………………………………..  
├── models  
    ├── Course.js  
           └── Contact.js  
Course.js   
const mongoose \= require("mongoose");

const courseSchema \=  
new mongoose.Schema({

  title: {  
    type: String,  
    required: true  
  },

  students: {  
    type: Number,  
    required: true  
  }

},  
{  
  timestamps: true  
});

module.exports \=  
mongoose.model(  
  "Course",  
  courseSchema  
);  
………………………………………….  
Contact.js   
const mongoose \= require("mongoose");

const contactSchema \=  
new mongoose.Schema({

  name: {  
    type: String,  
    required: true  
  },

  email: {  
    type: String,  
    required: true  
  },

  message: {  
    type: String,  
    required: true  
  }

},  
{  
  timestamps: true  
});

module.exports \=  
mongoose.model(  
  "Contact",  
  contactSchema  
);  
……………………………………….

├── routes  
     ├── courseRoutes.js  
              └── contactRoutes.js   
courseRoutes.js   
const express \=  
require("express");

const router \=  
express.Router();

const {  
  getCourses,  
  addCourse  
}  
\=  
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

module.exports \= router;  
………………………………………..  
contactRoutes.js   
const express \=  
require("express");

const router \=  
express.Router();

const {  
  saveMessage  
}  
\=  
require(  
  "../controllers/contactController"  
);

router.post(  
  "/",  
  saveMessage  
);

module.exports \= router;  
…………………………………………….  
these files must be directly under the backend folder  
├── .env  
├── server.js  
 └── package.json 

(Create .env file)  
.env   
PORT=5000  
MONGO\_URI=mongodb://127.0.0.1:27017/skillhub  
………………………………………………………  
server.js   
require("dotenv").config();

const express \=  
require("express");

const cors \=  
require("cors");

const connectDB \=  
require("./config/db");

const courseRoutes \=  
require("./routes/courseRoutes");

const contactRoutes \=  
require("./routes/contactRoutes");

const app \= express();

// DATABASE CONNECTION

connectDB();  
app.use(cors());  
app.use(express.json());  
app.get("/", (req, res) \=\> {  
  res.send(  
    "SkillHub Backend Running"  
  );

});  
app.use(  
  "/api/courses",  
  courseRoutes  
);  
app.use(  
  "/api/contact",  
  contactRoutes  
);

const PORT \=  
process.env.PORT || 5000;  
app.listen(  
  PORT,  
  () \=\> {  
    console.log(  
      \`Server Running on Port ${PORT}\`  
    );  
  }  
);  
………………………………………..  
Package.json must look like following   
“{  
  "name": "backend",  
  "version": "1.0.0",  
  "description": "",  
  "main": "index.js",  
  "scripts": {  
      "start": "node server.js",  
  "dev": "nodemon server.js"  
  },  
  "keywords": \[\],  
  "author": "",  
  "license": "ISC",  
  "type": "commonjs",  
  "dependencies": {  
    "cors": "^2.8.6",  
    "dotenv": "^17.4.2",  
    "express": "^5.2.1",  
    "mongoose": "^9.7.1"  
  },  
  "devDependencies": {  
    "nodemon": "^3.1.14"  
  }  
}  
”   
Do changes here,  
  "scripts": {  
      "start": "node server.js",  
  "dev": "nodemon server.js"  
  },  
……………………………….  
Finally execute :  
Create two terminal,  
Firstly execute backend and then front end and go to testing API and use post method and use the following in thunder client or postman API 

POST method  
[http://localhost:5000/api/courses](http://localhost:5000/api/courses)   
{  
  "title": "React JS",  
  "students": 1200  
}

GET method  
[http://localhost:5000/api/courses](http://localhost:5000/api/courses) 

POST method  
[http://localhost:5000/api/contact](http://localhost:5000/api/contact)  
{  
  "name": "XXXX",  
  "email": "xxxx@gmail.com",  
  "message": "Need MERN Training"  
}  
…………………………..  
Go to MongoDB and refresh the collections and we can see the results  
………………………………………………………………..

DashBoard – **Start Learning button click** 

**1\. Create New Page**  
src/pages/CourseDetails.jsx

import { motion } from "framer-motion";  
import {  
  FaUserTie,  
  FaBook,  
  FaClock,  
  FaVideo,  
  FaPlayCircle,  
  FaAward  
} from "react-icons/fa";

function CourseDetails() {

  const modules \= \[  
    "Introduction",  
    "React Fundamentals",  
    "Components & Props",  
    "Hooks",  
    "Routing",  
    "API Integration",  
    "Project Development"  
  \];

  return (  
    \<div className="course-details"\>

      \<section className="course-hero"\>

        \<motion.div  
          initial={{ opacity: 0, y: \-40 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8 }}  
        \>

          \<h1\>React JS Master Course\</h1\>

          \<p\>  
            Learn ReactJS from basics to advanced  
            with real-world projects.  
          \</p\>

          \<button\>  
            Start First Lesson  
          \</button\>

        \</motion.div\>

      \</section\>

      \<section className="course-info-grid"\>

        \<motion.div  
          className="info-card"  
          whileHover={{ scale: 1.05 }}  
        \>

          \<FaBook /\>

          \<h3\>Course Name\</h3\>

          \<p\>React JS Master Course\</p\>

        \</motion.div\>

        \<motion.div  
          className="info-card"  
          whileHover={{ scale: 1.05 }}  
        \>

          \<FaUserTie /\>

          \<h3\>Instructor\</h3\>

          \<p\>Dinesh Kumar\</p\>

        \</motion.div\>

        \<motion.div  
          className="info-card"  
          whileHover={{ scale: 1.05 }}  
        \>

          \<FaAward /\>

          \<h3\>Category\</h3\>

          \<p\>Frontend Development\</p\>

        \</motion.div\>

        \<motion.div  
          className="info-card"  
          whileHover={{ scale: 1.05 }}  
        \>

          \<FaClock /\>

          \<h3\>Duration\</h3\>

          \<p\>8 Weeks\</p\>

        \</motion.div\>

        \<motion.div  
          className="info-card"  
          whileHover={{ scale: 1.05 }}  
        \>

          \<FaVideo /\>

          \<h3\>Total Lessons\</h3\>

          \<p\>45 Lessons\</p\>

        \</motion.div\>

      \</section\>

      \<section className="learning-section"\>

        \<h2\>What You'll Learn\</h2\>

        \<ul\>  
          \<li\>React Components\</li\>  
          \<li\>Props and State\</li\>  
          \<li\>React Router\</li\>  
          \<li\>Axios API Calls\</li\>  
          \<li\>Hooks\</li\>  
          \<li\>Project Deployment\</li\>  
        \</ul\>

      \</section\>

      \<section className="progress-section"\>

        \<h2\>Course Progress\</h2\>

        \<div className="progress-bar"\>  
          \<div className="progress-fill"\>\</div\>  
        \</div\>

        \<p\>25% Completed\</p\>

      \</section\>

      \<section className="module-section"\>

        \<h2\>Course Modules\</h2\>

        {  
          modules.map((module, index) \=\> (

            \<motion.div  
              key={index}  
              className="module-card"  
              whileHover={{ x: 10 }}  
            \>

              \<FaPlayCircle /\>

              \<span\>{module}\</span\>

            \</motion.div\>

          ))  
        }

      \</section\>

    \</div\>  
  );  
}

export default CourseDetails;  
---

**2\. Update App.jsx  (replace existing App.jsx)**  
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";  
import Sidebar from "./components/Sidebar";  
import Footer from "./components/Footer";

import Home from "./pages/Home";  
import Courses from "./pages/Courses";  
import Contact from "./pages/Contact";  
import AddCourse from "./pages/AddCourse";  
import CourseDetails from "./pages/CourseDetails";

import { ThemeProvider } from "./components/ThemeContext";

import { ToastContainer } from "react-toastify";

function App() {  
  return (  
    \<ThemeProvider\>  
      \<BrowserRouter\>  
        \<Navbar /\>

        \<div className="layout"\>  
          \<Sidebar /\>

          \<main\>  
            \<Routes\>  
              \<Route path="/" element={\<Home /\>} /\>

              \<Route path="/courses" element={\<Courses /\>} /\>

              \<Route path="/contact" element={\<Contact /\>} /\>

              \<Route path="/add-course" element={\<AddCourse /\>} /\>

              \<Route path="/course-details" element={\<CourseDetails /\>} /\>  
            \</Routes\>  
          \</main\>  
        \</div\>

        \<Footer /\>

        \<ToastContainer position="top-right" autoClose={3000} /\>  
      \</BrowserRouter\>  
    \</ThemeProvider\>  
  );  
}

export default App;

---

**3\. Update Hero.jsx  (replace existing Hero.jsx)**  
import { motion } from "framer-motion";  
import { useNavigate } from "react-router-dom";

function Hero() {  
    const navigate \= useNavigate();  
  return (  
    \<motion.section  
      className="hero"  
      initial={{  
        opacity: 0,  
        y: \-50,  
      }}  
      animate={{  
        opacity: 1,  
        y: 0,  
      }}  
      transition={{  
        duration: 0.8,  
      }}  
    \>  
      \<h1\>Learn Modern Technology\</h1\>

      \<p\>  
        Build Real World Applications using React, Java, Node JS and MERN Stack  
      \</p\>

      \<button onClick={() \=\> navigate("/course-details")}\>  
        Start Learning  
      \</button\>

      {/\* \<button\>  
        Start Learning  
      \</button\> \*/}  
    \</motion.section\>  
  );  
}

export default Hero;

---

**4\. update index.css ( replace existing index.css)**

Append to:  
src/index.css

. \* {  
  margin: 0;  
  padding: 0;  
  box-sizing: border-box;  
}

body {  
  font-family: Arial, Helvetica, sans-serif;

  background-image: url("./assets/background.jpg");

  background-size: cover;

  background-position: center;

  background-attachment: fixed;  
}

/\* \===========================  
   NAVBAR  
\=========================== \*/

nav {  
  height: 70px;

  background: \#111;

  color: white;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 0 40px;  
}

nav h2 {  
  cursor: pointer;  
}

nav ul {  
  display: flex;

  gap: 30px;

  list-style: none;  
}

nav ul li {  
  position: relative;

  cursor: pointer;  
}

nav a {  
  text-decoration: none;

  color: white;

  font-weight: bold;  
}

.theme-btn {  
  padding: 10px 15px;

  border: none;

  border-radius: 8px;

  cursor: pointer;  
}

/\* \===========================  
   DROPDOWN  
\=========================== \*/

.dropdown {  
  position: absolute;

  top: 35px;

  left: 0;

  background: white;

  width: 180px;

  border-radius: 8px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.2);

  display: flex;

  flex-direction: column;

  z-index: 100;  
}

.dropdown a {  
  color: black;

  padding: 12px;

  text-decoration: none;  
}

.dropdown a:hover {  
  background: \#f1f1f1;  
}

/\* \===========================  
   LAYOUT  
\=========================== \*/

.layout {  
  display: flex;

  min-height: calc(100vh \- 140px);  
}

main {  
  flex: 1;

  padding: 25px;  
}

/\* \===========================  
   SIDEBAR  
\=========================== \*/

aside {  
  width: 230px;

  background: \#222;

  color: white;

  padding: 20px;  
}

aside h3 {  
  margin-bottom: 15px;  
}

aside p {  
  margin-bottom: 10px;  
}

aside a {  
  color: white;

  text-decoration: none;  
}

aside a:hover {  
  color: \#00bfff;  
}

aside hr {  
  margin: 20px 0;  
}

/\* \===========================  
   HERO SECTION  
\=========================== \*/

.hero {  
  background: white;

  padding: 50px;

  border-radius: 15px;

  margin-bottom: 25px;  
}

.hero h1 {  
  margin-bottom: 15px;

  color: \#222;  
}

.hero p {  
  margin-bottom: 20px;

  color: \#444;  
}

.hero button {  
  padding: 12px 20px;

  border: none;

  background: \#007bff;

  color: white;

  border-radius: 8px;

  cursor: pointer;  
}

.hero button:hover {  
  background: \#0056b3;  
}

/\* \===========================  
   SEARCH BOX  
\=========================== \*/

.search {  
  width: 350px;

  padding: 12px;

  border: 1px solid \#ccc;

  border-radius: 8px;

  margin-bottom: 25px;  
}

/\* \===========================  
   COURSE CARDS  
\=========================== \*/

.courses {  
  display: flex;

  flex-wrap: wrap;

  gap: 20px;  
}

.card {  
  background: white;

  width: 260px;

  padding: 20px;

  border-radius: 15px;

  box-shadow: 0 4px 8px rgba(0,0,0,0.1);  
}

.card h2 {  
  margin-bottom: 15px;  
}

.card p {  
  margin-bottom: 15px;  
}

.card button {  
  width: 100%;

  padding: 10px;

  border: none;

  background: \#28a745;

  color: white;

  border-radius: 8px;

  cursor: pointer;  
}

.card button:hover {  
  background: \#1e7e34;  
}

/\* \===========================  
   PAGE CONTAINER  
\=========================== \*/

.page-container {  
  background: white;

  padding: 25px;

  border-radius: 15px;  
}

.page-container h1 {  
  margin-bottom: 20px;  
}

/\* \===========================  
   COURSE PAGE  
\=========================== \*/

.course-item {  
  padding: 15px;

  margin-bottom: 12px;

  border-radius: 8px;

  background: \#f5f5f5;  
}

/\* \===========================  
   FORMS  
\=========================== \*/

form {  
  max-width: 500px;  
}

input,  
textarea {  
  width: 100%;

  padding: 12px;

  border: 1px solid \#ccc;

  border-radius: 8px;  
}

button\[type="submit"\] {  
  padding: 12px 20px;

  border: none;

  background: \#007bff;

  color: white;

  border-radius: 8px;

  cursor: pointer;  
}

button\[type="submit"\]:hover {  
  background: \#0056b3;  
}

/\* \===========================  
   FOOTER  
\=========================== \*/

footer {  
  background: \#111;

  color: white;

  text-align: center;

  padding: 20px;  
}

/\* \===========================  
   DARK MODE  
\=========================== \*/

.dark {  
  background: \#111;

  color: white;

  min-height: 100vh;  
}

/\*   
.dark .hero,  
.dark .card,  
.dark .page-container {  
  background: \#333;

  color: white;  
} \*/

.dark .hero,  
.dark .card,  
.dark .page-container,  
.dark .course-hero,  
.dark .info-card,  
.dark .learning-section,  
.dark .progress-section,  
.dark .module-section,  
.dark .module-card {

  background: \#333;

  color: white;

}

.dark .course-item {  
  background: \#444;  
}

.dark input,  
.dark textarea {  
  background: \#555;

  color: white;

  border: 1px solid \#777;  
}

.dark nav {  
  background: black;  
}

.dark aside {  
  background: \#111;  
}

/\* Received Messages Button \- contact page \*/

.message-card {

  background: green;

  padding: 15px;

  margin-bottom: 15px;

  border-radius: 10px;

  box-shadow:  
    0 2px 5px  
    rgba(0,0,0,0.1);

}

.message-card h4 {

  color: \#007bff;

  margin-bottom: 5px;

}

.message-card p {

  margin-bottom: 5px;

}

/\* Start Learning Button Click \- from Dashboard \*/

.course-details {  
  padding: 30px;  
}

.course-hero {  
  background: linear-gradient(  
    135deg,  
    \#007bff,  
    \#00c6ff  
  );

  color: white;

  padding: 60px;

  border-radius: 15px;

  text-align: center;

  margin-bottom: 30px;  
}

.course-hero button {  
  margin-top: 20px;

  padding: 12px 20px;

  border: none;

  border-radius: 8px;

  cursor: pointer;

  background: white;

  color: \#007bff;

  font-weight: bold;  
}

.course-info-grid {  
  display: grid;

  grid-template-columns:  
    repeat(auto-fit,minmax(220px,1fr));

  gap: 20px;

  margin-bottom: 30px;  
}

.info-card {  
  background: white;

  padding: 25px;

  text-align: center;

  border-radius: 12px;

  box-shadow:  
    0 4px 10px rgba(0,0,0,0.1);  
}

.info-card svg {  
  font-size: 35px;

  margin-bottom: 15px;

  color: \#007bff;  
}

.learning-section,  
.progress-section,  
.module-section {

  background: white;

  padding: 25px;

  border-radius: 15px;

  margin-bottom: 25px;  
}

.learning-section ul {  
  margin-top: 15px;

  padding-left: 20px;  
}

.learning-section li {  
  margin-bottom: 10px;  
}

.progress-bar {

  width: 100%;

  height: 20px;

  background: \#ddd;

  border-radius: 30px;

  overflow: hidden;

  margin: 20px 0;  
}

.progress-fill {

  width: 25%;

  height: 100%;

  background: \#28a745;  
}

.module-card {

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 15px;

  margin-top: 10px;

  background: \#f4f4f4;

  border-radius: 8px;

  cursor: pointer;  
}

.module-card svg {

  color: \#007bff;

  font-size: 22px;  
}

/\* Received Messages Button \*/

.received-btn {

  padding: 12px 20px;

  border: none;

  background: \#007bff;

  color: white;

  border-radius: 8px;

  cursor: pointer;

  font-size: 16px;

}

.received-btn:hover {

  background: \#0056b3;

}

/\* \===========================  
   RESPONSIVE  
\=========================== \*/

@media screen and (max-width: 768px) {

  .layout {  
    flex-direction: column;  
  }

  aside {  
    width: 100%;  
  }

  nav {  
    flex-direction: column;

    height: auto;

    gap: 15px;

    padding: 20px;  
  }

  nav ul {  
    flex-direction: column;

    align-items: center;  
  }

  .courses {  
    justify-content: center;  
  }

  .search {  
    width: 100%;  
  }

  .card {  
    width: 100%;  
  }

}  
---

**Packages Already Available**  
You already installed:  
{  
  "framer-motion": "^12.40.0",  
  "react-icons": "^5.6.0",  
  "react-router-dom": "^7.18.0"  
}  
So no new installation is required.  
---

**New Navigation Flow**  
Dashboard  
   ↓  
Start Learning Button  
   ↓  
/course-details  
   ↓  
Course Information Page  
   ↓  
Modules  
   ↓  
Start Lesson  
This gives a much more professional learning-platform experience than opening a simple blank page  
……………………………………………………………………………………………….

Received Message button from contact page with backend  
………………………………………………………………………………….

**Frontend Changes**

1. Update Contact.jsx   
2. Add a **Received Messages** button   
3. Fetch messages from backend   
4. Display messages below the form 

**Backend Changes**

1. Add GET API for contacts   
2. Update controller   
3. Update route 

---

**1\. Update Backend Controller**  
**File**  
backend/controllers/contactController.js  
Replace:  
const Contact \=  
require("../models/Contact");

// SAVE CONTACT MESSAGE

const saveMessage \=  
async (req, res) \=\> {

  try {

    const message \=  
      await Contact.create({

        name: req.body.name,

        email: req.body.email,

        message: req.body.message

      });

    res.status(201).json(message);

  }

  catch (error) {

    res.status(500).json({  
      message: error.message  
    });

  }

};

// GET ALL MESSAGES

const getMessages \=  
async (req, res) \=\> {

  try {

    const messages \=  
      await Contact.find()  
      .sort({ createdAt: \-1 });

    res.status(200).json(messages);

  }

  catch (error) {

    res.status(500).json({  
      message: error.message  
    });

  }

};

module.exports \= {  
  saveMessage,  
  getMessages  
};

// const Contact \=  
// require("../models/Contact");

// // SAVE CONTACT MESSAGE

// const saveMessage \=  
// async (req, res) \=\> {

//   try {

//     const message \=  
//       await Contact.create({

//         name: req.body.name,

//         email: req.body.email,

//         message: req.body.message

//       });

//     res.status(201).json(message);

//   }

//   catch (error) {

//     res.status(500).json({  
//       message: error.message  
//     });

//   }

// };

// module.exports \= {  
//   saveMessage  
// };  
---

**2\. Update Backend Route**

**File**  
backend/routes/contactRoutes.js  
Replace:  
const express \=  
require("express");

const router \=  
express.Router();

const {  
  saveMessage,  
  getMessages  
}  
\=  
require(  
  "../controllers/contactController"  
);

// SAVE MESSAGE

router.post(  
  "/",  
  saveMessage  
);

// GET ALL MESSAGES

router.get(  
  "/",  
  getMessages  
);

module.exports \= router;

---

**3\. No Change Needed**  
backend/server.js  
Already contains:  
app.use(  
  "/api/contact",  
  contactRoutes  
);  
---

**4\. Update Contact Page**  
**File**

src/pages/Contact.jsx

Replace entire file:  
import { useState } from "react";

import API from "../api/courseApi";

import { toast } from "react-toastify";

import { motion } from "framer-motion";

function Contact() {  
  const \[formData, setFormData\] \= useState({  
    name: "",  
    email: "",  
    message: "",  
  });

  const \[messages, setMessages\] \= useState(\[\]);

  const \[showMessages, setShowMessages\] \= useState(false);

  async function handleSubmit(e) {  
    e.preventDefault();

    if (\!formData.name || \!formData.email || \!formData.message) {  
      toast.error("All Fields Required");

      return;  
    }

    try {  
      await API.post("/contact", formData);

      toast.success("Message Sent Successfully");

      setFormData({  
        name: "",  
        email: "",  
        message: "",  
      });  
    } catch (error) {  
      toast.error("Failed To Send Message");  
    }  
  }

  async function fetchMessages() {  
    try {  
      const response \= await API.get("/contact");

      setMessages(response.data);

      setShowMessages(true);  
    } catch (error) {  
      toast.error(error);  
      // toast.error(""Unable To Load Messages"");  
    }  
  }

  return (  
    \<div className="page-container"\>  
      \<h1\>Contact Us\</h1\>

      \<form onSubmit={handleSubmit}\>  
        \<input  
          type="text"  
          placeholder="Enter Name"  
          value={formData.name}  
          onChange={(e) \=\>  
            setFormData({  
              ...formData,  
              name: e.target.value,  
            })  
          }  
        /\>

        \<br /\>  
        \<br /\>

        \<input  
          type="email"  
          placeholder="Enter Email"  
          value={formData.email}  
          onChange={(e) \=\>  
            setFormData({  
              ...formData,  
              email: e.target.value,  
            })  
          }  
        /\>

        \<br /\>  
        \<br /\>

        \<textarea  
          rows="5"  
          placeholder="Enter Message"  
          value={formData.message}  
          onChange={(e) \=\>  
            setFormData({  
              ...formData,  
              message: e.target.value,  
            })  
          }  
        /\>

        \<br /\>  
        \<br /\>

        \<button type="submit"\>Send Message\</button\>  
      \</form\>

      \<br /\>

      \<button className="received-btn" onClick={fetchMessages}\>  
        Received Messages  
      \</button\>

      {/\* \<button  
        onClick={fetchMessages}  
      \>  
        Received Messages  
      \</button\> \*/}

      \<br /\>  
      \<br /\>

      {showMessages && (  
        \<div\>  
          {/\* \<h2\>  
              Received Messages  
            \</h2\> \*/}

          {messages.map((msg) \=\> (  
              
            \<div key={msg.\_id} className="message-card"\>

              \<h4\>{msg.name}\</h4\>

              \<p\>{msg.email}\</p\>

              \<p\>{msg.message}\</p\>

              \<hr /\>  
            \</div\>  
          ))}  
        \</div\>  
      )}  
    \</div\>  
  );  
}

export default Contact;

---

---

**6\. App.jsx**  
**No Changes Needed**  
Because Contact route already exists:  
\<Route  
  path="/contact"  
  element={\<Contact /\>}  
/\>  
---

**Flow**  
**Save Message**  
Contact Form  
      ↓  
Axios POST  
      ↓  
/api/contact  
      ↓  
MongoDB contacts collection  
**View Messages**  
Received Messages Button  
      ↓  
Axios GET  
      ↓  
/api/contact  
      ↓  
MongoDB contacts collection  
      ↓  
Display in Contact Page  
Now when you visit:  
http://localhost:5173/contact  
you can:

1. Fill form → Save to MongoDB   
2. Click **Received Messages**   
3. See all saved contact messages from the contacts collection directly on the same page. 

