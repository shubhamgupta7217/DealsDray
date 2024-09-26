import React, {useState} from "react";
import Titlebar from "./layout/Titlebar";

const Login = () => {

    const [username, setUsername] = useState("");
    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const [password, setPassword] = useState("");
    const handlePassword = (event) => {
        setPassword("" + event.target.value);
    }

    return (
        <div>
            <Titlebar title="Login"/>
            <form action="" method="post">
                <div>
                    <label htmlFor="userName">UserName: </label>
                    <input type="text" id="username" value={username} onChange={handleUsername} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={password} onChange={handlePassword} />
                </div>
                <button type="submit">login</button>
                <button >signup</button>
            </form>
        </div>
    );
};

export default Login;
