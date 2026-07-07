import { useEffect, useState } from "react";
import axios from "axios";

import API_URL from "./config";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./Dashboard.css";

function Dashboard() {

    const [foods, setFoods] = useState([]);

    const [orderedFoods, setOrderedFoods] = useState([]);

    // ===========================================
    // Fetch Foods
    // ===========================================
    useEffect(() => {
        fetchFoods();
    }, []);

    const fetchFoods = async () => {

        const token = localStorage.getItem("token");

        if (!token) {
            window.location.href = "/";
            return;
        }

        try {

            const response = await axios.get(
                `${API_URL}/foods`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                },
            );

            setFoods(response.data.foods);

        } catch (error) {

            console.log(error);

            if (error.response?.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/";
                return;
            }

            alert("Unable to fetch food items.");

        }

    };

    // ===========================================
    // Order Food
    // ===========================================
    const orderFood = async (food) => {

        try {

            const response = await axios.post(
                `${API_URL}/order`,
                {
                    name: food.name,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                    withCredentials: true,
                },
            );

            alert(response.data.message);

            setOrderedFoods((previousOrders) => [
                ...previousOrders,
                response.data.orderedFood,
            ]);

        } catch (error) {

            console.log(error);

            if (error.response?.status === 401) {
                localStorage.removeItem("token");
                window.location.href = "/";
                return;
            }

            alert("Unable to order food.");

        }

    };

    return (

        <>
            <Header />

            <div className="dashboard-container">

                <Sidebar />

                <main className="main-content">

                    <h2 className="section-title">🍽 Available Foods</h2>

                    <div className="food-grid">
                        {foods.map((food) => (
                            <div className="food-card" key={food._id}>
                                <img src={food.image} alt={food.name} />
                                <h3>{food.name}</h3>
                                <p>
                                    <strong>Price :</strong>₹ {food.price}
                                </p>
                                <button onClick={() => orderFood(food)}>Order Food</button>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <h2 className="section-title">🛒 Ordered Foods</h2>

                    {orderedFoods.length === 0 ? (
                        <div className="empty-order">No Food Ordered Yet</div>
                    ) : (
                        <div className="ordered-grid">
                            {orderedFoods.map((food, index) => (
                                <div className="ordered-card" key={index}>
                                    <img src={food.image} alt={food.name} />
                                    <div>
                                        <h3>{food.name}</h3>
                                        <p>
                                            <strong>Price :</strong>₹ {food.price}
                                        </p>
                                        <span>✔ Ordered Successfully</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </main>

            </div>

            <Footer />
        </>

    );

}

export default Dashboard;
