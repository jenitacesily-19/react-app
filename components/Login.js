import { useState } from 'react';
const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = ((e) => {
        e.preventDefault();
    });
    return (
        <div className="container">
            <h1>Login Form</h1>
            <div className="login">
                <legend>User Name</legend>
                <input type="text"
                    placeholder="Enter a your user name"
                    value={user}
                    onChange={(e) => {
                        setUser(e.target.value)
                    }}
                    required
                />
                <legend>Password</legend>
                <input type="text"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;
