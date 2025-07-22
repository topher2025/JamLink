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
                    <h3>Username, Contanct Information, and Password</h3>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <input name="username" placeholder="Username" onChange={handleChange} type="text"/>
                        <label htmlFor="email">Email: </label>
                        <input name="email" placeholder="Email" onChange={handleChange} type="email"/>
                        <label htmlFor="password">Password: </label>
                        <input name="password" placeholder="Password" onChange={handleChange} type="password"/>
                        <label htmlFor="re-enter-password">Re-enter Password</label>
                        <input name="re-enter-password" placeholder="Re-enter Password" onChange={handleChange} type="password"/>
                    </div>
                    <div>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="instruments">
                    <h3>Instruments</h3>
                    <div>
                        <p>Select all that apply.</p>
                        <input name="keyboard" onChange={handleChange} type="checkbox"/>
                        <label htmlFor="keyboard">Keyboard</label>
                        <input name="guitar" onChange={handleChange} type="checkbox"/>
                        <label htmlFor="guitar">Guitar</label>
                        <input name="base" onChange={handleChange} type="checkbox"/>
                        <label htmlFor="base">Base guitar</label>
                    </div>
                    <div>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            )}
            
            {step === 3 && (
                <div className="styles">
                    <h3>Sytles</h3>
                    <div>
                        <p>Select all that apply.</p>
                        <input name="jazz" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="jazz">Jazz</lable>
                        <input name="rock" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="rock">Rock</lable>
                        <input name="singer-songwriter" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="singer-songwriter">Singer-Songwriter</lable>
                        <input name="heavy-metal" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="heavy-metal"></lable>
                        <input name="gosple" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="gosple">Gosple</lable>
                        <input name="country" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="country">Country</lable>
                        <input name="classical" onChange={handleChange} type="checkbox"/>
                        <lable htmlFor="classical">Classical</lable>
                    </div>
                    <div>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleNext}>Reveiw</button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className="reveiw">
                    <button onClick={setStep(1)}>Page 1</button>
                    <button onClick={setStep(2)}>Page 2</button>
                    <button onClick={setStep(3)}>Page 3</button>
                    <button type="submit">Create Account</button>
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