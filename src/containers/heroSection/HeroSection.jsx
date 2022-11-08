import React from 'react';
import './heroSection.css';
import ai from '../../assets/ai.png';

const HeroSection = () => {
  return (
    <div className="cisco__herosection section__padding" id="home">
      <div className="cisco__herosection-content">
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book</p>
      </div>

      <div className='cisco__herosection-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default HeroSection