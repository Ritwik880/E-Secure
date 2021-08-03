import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        
        const res = await fetch("https://e-59d73-default-rtdb.firebaseio.com/e-secure.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        });


        if (res) {
            loginUser({

                email: "",
                password: "",

            });
            window.alert("Login Successfull");
            history.push("/Otp");
        }
        else {
            window.alert("Login Unsucessful");
            history.push("/");

        }
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="#">E-Secure</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/otp">Otp</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" to="/login">Login</NavLink>
                            </li>

                        </ul>
                        <form class="d-flex">



                        </form>
                    </div>
                </div>
            </nav>
            <h1 className="heading">Welcome to the secure transaction</h1>
            <div className="container">
                <form method="POST">

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="exampleInputPassword1">Password</label>
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" required className="form-control" id="exampleInputEmail1" />
                    </div>

                    <button type="submit" onClick={loginUser} value="login" className="btn btn-primary">Submit</button>
                </form>
            </div>

            <footer>

                <p>2021 |
                    All rights reserved
                </p>



            </footer>
        </>
    )
}

export default Login
