import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const[username, setUsername] = useState("");
    const[password, setPassword]= useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ username, password}),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.user.username)
            navigate("/")
        } else {
            alert(data.non_field_errors || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
            <button type="submit">Login</button>
        </form>
    )
}