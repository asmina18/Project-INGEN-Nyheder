import { ContentSection } from "../components/ContentSection/ContentSection"
import { Login } from "../components/Login/Login"

import React, { useState } from 'react';



export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Реализуйте логику входа здесь
    };

    return (
        <>

            <div>
                <h2>Login</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>


        </>
    );
}










export default LoginPage;
