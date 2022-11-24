import React from 'react';
import './insights.css';
import CountUp from 'react-countup';


const Insights = () => {
  return (
    <div id="projectFacts" className="sectionclassName">
      <div className="fullWidth eight columns">
        <div className="projectFactsWrap ">
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="12" style={{ visibility: 'visible' }}>
            <i className="fa fa-briefcase"></i>
            <p>Projects done</p>
            <p className='number'><CountUp end={50} duration={5} /></p>


          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="55" style={{ visibility: 'visible' }}>
            <i className="fas fa-user-graduate"></i>
            <p>Course Enrollment</p>
            <p className='number'><CountUp end={300} duration={5} /></p>


          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="359" style={{ visibility: 'visible' }}>
            <i className="fas fa-award"></i>
            <p>No. Of events</p>
            <p className='number'><CountUp end={400} duration={5} /></p>


          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="359" style={{ visibility: 'visible' }}>
            <i className="fas fa-book-open"></i>
            <p>No. of Courses</p>
            <p className='cooun'><CountUp end={359} duration={5} /></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights