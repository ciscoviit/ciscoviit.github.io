import { configure } from '@testing-library/react';
import React from 'react'
import './About.css';
//import { Navbar } from './components';
import ai from '../../assets/ai.png';
//import CIscoLogo from './assets/CIscoLogo.jpg';
const AboutSection = () => {

  return (
    <>
      
      <div className='section' >
        <div className='container text-light'>
          <div className='outer'>
            <div className="heading text-center mt-5">
              <h1>About us</h1>
              <p>Excellent in the field of Networing</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="profile h-100">
                <img src={ai} alt="ai" className='profile-img' />
                  <div className="profile-content  text-center text-light">
                    <h4 className='px-5'>Cisco Networing Academy</h4>
                    <div className="card-body mt-3 px-3">
                      {/* <h4 className='card-title'>Mission</h4> */}
                      <p className="card-text mt-2">We will, together with our education ,instructor, training and employement partners we have made a commitment to developing the workforce of the future. Join us as we change the world.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12" >
                <div className="card-body ">
                  <h4 className='card-title'> What we do??</h4>

                  <p className="card-text">Launch Cisco Modules : outside the cost of modules are high but we here provide in fewer rate. Also when go for cisco , you'll filter out from the students because you've done
certification from them itself.Conduct technical sessions.Arrange workshops.</p>

                </div>
                <div className="card-body mt-3">
                  <h4 className='card-title mt-2'> Mission</h4>
                  <p className="card-text">To provide quality educational training designed to meet the current and future needs of the information technology.</p>
                </div>
                <div className="card-body mt-3">
                  <h4 className='card-title mt-2'> Aim</h4>
                  <p className="card-text">Cisco provides free training to thousands through its Cisco Networking Academy Program.To get maximum benefits from NetAcad to students, we have a committee for Cisco Networking Academy.</p>
                </div>
                <div className="card-body mt-3">
                  <h4 className='card-title mt-2'> History</h4>
                  <p className="card-text">As you all are aware that VIIT has signed MoU with CISCO under that we had established Cisco Networking Academy. 
Cisco NetAcad has 2 certified instructors from CISCO. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
