import axios from "axios";

import API_URL from "./config";
import "./Header.css";

function Header() {

    const handleLogout = async () => {

        try {
            await axios.get(
                `${API_URL}/logout`,
                {
                    withCredentials: true
                }
            );
        } catch (error) {
            console.log(error);
        }

        localStorage.removeItem("token");

        window.location.href = "/";

    };

    return (

        <header className="header">

            <div className="logo">
                🍔 Food Ordering App
            </div>

            <nav className="header-nav">

                <span className="welcome-text">
                    Welcome, Admin
                </span>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </nav>

        </header>

    );

}

export default Header;
