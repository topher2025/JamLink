import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        instruments: [],
        styles: [],
        location: "",
    });
    const navigate = useNavigate();

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

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
        <div>
            <h2>Sign Up</h2>
            {step === 1 && (
                <div className="credentials">
                    <label htmlFor="username"></label>
                    <input name="username" placeholder="Username" onChange={handleChange} type="text"></input>
                    <input name="email" placeholder="Email" onChange={handleChange} type="email"/>
                    <input name="password" placeholder="Password" onChange={handleChange} type="password"/>
                    <input name="re-enter-password" placeholder="Re-enter Password" onChange={handleChange} type="password"/>
                </div>
            )}
            {step === 2 && (
                <div className="instruments">
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input name="username" placeholder="Username" onChange={handleChange} type="text"/>
                <input name="email" placeholder="Email" onChange={handleChange} type="email"/>
                <input name="password" placeholder="Password" onChange={handleChange} type="password"/>
                <input name="re-enter-password" placeholder="Re-enter Password" onChange={handleChange} type="password"/>
                <input name="instruments" placeholder="Instruments" onChange={handleChange} />
                <input name="styles" placeholder="Styles" onChange={handleChange} />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}