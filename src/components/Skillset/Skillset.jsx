import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

//style
import style from '../../styles/skillset.module.css'

//icons
import html5 from '../../images/html-5.png'
import css3 from '../../images/css-3.png'
import bootstrap from '../../images/bootstrap.png'
import js from '../../images/js-1.png'
import react from '../../images/react.png'
import php from '../../images/php.png'
import mysql from '../../images/mysql.png'
import wordpress from '../../images/wordpress.png'

const Skillset = () => {
    return (
        <section className={style.skillsetSection}>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1 className={style.sectionName}>My Current Skillsets</h1>
                            <p style={{color:'#7a7a7a'}}>I am constantly trying to improve. Learning new skills daily and motivating myself to do something more.</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={html5} alt="" />
                            <p className={style.iconPara}>95%</p>
                        </div>
                       <p className={style.iconName}>HTML5</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={css3} alt="" />
                            <p className={style.iconPara}>87%</p>
                        </div>
                        <p className={style.iconName}>CSS3</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={bootstrap} alt="" />
                            <p className={style.iconPara}>90%</p>
                        </div>
                        <p className={style.iconName}>Bootstrap</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={js} alt="" />
                            <p className={style.iconPara}>73%</p>
                        </div>
                        <p className={style.iconName}>Javascript</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={react} alt="" />
                            <p className={style.iconPara}>85%</p>
                        </div>
                        <p className={style.iconName}>React</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={php} alt="" />
                            <p className={style.iconPara}>76%</p>
                        </div>
                        <p className={style.iconName}>PHP</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={mysql} alt="" />
                            <p className={style.iconPara}>74%</p>
                        </div>
                        <p className={style.iconName}>MySQL</p>
                    </Col>
                    <Col>
                        <div className={style.cardIcon}>
                            <img src={wordpress} alt="" />
                            <p className={style.iconPara}>90%</p>
                        </div>
                        <p className={style.iconName}>Wordpress</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skillset