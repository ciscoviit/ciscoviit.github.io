import React from 'react';
import './insights.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Insights = () => {
  return (
    <div id="projectFacts" className="sectionclassName">
      <div className="fullWidth eight columns">
        <div className="projectFactsWrap ">
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="12" style={{ visibility: 'visible' }}>
            <i className="fa fa-briefcase"></i>
            <p>Projects done</p>
            <p className='number'><CountUp end={3} duration={2}>{({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}</CountUp></p>

          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="55" style={{ visibility: 'visible' }}>
            <i className="fas fa-user-graduate"></i>
            <p>Course Enrollment</p>
            <p className='number'><CountUp end={50} duration={3}>{({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}</CountUp></p>

          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="359" style={{ visibility: 'visible' }}>
            <i className="fas fa-award"></i>
            <p>No. Of events</p>
            <p className='number'><CountUp end={10} duration={5}>{({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}</CountUp></p>

          </div>
          <div className="item wow fadeInUpBig animated bg-transparent" data-number="359" style={{ visibility: 'visible' }}>
            <i className="fas fa-book-open"></i>
            <p>No. of Courses</p>
            <p className='number'><CountUp end={30} duration={5}>{({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}</CountUp></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights