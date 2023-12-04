import React from 'react'

//style
import style from '../../styles/services.module.css'
import ServiceCard from './ServiceCard'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className={style.servicesSection} id='services'>
      <Container>
        <Row>
          <Col>
            <h1 className={style.sectionName}>Services</h1>
          </Col>
        </Row>
      </Container>
      <ServiceCard />
    </section>
  )
}

export default Services