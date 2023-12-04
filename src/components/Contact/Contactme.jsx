import React, { useRef } from 'react';

import style from '../../styles/contactme.module.css'
import { Col, Container, Row } from 'react-bootstrap';

//React Icons
import { FaSquarePhone, FaEnvelope, FaSquareWhatsapp } from "react-icons/fa6";

//react bootstrap form
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//React toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//emailJs
import emailjs from '@emailjs/browser';


//images
import wave from '../../images/wave.png'

const Contactme = () => {
    const notify = () => {
        const firstNameInput = document.getElementById('validationCustom01').value;
        const lastNameInput = document.getElementById('validationCustom02').value;
        const emailInput = document.getElementById('exampleForm.ControlInput1').value;
        const messageInput = document.getElementById('exampleForm.ControlTextarea1').value;

        if(firstNameInput.trim() === '' || lastNameInput.trim() === '' || emailInput.trim() === '' || messageInput.trim() === '') {
            toast("Please provide all the details");
        }
        else {
            toast("Form Submitted");
        }
    }

    const [validated, setValidated] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formData = e.currentTarget;
        if (formData.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);

        emailjs.sendForm('service_zavfifh', 'template_js684cm', form.current, 'lHftZMgJMyXU_oVt4')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };




    return (
        <section className={style.contactMeSection} id='contact'>
            <Container>
                <Row>
                    <Col md={5} className={style.middle}>
                        <div className={style.contactInfo}>
                            <div className={style.contactTop}>
                                <h3 className={style.heading}>Contact Info</h3>
                                <p className={style.para}>Regarding custom proposal,Please feel free to contact me. Thanks For Visiting, Hoping that you will have a Great Day.</p>
                            </div>
                            <div className={style.icons}>
                                <div className={style.iconBox}>
                                    <a href="tel:+8801910467562"><FaSquarePhone className={style.icon} /></a>
                                </div>
                                <div className={style.iconInfo}>
                                    <p>Call me now</p>
                                    <p>+880 1910467562</p>
                                </div>
                            </div>

                            <div className={style.icons}>
                                <div className={style.iconBox}>
                                    <a href="mailto:mbngms@gmail.com"><FaEnvelope className={style.icon} /></a>
                                </div>
                                <div className={style.iconInfo}>
                                    <p>Chat with me</p>
                                    <p>mbngms@gmail.com</p>
                                </div>
                            </div>

                            <div className={style.icons}>
                                <div className={style.iconBox}>
                                    <FaSquareWhatsapp className={style.icon} />
                                </div>
                                <div className={style.iconInfo}>
                                    <p>Whatsapp</p>
                                    <p>Send a message-01910467562</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={style.contactForm}>
                            <div className={style.justSay}>
                                <h3>Just say <img src={wave} alt="" className={style.image} /> hi</h3>
                                <p className={style.para}>Hoping that you will have a Great Day. Waiting for your message.</p>
                            </div>
                            <Form noValidate ref={form} validated={validated} onSubmit={sendEmail}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="user_name"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" required name="user_email" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Write a message</Form.Label>
                                    <Form.Control as="textarea" rows={5} name="message" />
                                </Form.Group>
                                <Button type="submit" className='btn btn-danger' value="Send" onClick={notify}>Submit</Button>
                                <ToastContainer />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contactme