import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import style from '../../styles/servicecard.module.css'

//images
import code from '../../images/code.png'
import webDesign from '../../images/web-design.png'
import responsiveness from '../../images/web.png'
import wordpress from '../../images/wordpressicon.png'

const ServiceCard = () => {
    return (
        <div className={style.serviceCard}>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className={style.flipCard}>
                            <div className={style.flipCardInner}>
                                <div className={style.flipCardFront}>
                                    <div className={style.center}>
                                        <div>
                                            <img src={code} alt="" className={style.image}/>
                                        </div>
                                        <div>
                                            <h3>PSD to HTML</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.flipCardBack}>
                                    <p className={style.para}>I will Design Your Website accrording to your provided PSD.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={style.flipCard}>
                            <div className={style.flipCardInner}>
                                <div className={style.flipCardFront}>
                                    <div className={style.center}>
                                        <div>
                                            <img src={webDesign} alt="" className={style.image}/>
                                        </div>
                                        <div>
                                            <h3>Web Design</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.flipCardBack}>
                                    <p className={style.para}>I will design visually captivating interfaces that not only catch the eye but also communicate your brand's essence. Every pixel thoughtfully placed to evoke emotion and drive interaction.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={style.flipCard}>
                            <div className={style.flipCardInner}>
                                <div className={style.flipCardFront}>
                                    <div className={style.center}>
                                        <div>
                                            <img src={responsiveness} alt="" className={style.image}/>
                                        </div>
                                        <div>
                                            <h3>Responsive Web</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.flipCardBack}>
                                    <p className={style.para}>I will design responsive and accessible layouts, ensuring your website looks stunning across all devices and is inclusive to all users. Your content will adapt effortlessly to provide an optimal viewing experience.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={style.flipCard}>
                            <div className={style.flipCardInner}>
                                <div className={style.flipCardFront}>
                                    <div className={style.center}>
                                        <div>
                                            <img src={wordpress} alt="" className={style.image}/>
                                        </div>
                                        <div>
                                            <h3>Wordpress Web</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.flipCardBack}>
                                    <p className={style.para}>As a seasoned WordPress specialist, I bring a wealth of experience in crafting dynamic and tailored solutions on the world's leading content management system.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServiceCard