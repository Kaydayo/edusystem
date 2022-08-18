import React from 'react'
import Button from '../components/Button'
import Video from '../components/Video'
import heroStyles from '../styles/Hero.module.css'


const Hero = () => {
  return (
      <div className={heroStyles.homeHero}>
          <div className={heroStyles.heroContent}>
               <div className={heroStyles.leftContent}>
              <h1>
                  Interactive Learning Platform for
                  Culture-Aligned Teams
              </h1>
              <p>
                  OnCulture helps organizations educate employees
                  on healthy workplace practices while uniting
                  teams, even across different locations.
              </p>
              <div>
                  <Button>
                  Book a Demo
              </Button>
              </div>
          </div>
          <div>
              <Video/>
          </div>
         </div>
    </div>
  )
}

export default Hero