import React from 'react';
import LogInForm from './LogInForm';
import Onboarding from './Onboarding';
import OnboardingFooter from './OnboardingFooter';

const Home = ()=>{
  return(
    <div>
      <Onboarding />
      <LogInForm />
      <OnboardingFooter />
    </div>
  )
}

export default Home;
