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
                    <h2>Connect. Create. Perform.</h2>
                    <p>Jam with musicians around the World-any genre, any skill level. <br />Build your dream band or join someone else's. <strong>100% free</strong>.</p>
                    <p>Please <a href="/login">log in</a> or <a href="/signup">sign up</a>.</p>
                </>
            )}
        </div>
    )
}