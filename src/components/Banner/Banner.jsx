import React, { useCallback } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//react ts-particles
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

//react simple typewriter
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

//style
import style from '../../styles/banner.module.css'
//images
import bannerpic from '../../images/bannermash.png';
import javascript from '../../images/js.png'
import php from '../../images/php.png'
import wordpress from '../../images/wordpress.png'
import reactimage from '../../images/react.png'

const Banner = () => {
    const [typeEffect] = useTypewriter({
        words: ['Full Stack Web Developer', 'Wordpress Expert', 'Web Designer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className={style.bannerSection}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        // color: {
                        //     value: "#0d47a1",
                        // },
                    },
                    fullScreen : {
                        enable: false,
                        position: 'relative',
                        zIndex: -1
                    },
                    style: {
                        position: 'absolute',
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false, 
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Container>
                <Row>
                    <Col md={6} className={style.middle}>
                        <div className={style.bannerTexts}>
                            <h5 className={style.colorfulText}>Hi, I'm</h5>
                            <h1 className={style.myName}>Mashrafi Bin Nur</h1>
                            <p className={style.typeWriterText}>I'm a <span style={{color:'#fff'}}>{typeEffect}</span></p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={style.center}>
                            <img src={bannerpic} alt="" className={`img-fluid + ${style.animate}`} width={'500px'} />
                        </div>

                        {/* bubbling images */}
                        <div className={style.js}>
                            <img src={javascript} alt="" />
                        </div>
                        <div className={style.php}>
                            <img src={php} alt="" />
                        </div>
                        <div className={style.wordpress}>
                            <img src={wordpress} alt="" />
                        </div>
                        <div className={style.react}>
                            <img src={reactimage} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner