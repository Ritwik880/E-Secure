import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Otp = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <NavLink class="nav-link" to="/otp">Otp</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="box ">
                <div class="col-md-6">
                    <div class="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>Choose the method</h2>
                        <p>Please enter the phone number for otp verification (Number which is used at the time of SignUp) Or scan QR code.</p>
                        <Button onClick={handleShow} class="btn btn-outline-light mx-2" type="button">Send OTP</Button>
                        {!viewOtpForm ? (
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter your number</Modal.Title>
                                </Modal.Header>
                                {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
                                {/* <input type="number" name="number" autoComplete="off" required className="form-control" id="exampleInputEmail1" aria-describedby="email Help" /> */}
                                <form id="loginForm" onSubmit={loginSubmit}>
                                    <div className="input-field">
                                       
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                            autoComplete="false"
                                        />
                                    </div>


                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit" onClick={handleClose}>
                                            Send Otp
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
                        ) : (
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter your number</Modal.Title>
                                </Modal.Header>
                                {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
                                {/* <input type="number" name="number" autoComplete="off" required className="form-control" id="exampleInputEmail1" aria-describedby="email Help" /> */}
                                <form id="loginForm" onSubmit={otpSubmit}>
                                    <div className="input-field">
                                        <label>Enter otp</label>
                                        <input
                                            type="number"
                                            placeholder="One time password"
                                            name="otp_value"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>


                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit" onClick={handleClose}>
                                            Verify OTP
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
                        )}

                        <a href="/qrcode" class="btn btn-outline-light mx-2" type="button">Scan QR</a>
                    </div>
                </div>
            </div>
            <footer>
                <p >2021 |
                    All rights reserved
                </p>
            </footer>

        </>
    )
}
export default Otp;
