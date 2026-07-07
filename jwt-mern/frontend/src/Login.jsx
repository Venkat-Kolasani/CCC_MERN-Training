import { useState } from "react";
import axios from "axios";

import API_URL from "./config";
import "./Login.css";

function Login() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((previousUser) => ({
            ...previousUser,
            [name]: value
        }));
    };

    const handleLogin = async (event) => {

        event.preventDefault();

        setError("");

        if (!user.username || !user.password) {
            setError("Please enter Username and Password.");
            return;
        }

        try {

            const response = await axios.post(
                `${API_URL}/login`,
                user,
                {
                    withCredentials: true
                }
            );

            console.log("Login Response:", response.data);

            localStorage.setItem("token", response.data.token);

            window.location.href = "/dashboard";

        } catch (error) {

            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("Unable to connect to the server.");
            }

        }

    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>🍔 Food Ordering App</h1>

                <h2>Login</h2>

                {
                    error &&
                    <p className="error-message">
                        {error}
                    </p>
                }

                <form onSubmit={handleLogin}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={user.username}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={user.password}
                        onChange={handleChange}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="demo-box">

                    <h3>Demo Login</h3>

                    <p>
                        <strong>Username:</strong> admin
                    </p>

                    <p>
                        <strong>Password:</strong> admin123
                    </p>

                </div>

            </div>

        </div>

    );

}

export default Login;
