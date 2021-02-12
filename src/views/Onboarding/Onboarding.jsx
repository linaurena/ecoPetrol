import React from 'react';
import { Link } from 'react-router-dom';
import Row from './icons/row.svg';
import Style from './Onboarding.module.css'

const Onboarding = ()=>{
  return(
    <div className={`${Style.onboardingContainer}`} id='section1'>
      <div className={`${Style.infoContainer}`}>
        <h1 className={`${Style.title}`}>Bachilleres EcoPetrol</h1>
        <p className={`${Style.description}`}>Conecta con  estudiantes activos, egresados del programa y comparte tus logros.</p>
      </div>
      <div className={`${Style.onboardingBottom}`}>
        <Link className={`${Style.rowBox}`}><img className={`${Style.row}`} src={Row} alt="Row to go down"/></Link>
      </div>
    </div>
  )
}

export default Onboarding;
