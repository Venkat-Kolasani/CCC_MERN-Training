Frontend  
……………..  
Dashboard.jsx  
………………………….  
import { useEffect, useState } from "react";  
import axios from "axios";

import API\_URL from "./config";

import Header from "./Header";  
import Sidebar from "./Sidebar";  
import Footer from "./Footer";

import "./Dashboard.css";

function Dashboard() {  
  const \[foods, setFoods\] \= useState(\[\]);

  const \[orderedFoods, setOrderedFoods\] \= useState(\[\]);

  // \===========================================  
  // Fetch Foods  
  // \===========================================  
  useEffect(() \=\> {  
    fetchFoods();  
  }, \[\]);

  const fetchFoods \= async () \=\> {  
    // Check JWT Token  
    const token \= localStorage.getItem("token");

    if (\!token) {  
      window.location.href \= "/";

      return;  
    }

    try {  
      const response \= await axios.get(  
        \`${API\_URL}/foods\`,

        {  
          headers: {  
            Authorization: \`Bearer ${token}\`,  
          },

          withCredentials: true,  
        },  
      );

      setFoods(response.data.foods);  
    } catch (error) {  
      console.log(error);

      // Token Invalid or Expired  
      if (error.response?.status \=== 401\) {  
        localStorage.removeItem("token");

        window.location.href \= "/";

        return;  
      }

      alert("Unable to fetch food items.");  
    }  
  };

  // \===========================================  
  // Order Food  
  // \===========================================  
  const orderFood \= async (food) \=\> {  
    try {  
      const response \= await axios.post(  
        \`${API\_URL}/order\`,

        {  
          name: food.name,  
        },

        {  
          headers: {  
            Authorization: \`Bearer ${localStorage.getItem("token")}\`,  
          },

          withCredentials: true,  
        },  
      );

      alert(response.data.message);

      setOrderedFoods((previousOrders) \=\> \[  
        ...previousOrders,

        response.data.orderedFood,  
      \]);  
    } catch (error) {  
      console.log(error);

      if (error.response?.status \=== 401\) {  
        localStorage.removeItem("token");

        window.location.href \= "/";

        return;  
      }

      alert("Unable to order food.");  
    }  
  };

  return (  
    \<\>  
      \<Header /\>

      \<div className="dashboard-container"\>  
        \<Sidebar /\>

        \<main className="main-content"\>  
          \<h2 className="section-title"\>🍽 Available Foods\</h2\>

          \<div className="food-grid"\>  
            {foods.map((food) \=\> (  
              \<div className="food-card" key={food.\_id}\>  
                \<img src={food.image} alt={food.name} /\>

                \<h3\>{food.name}\</h3\>

                \<p\>  
                  \<strong\>Price :\</strong\>₹ {food.price}  
                \</p\>

                \<button onClick={() \=\> orderFood(food)}\>Order Food\</button\>  
              \</div\>  
            ))}  
          \</div\>

          \<hr /\>

          \<h2 className="section-title"\>🛒 Ordered Foods\</h2\>

          {orderedFoods.length \=== 0 ? (  
            \<div className="empty-order"\>No Food Ordered Yet\</div\>  
          ) : (  
            \<div className="ordered-grid"\>  
              {orderedFoods.map((food, index) \=\> (  
                \<div className="ordered-card" key={index}\>  
                  \<img src={food.image} alt={food.name} /\>

                  \<div\>  
                    \<h3\>{food.name}\</h3\>

                    \<p\>  
                      \<strong\>Price :\</strong\>₹ {food.price}  
                    \</p\>

                    \<span\>✔ Ordered Successfully\</span\>  
                  \</div\>  
                \</div\>  
              ))}  
            \</div\>  
          )}  
        \</main\>  
      \</div\>

      \<Footer /\>  
    \</\>  
  );  
}

export default Dashboard;  
…………………………….  
Dashboard.css  
/\* \===========================================  
   Dashboard Layout  
\=========================================== \*/

.dashboard-container{

    display:flex;

    min-height:calc(100vh \- 120px);

    background:\#f4f6f9;

}

/\* \===========================================  
   Main Content  
\=========================================== \*/

.main-content{

    flex:1;

    padding:25px;

}

/\* \===========================================  
   Section Title  
\=========================================== \*/

.section-title{

    color:\#2c3e50;

    margin-bottom:20px;

    font-size:28px;

    font-weight:bold;

}

/\* \===========================================  
   Horizontal Line  
\=========================================== \*/

hr{

    margin:40px 0;

    border:none;

    border-top:2px solid \#dddddd;

}

/\* \===========================================  
   Food Grid  
\=========================================== \*/

.food-grid{

    display:grid;

    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

    gap:25px;

}

/\* \===========================================  
   Food Card  
\=========================================== \*/

.food-card{

    background:\#ffffff;

    border-radius:12px;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

    padding:15px;

    text-align:center;

    transition:.3s;

}

.food-card:hover{

    transform:translateY(-6px);

}

.food-card img{

    width:100%;

    height:170px;

    object-fit:cover;

    border-radius:10px;

}

.food-card h3{

    margin:15px 0 10px;

    color:\#2c3e50;

}

.food-card p{

    margin-bottom:15px;

    color:\#555;

}

.food-card button{

    width:100%;

    padding:10px;

    background:\#27ae60;

    color:white;

    border:none;

    border-radius:6px;

    cursor:pointer;

    font-size:16px;

    transition:.3s;

}

.food-card button:hover{

    background:\#1e8449;

}

/\* \===========================================  
   Ordered Foods  
\=========================================== \*/

.ordered-grid{

    display:flex;

    flex-direction:column;

    gap:18px;

}

/\* \===========================================  
   Ordered Card  
\=========================================== \*/

.ordered-card{

    display:flex;

    align-items:center;

    gap:20px;

    background:\#ffffff;

    padding:15px;

    border-radius:10px;

    box-shadow:0 4px 10px rgba(0,0,0,.12);

}

.ordered-card img{

    width:120px;

    height:90px;

    object-fit:cover;

    border-radius:8px;

}

.ordered-card h3{

    margin-bottom:8px;

    color:\#2c3e50;

}

.ordered-card p{

    margin-bottom:8px;

    color:\#555;

}

.ordered-card span{

    color:green;

    font-weight:bold;

}

/\* \===========================================  
   Empty Order  
\=========================================== \*/

.empty-order{

    text-align:center;

    padding:25px;

    background:white;

    border-radius:10px;

    color:gray;

    font-size:20px;

    box-shadow:0 4px 10px rgba(0,0,0,.1);

}

/\* \===========================================  
   Responsive Design  
\=========================================== \*/

@media(max-width:768px){

    .dashboard-container{

        flex-direction:column;

    }

    .ordered-card{

        flex-direction:column;

        text-align:center;

    }

    .ordered-card img{

        width:100%;

        height:200px;

    }

}  
……………………………………  
Fooder.css   
/\* \===========================================  
   Footer  
\=========================================== \*/

.footer {

    background: \#2c3e50;

    color: \#ffffff;

    text-align: center;

    padding: 18px;

    font-size: 15px;

    font-weight: 500;

    border-top: 3px solid \#2196f3;

    margin-top: auto;

}

.footer p {

    margin: 0;

    letter-spacing: 0.5px;

}

/\* \===========================================  
   Responsive Design  
\=========================================== \*/

@media (max-width: 768px) {

    .footer {

        font-size: 14px;

        padding: 15px;

    }

}  
………………………….  
Footer.jsx

import "./Footer.css";

function Footer() {

    const currentYear \= new Date().getFullYear();

    return (

        \<footer className="footer"\>

            \<p\>

                © {currentYear} Food Ordering App |  
                Built with React, Express, MongoDB & JWT Authentication

            \</p\>

        \</footer\>

    );

}

export default Footer;  
……………………………………………  
Header.css   
/\* \===========================================  
   Header  
\=========================================== \*/

.header{

    height:70px;

    background:\#2c3e50;

    color:white;

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding:0 30px;

    box-shadow:0 3px 8px rgba(0,0,0,.25);

}

/\* \===========================================  
   Logo  
\=========================================== \*/

.logo{

    font-size:24px;

    font-weight:bold;

    letter-spacing:1px;

}

/\* \===========================================  
   Right Side  
\=========================================== \*/

.header-nav{

    display:flex;

    align-items:center;

    gap:20px;

}

/\* \===========================================  
   Welcome Text  
\=========================================== \*/

.welcome-text{

    font-size:17px;

    font-weight:500;

}

/\* \===========================================  
   Logout Button  
\=========================================== \*/

.logout-btn{

    padding:10px 18px;

    background:\#e74c3c;

    color:white;

    border:none;

    border-radius:6px;

    cursor:pointer;

    font-size:15px;

    font-weight:bold;

    transition:0.3s;

}

.logout-btn:hover{

    background:\#c0392b;

    transform:scale(1.05);

}

/\* \===========================================  
   Responsive Design  
\=========================================== \*/

@media(max-width:768px){

    .header{

        flex-direction:column;

        justify-content:center;

        gap:10px;

        height:auto;

        padding:15px;

        text-align:center;

    }

    .header-nav{

        flex-direction:column;

        gap:10px;

    }

    .logo{

        font-size:22px;

    }

}  
…………………………………  
Header.jsx   
import axios from "axios";

import API\_URL from "./config";  
import "./Header.css";

function Header() {

    // \===========================================  
    // Logout  
    // \===========================================  
    const handleLogout \= async () \=\> {

        try {

            await axios.get(

                \`${API\_URL}/logout\`,

                {  
                    withCredentials: true  
                }

            );

        }  
        catch (error) {

            console.log(error);

        }

        // Remove JWT Token  
        localStorage.removeItem("token");

        // Redirect to Login Page  
        window.location.href \= "/";

    };

    return (

        \<header className="header"\>

            \<div className="logo"\>

                🍔 Food Ordering App

            \</div\>

            \<nav className="header-nav"\>

                \<span className="welcome-text"\>

                    Welcome, Admin

                \</span\>

                \<button  
                    className="logout-btn"  
                    onClick={handleLogout}  
                \>  
                    Logout  
                \</button\>

            \</nav\>

        \</header\>

    );

}

export default Header;

…………………………….  
Login.css   
/\* \===========================================  
   Page Background  
\=========================================== \*/

\*{  
    margin:0;  
    padding:0;  
    box-sizing:border-box;  
}

body{  
    font-family:Arial, Helvetica, sans-serif;  
    background:\#f4f6f9;  
}

/\* \===========================================  
   Login Container  
\=========================================== \*/

.login-container{

    width:100%;  
    min-height:100vh;

    display:flex;  
    justify-content:center;  
    align-items:center;

    background:linear-gradient(135deg,\#4facfe,\#00f2fe);

}

/\* \===========================================  
   Login Card  
\=========================================== \*/

.login-card{

    width:380px;

    background:white;

    padding:35px;

    border-radius:12px;

    box-shadow:0 10px 25px rgba(0,0,0,0.25);

    text-align:center;

}

/\* \===========================================  
   Heading  
\=========================================== \*/

.login-card h1{

    color:\#2c3e50;

    margin-bottom:15px;

}

.login-card h2{

    color:\#555;

    margin-bottom:25px;

}

/\* \===========================================  
   Form  
\=========================================== \*/

.login-card form{

    display:flex;  
    flex-direction:column;

}

/\* \===========================================  
   Input  
\=========================================== \*/

.login-card input{

    padding:12px;

    margin-bottom:18px;

    border:1px solid \#cccccc;

    border-radius:6px;

    font-size:16px;

    outline:none;

    transition:.3s;

}

.login-card input:focus{

    border-color:\#2196f3;

    box-shadow:0 0 5px rgba(33,150,243,.4);

}

/\* \===========================================  
   Button  
\=========================================== \*/

.login-card button{

    padding:12px;

    background:\#2196f3;

    color:white;

    border:none;

    border-radius:6px;

    font-size:17px;

    cursor:pointer;

    transition:.3s;

}

.login-card button:hover{

    background:\#1976d2;

}

/\* \===========================================  
   Error Message  
\=========================================== \*/

.error-message{

    color:red;

    margin-bottom:15px;

    font-weight:bold;

}

/\* \===========================================  
   Demo Login Box  
\=========================================== \*/

.demo-box{

    margin-top:30px;

    padding:15px;

    background:\#f8f9fa;

    border-radius:8px;

    border:1px solid \#dddddd;

}

.demo-box h3{

    margin-bottom:10px;

    color:\#2c3e50;

}

.demo-box p{

    margin:5px 0;

    color:\#555;

}

/\* \===========================================  
   Responsive Design  
\=========================================== \*/

@media(max-width:480px){

    .login-card{

        width:90%;

        padding:25px;

    }

}  
………………………………………………  
Login.jsx 

import { useState } from "react";  
import axios from "axios";

import API\_URL from "./config";  
import "./Login.css";

function Login() {

    const \[user, setUser\] \= useState({  
        username: "",  
        password: ""  
    });

    const \[error, setError\] \= useState("");

    // \==========================================  
    // Handle Input Change  
    // \==========================================  
    const handleChange \= (event) \=\> {

        const { name, value } \= event.target;

        setUser((previousUser) \=\> ({  
            ...previousUser,  
            \[name\]: value  
        }));

    };

    // \==========================================  
    // Handle Login  
    // \==========================================  
    const handleLogin \= async (event) \=\> {

        event.preventDefault();

        setError("");

        // Validation  
        if (\!user.username || \!user.password) {

            setError("Please enter Username and Password.");

            return;

        }

        try {

            const response \= await axios.post(

                \`${API\_URL}/login\`,

                user,

                {  
                    withCredentials: true  
                }

            );

            console.log("Login Response:", response.data);

            // Save JWT Token  
            localStorage.setItem(  
                "token",  
                response.data.token  
            );

            // Redirect to Dashboard  
            window.location.href \= "/dashboard";

        }

        catch (error) {

            if (error.response) {

                setError(error.response.data.message);

            }

            else {

                setError("Unable to connect to the server.");

            }

        }

    };

    return (

        \<div className="login-container"\>

            \<div className="login-card"\>

                \<h1\>🍔 Food Ordering App\</h1\>

                \<h2\>Login\</h2\>

                {  
                    error &&  
                    \<p className="error-message"\>  
                        {error}  
                    \</p\>  
                }

                \<form onSubmit={handleLogin}\>

                    \<input  
                        type="text"  
                        name="username"  
                        placeholder="Enter Username"  
                        value={user.username}  
                        onChange={handleChange}  
                    /\>

                    \<input  
                        type="password"  
                        name="password"  
                        placeholder="Enter Password"  
                        value={user.password}  
                        onChange={handleChange}  
                    /\>

                    \<button type="submit"\>  
                        Login  
                    \</button\>

                \</form\>

                \<div className="demo-box"\>

                    \<h3\>Demo Login\</h3\>

                    \<p\>  
                        \<strong\>Username:\</strong\> admin  
                    \</p\>

                    \<p\>  
                        \<strong\>Password:\</strong\> admin123  
                    \</p\>

                \</div\>

            \</div\>

        \</div\>

    );

}

export default Login;  
……………………………………….  
Main.jsx   
import { StrictMode } from 'react'  
import { createRoot } from 'react-dom/client'  
// import './index.css'  
import App from './App.jsx'  
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(  
  \<StrictMode\>  
     \<BrowserRouter\>  
      \<App /\>  
       
     \</BrowserRouter\>  
     
  \</StrictMode\>,  
)

…………………………………   
Sidebar.css   
/\* \===========================================  
   Sidebar  
\=========================================== \*/

.sidebar {

    width: 250px;

    background: \#34495e;

    color: white;

    padding: 20px;

    min-height: 100%;

}

/\* \===========================================  
   Sidebar Title  
\=========================================== \*/

.sidebar-title {

    text-align: center;

    margin-bottom: 25px;

    font-size: 24px;

    border-bottom: 2px solid rgba(255,255,255,0.3);

    padding-bottom: 10px;

}

/\* \===========================================  
   Menu  
\=========================================== \*/

.sidebar-menu {

    list-style: none;

    margin-bottom: 30px;

}

.sidebar-menu li {

    padding: 12px;

    margin-bottom: 10px;

    border-radius: 6px;

    cursor: pointer;

    transition: 0.3s;

}

.sidebar-menu li:hover {

    background: \#3f5b78;

}

.sidebar-menu .active {

    background: \#2196f3;

    font-weight: bold;

}

/\* \===========================================  
   Project Information  
\=========================================== \*/

.sidebar-info {

    background: rgba(255,255,255,0.08);

    padding: 15px;

    border-radius: 8px;

}

.sidebar-info h3 {

    margin-bottom: 12px;

    color: \#ffd54f;

}

.sidebar-info p {

    margin-bottom: 10px;

}

.sidebar-info ul {

    padding-left: 18px;

}

.sidebar-info li {

    margin-bottom: 8px;

}

/\* \===========================================  
   Responsive Design  
\=========================================== \*/

@media (max-width: 768px) {

    .sidebar {

        width: 100%;

        min-height: auto;

    }

}  
………………………………  
Sidebar.jsx   
import "./Sidebar.css";

function Sidebar() {

    return (

        \<aside className="sidebar"\>

            \<h2 className="sidebar-title"\>  
                📋 Menu  
            \</h2\>

            \<ul className="sidebar-menu"\>

                \<li className="active"\>  
                    🍽 Food Ordering  
                \</li\>

                \<li\>  
                    🛒 My Orders  
                \</li\>

                \<li\>  
                    👤 Profile  
                \</li\>

                \<li\>  
                    ℹ About  
                \</li\>

            \</ul\>

            \<div className="sidebar-info"\>

                \<h3\>Mini MERN Project\</h3\>

                \<p\>  
                    This project demonstrates:  
                \</p\>

                \<ul\>

                    \<li\>✅ JWT Authentication\</li\>

                    \<li\>✅ Express Session\</li\>

                    \<li\>✅ MongoDB Compass\</li\>

                    \<li\>✅ React \+ Express\</li\>

                    \<li\>✅ Food Ordering\</li\>

                \</ul\>

            \</div\>

        \</aside\>

    );

}

export default Sidebar;  
…………………………………  
Package.json   
{  
  "name": "frontend",  
  "private": true,  
  "version": "0.0.0",  
  "type": "module",  
  "scripts": {  
    "dev": "vite",  
    "build": "vite build",  
    "lint": "eslint .",  
    "preview": "vite preview"  
  },  
  "dependencies": {  
    "axios": "^1.18.1",  
    "react": "^19.2.7",  
    "react-dom": "^19.2.7",  
    "react-router-dom": "^7.18.1"  
  },  
  "devDependencies": {  
    "@babel/core": "^7.29.7",  
    "@eslint/js": "^10.0.1",  
    "@rolldown/plugin-babel": "^0.2.3",  
    "@types/react": "^19.2.17",  
    "@types/react-dom": "^19.2.3",  
    "@vitejs/plugin-react": "^6.0.3",  
    "babel-plugin-react-compiler": "^1.0.0",  
    "eslint": "^10.6.0",  
    "eslint-plugin-react-hooks": "^7.1.1",  
    "eslint-plugin-react-refresh": "^0.5.3",  
    "globals": "^17.7.0",  
    "vite": "^8.1.1"  
  }  
}

…………………………………………………..

Backend:  
Folder name:

middleware-\>auth.js   
import jwt from "jsonwebtoken";

const auth \= (req, res, next) \=\> {

    try {

        const authHeader \= req.header("Authorization");

        if (\!authHeader) {

            return res.status(401).json({  
                success: false,  
                message: "Access Denied. Token Missing."  
            });

        }

        const token \= authHeader.replace("Bearer ", "");

        const decoded \= jwt.verify(  
            token,  
            process.env.JWT\_SECRET  
        );

        req.user \= decoded;

        next();

    }  
    catch (error) {

        return res.status(401).json({  
            success: false,  
            message: "Invalid or Expired Token."  
        });

    }

};

export default auth;  
…………………………………..  
Foler name:   
models \-\> Food.js   
import mongoose from "mongoose";

// \===========================================  
// Food Schema  
// \===========================================  
const foodSchema \= new mongoose.Schema(  
    {  
        name: {  
            type: String,  
            required: true,  
            trim: true  
        },

        price: {  
            type: Number,  
            required: true,  
            min: 1  
        },

        image: {  
            type: String,  
            required: true,  
            trim: true  
        }  
    },  
    {  
        timestamps: true  
    }  
);

// \===========================================  
// Export Model  
// \===========================================  
const Food \= mongoose.model("Food", foodSchema);

export default Food;  
……………………………

middleware-\>user.js   
	import mongoose from "mongoose";

// \===========================================  
// User Schema  
// \===========================================  
const userSchema \= new mongoose.Schema(  
    {  
        username: {  
            type: String,  
            required: true,  
            unique: true,  
            trim: true  
        },

        password: {  
            type: String,  
            required: true,  
            trim: true  
        }  
    },  
    {  
        timestamps: true  
    }  
);

// \===========================================  
// Export Model  
// \===========================================  
const User \= mongoose.model("User", userSchema);

export default User;  
…………………………..   
Folder name:   
routes \-\> routes.js 

import express from "express";  
import jwt from "jsonwebtoken";

import User from "../models/User.js";  
import Food from "../models/Food.js";  
import auth from "../middleware/auth.js";

const router \= express.Router();

// \===========================================  
// LOGIN  
// \===========================================  
router.post("/login", async (req, res) \=\> {

    try {

        const { username, password } \= req.body;

        // Validation  
        if (\!username || \!password) {

            return res.status(400).json({  
                success: false,  
                message: "Username and Password are required."  
            });

        }

        // Check User  
        const user \= await User.findOne({  
            username,  
            password  
        });

        if (\!user) {

            return res.status(401).json({  
                success: false,  
                message: "Invalid Username or Password."  
            });

        }

        // Create Session  
        req.session.user \= {  
            id: user.\_id,  
            username: user.username  
        };

        // Generate JWT  
        const token \= jwt.sign(

            {  
                id: user.\_id,  
                username: user.username  
            },

            process.env.JWT\_SECRET,

            {  
                expiresIn: "1h"  
            }

        );

        res.json({

            success: true,  
            message: "Login Successful",

            token

        });

    }  
    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,  
            message: "Server Error"

        });

    }

});

// \===========================================  
// GET ALL FOODS  
// \===========================================  
router.get("/foods", auth, async (req, res) \=\> {

    try {

        const foods \= await Food.find();

        res.json({

            success: true,

            foods

        });

    }  
    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,  
            message: "Unable to Fetch Foods"

        });

    }

});

// \===========================================  
// ORDER FOOD  
// \===========================================  
router.post("/order", auth, async (req, res) \=\> {

    try {

        const { name } \= req.body;

        if (\!name) {

            return res.status(400).json({

                success: false,  
                message: "Food Name is Required"

            });

        }

        // Check Food  
        const food \= await Food.findOne({ name });

        if (\!food) {

            return res.status(404).json({

                success: false,  
                message: "Food Not Found"

            });

        }

        res.json({

            success: true,

            message: "Food Ordered Successfully",

            orderedFood: {

                id: food.\_id,

                name: food.name,

                price: food.price,

                image: food.image

            }

        });

    }  
    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,  
            message: "Unable to Order Food"

        });

    }

});

// \===========================================  
// LOGOUT  
// \===========================================  
router.get("/logout", (req, res) \=\> {

    req.session.destroy(() \=\> {

        res.json({

            success: true,

            message: "Logout Successful"

        });

    });

});

export default router;  
…………………………………….  
Inside backend folder  
.env 

\# \==========================================  
\# Server Configuration  
\# \==========================================  
PORT=5000

\# \==========================================  
\# MongoDB Configuration  
\# \==========================================  
MONGO\_URI=mongodb://127.0.0.1:27017/fooddb

\# \==========================================  
\# JWT Configuration  
\# \==========================================  
JWT\_SECRET=foodsecretkey

\# \==========================================  
\# Express Session  
\# \==========================================  
SESSION\_SECRET=foodorderingsecret

……………………………………………   
Inside backend folder  
server.js  

import express from "express";  
import mongoose from "mongoose";  
import cors from "cors";  
import session from "express-session";  
import dotenv from "dotenv";

import router from "./routes/routes.js";

// \===========================================  
// Load Environment Variables  
// \===========================================  
dotenv.config();

// \===========================================  
// Create Express App  
// \===========================================  
const app \= express();

// \===========================================  
// Middleware  
// \===========================================  
app.use(express.json());

app.use(  
    cors({  
        origin: "http://localhost:5173",  
        credentials: true  
    })  
);

// \===========================================  
// Session Configuration  
// \===========================================  
app.use(  
    session({  
        secret: process.env.SESSION\_SECRET,  
        resave: false,  
        saveUninitialized: false,  
        cookie: {  
            secure: false,  
            maxAge: 1000 \* 60 \* 60 // 1 Hour  
        }  
    })  
);

// \===========================================  
// MongoDB Connection  
// \===========================================  
mongoose  
    .connect(process.env.MONGO\_URI)  
    .then(() \=\> {  
        console.log("✅ MongoDB Connected Successfully");  
    })  
    .catch((error) \=\> {  
        console.log("❌ MongoDB Connection Error");  
        console.log(error.message);  
    });

// \===========================================  
// Default Route  
// \===========================================  
app.get("/", (req, res) \=\> {

    res.send("Food Ordering Backend is Running...");

});

// \===========================================  
// API Routes  
// \===========================================  
app.use("/", router);

// \===========================================  
// Start Server  
// \===========================================  
const PORT \= process.env.PORT || 5000;

app.listen(PORT, () \=\> {

    console.log(\`Server Running on http://localhost:${PORT}\`);

});  
…………………………………………………  
	  
Backend package.json 

{  
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
 "type": "module",  
  "dependencies": {  
    "cors": "^2.8.6",  
    "dotenv": "^17.4.2",  
    "express": "^5.2.1",  
    "express-session": "^1.19.0",  
    "jsonwebtoken": "^9.0.3",  
    "mongoose": "^9.7.3"  
  },  
  "devDependencies": {  
    "nodemon": "^3.1.14"  
  }  
}  
…………………………………

