import React from 'react';

import style from '../../styles/copyright.module.css'
import { Col, Container, Row } from 'react-bootstrap';


//react icons
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa6";

const currentYear = new Date().getFullYear

const Copyright = () => {
    return (
        <section className={style.copyrightSection}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <p className={style.paragraph}>Copyright &copy; {currentYear} - All rights reserved</p>
                    </Col>
                    <Col sm={6}>
                        <div className={style.icons}>
                            <a href="https://www.facebook.com/mashrafi.binnur" target='_blank'><FaFacebook className={style.icon}/></a>
                            <a href="https://www.instagram.com/mash_garrixer/" target='_blank'><FaInstagram className={style.icon}/></a>
                            <a href="mailto:mbngms@gmail.com"><FaEnvelope className={style.icon}/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Copyright