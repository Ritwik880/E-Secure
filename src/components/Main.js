import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css';
const Main = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="#">Welcome</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                </div>
            </nav>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Hello User!</h1>
                    <p className="para col-md-8 fs-4">We are so glad that you have completed all the steps for verification, Now feel free to use this website</p>
                    <button className="btn btn-primary btn-lg" type="button">Explore</button>
                    <a className="btn btn-primary btn-lg mx-2" href="/main" type="button">Go Back</a>
                </div>
            </div>

            <footer>

                <p>2021 |
                    All rights reserved
                </p>



            </footer>
        </>
    )
}

export default Main
