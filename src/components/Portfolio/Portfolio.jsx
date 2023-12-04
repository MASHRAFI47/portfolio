import React, { useEffect, useState } from 'react';

import style from '../../styles/portfolio.module.css';

import { galleryData } from '../galleryData';

import { Col, Container, Row } from 'react-bootstrap';

const Portfolio = () => {

    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(galleryData);
        setCollection([... new Set(galleryData.map((item) => item.title))])
    }, []);


    const galleryFilter = (itemData) => {
        const filterData = galleryData.filter((item) => item.title == itemData);
        setData(filterData)
    }

    return (
        <section className={style.portfolioSection} id='portfolio'>
            <Container>
                <Row>
                    <Col>
                        <div className={style.texts}>
                            <h1 className={style.heading}>My Works</h1>
                        </div>
                        <div className="app">
                            <div className="gallerywrapper">
                                <div className={style.filterItem}>
                                    <ul>
                                        <li><button onClick={() => setData(galleryData)}>All</button></li>
                                        {collection.map((item) => <li><button onClick={() => { galleryFilter(item) }}>{item}</button></li>)}
                                    </ul>
                                </div>
                                <div className={style.galleryContainer}>
                                    {data.map((item) => <div key={item.id} className={style.galleryItem} ><a href={item.visit} target='_blank'><img src={item.image} className={style.itemImage} /></a> <h5 className={style.itemHeading}>{item.heading}</h5> <a href={item.visit} target='_blank' className={style.visit}>(Visit Site)</a> <p className={style.itemParagraph}>{item.paragraph}</p> </div>)}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio