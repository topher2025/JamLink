import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({ username: "", email: "", password: "", instruments: "", styles: ""});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json()

        if (res.ok) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.user.username);
            navigate("/login")
        } else {
            alert("Signup failed")
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" placeholder="Password" onChange={handleChange} />
            <input name="re-enter-password" placeholder="Re-enter Password" onChange={handleChange} />
            <input name="instruments" placeholder="Instruments" onChange={handleChange} />
            <input name="styles" placeholder="Styles" onChange={handleChange} />
        </form>
    );
}