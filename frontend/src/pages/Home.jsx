import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    const handelLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div>
            {token ? (
                <>
                    <h1>Welcome, {username}!</h1>
                </>
            ) : (
                <>
                    <h1>Welcome to JamLink!</h1>
                    <p>Please <a href="/login">log in</a> or <a href="/signup">sign up</a>.</p>
                </>
            )}
        </div>
    )
}