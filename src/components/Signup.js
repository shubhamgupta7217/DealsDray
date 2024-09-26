import React, { useState } from "react";
// import Navbar from './layout/Navbar';
import Titlebar from "./layout/Titlebar";

const Signup = () => {
    const [name, setName] = useState("");
    const handleName = (event) => {
        setName(event.target.value);
    }

    const [username, setUsername] = useState("");
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const [password, setPassword] = useState("");
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const [confirmPassowrd, setConfirmPassword] = useState("");
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }


    return (
        <div>
            {/* <Navbar /> */}
            <Titlebar title="Signup" />
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleName}
                />
            </div>
            <div>
                <label htmlFor="username">UserName: </label>
                <input type="text" id="username" value={username} onChange={handleUsername} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={handlePassword} />
            </div>
            <div>
                <label htmlFor="confirmPassowrd">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassowrd} onChange={handleConfirmPassword} />
            </div>
            <button type="submit">Signup</button>
        </div>
    );
};

export default Signup;
