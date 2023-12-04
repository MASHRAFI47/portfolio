import React from 'react'
import Banner from '../components/Banner/Banner'
import AboutMe from '../components/About/AboutMe'
import Services from '../components/Services/Services'
import Skillset from '../components/Skillset/Skillset'
import Contactme from '../components/Contact/Contactme'
import Portfolio from '../components/Portfolio/Portfolio'
import Copyright from '../components/Footer/Copyright'

const Home = () => {
  return (
    <section>
       <Banner />
       <AboutMe />
       <Skillset />
       <Services />
       <Portfolio />
       <Contactme />
       <Copyright />
    </section>
  )
}

export default Home