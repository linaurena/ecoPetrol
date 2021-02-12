import React from 'react';
import LogoEcopetrol from './icons/logo-ecopetrol.png'
import Style from './OnboardingFooter.module.css'

const OnboardingFooter = ()=>{
  return(
    <div className={`${Style.footerContainer}`} id='section1'>
      <img className={`${Style.footerImage}`} src={LogoEcopetrol} alt="Logo"/>
    </div>
  )
}

export default OnboardingFooter;
