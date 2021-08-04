import React, { useState } from 'react'
import '../style.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import wave from '../image/wave.png';


import undraw_file_searching_duff from '../image/undraw_file_searching_duff.svg';
const Otp = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
   

    // Modal 1
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Modal 2
    const handleC = () => setShow1(false);
    const handleS= () => setShow1(true);
   
    return (
        <>
            <section class="form-section">

                <div class="row">
                    <div class="col-md-6" id="waves">
                        <img class="wave" src={wave} alt="svg" />
                        <div class="img">
                            <img src={undraw_file_searching_duff} alt="svg" />
                        </div>
                    </div>
                    <div class="col-md-6" id="main-content">
                        <img class="mobile" src={undraw_file_searching_duff} alt="svg" />
                        <h2>Choose the method</h2>
                        <p>Please enter the phone number for otp verification (Number which is used at the time of SignUp) Or scan QR code</p>

                        <button onClick={handleShow} type="submit" class="submit-button mx-2">Otp Generate</button>
                        <button onClick={handleS} type="submit" class="submit-button mx-2">Scan Qr</button>
                        <Modal show={show1} onHide={handleC}>
                            <Modal.Header closeButton>
                                <Modal.Title>Enter your Email below</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <button class="submit-button" variant="secondary" onClick={handleC}>
                                    Close
                                </button>
                                <button class="submit-button" variant="primary" onClick={handleC}>
                                    Save Changes
                                </button>
                            </Modal.Footer>
                        </Modal>

                        {!viewOtpForm ? (
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter your number</Modal.Title>
                                </Modal.Header>

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
                                        <button class="submit-button" class="submit-button" variant="secondary" onClick={handleClose}>
                                            Close
                                        </button>
                                        <button class="submit-button" variant="primary" class="submit-button" type="submit" onClick={handleClose}>
                                            Send Otp
                                        </button>
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
                                        <Button variant="secondary" class="submit-button" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" class="submit-button" type="submit" onClick={handleClose}>
                                            Verify OTP
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Modal>
                        )}

                        <div class="footer">
                            Made with <font color="red">♥</font> by <a href="https://github.com/Ritwik880">ritwik </a>
                        </div>
                    </div>

                </div>

            </section >




        </>
    )
}
export default Otp;
