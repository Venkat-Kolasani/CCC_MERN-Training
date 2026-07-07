import "./Sidebar.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <h2 className="sidebar-title">
                📋 Menu
            </h2>

            <ul className="sidebar-menu">

                <li className="active">
                    🍽 Food Ordering
                </li>

                <li>
                    🛒 My Orders
                </li>

                <li>
                    👤 Profile
                </li>

                <li>
                    ℹ About
                </li>

            </ul>

            <div className="sidebar-info">

                <h3>Mini MERN Project</h3>

                <p>
                    This project demonstrates:
                </p>

                <ul>
                    <li>✅ JWT Authentication</li>
                    <li>✅ Express Session</li>
                    <li>✅ MongoDB Compass</li>
                    <li>✅ React + Express</li>
                    <li>✅ Food Ordering</li>
                </ul>

            </div>

        </aside>

    );

}

export default Sidebar;
