import React from 'react';

import Lottie from "lottie-react";
import animationData from '../../assets/about-me-animation.json'

//style
import style from '../../styles/aboutme.module.css'
import { Col, Container, Row } from 'react-bootstrap'


const AboutMe = () => {
  return (
    <section className={style.aboutSection} id='about'>
      <Container>
        <Row>
          <Col md={6}>
            <div className={style.image} data-aos="fade-in">
              <Lottie animationData={animationData} className={style.imageWidth} />
            </div>
          </Col>
          <Col md={6} className={style.middle}>
            <div className={style.texts}>
              <h1 className={style.aboutMe}>About Me</h1>
              <p className={style.para}>Hello, I'm Mashrafi Bin Nur, a passionate web developer dedicated to crafting immersive digital experiences. I have 2 years experience on this field. I can build fully responsive functional websites for you. I believe in the beauty of simplicity and the impact of functionality, ensuring that every project I undertake is not just visually striking but also highly functional and user-friendly. The dynamic nature of technology inspires me to constantly expand my skill set.</p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default AboutMe