import React from 'react'
import Button from '../components/Button'
import heroStyles from '../styles/Hero.module.css'


const Hero = () => {
  return (
      <div className={heroStyles.homeHero}>
          <div>
              <h1>
                  Interactive Learning Platform for
                  culture aligned teams
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
              

          </div>
          
    </div>
  )
}

export default Hero