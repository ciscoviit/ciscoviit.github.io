import React from 'react';
import './insights.css';

const Insights = () => {
  return (
    <div id="projectFacts" className="sectionclassName">
      <div className="fullWidth eight columns">
        <div className="projectFactsWrap ">
          <div className="item wow fadeInUpBig animated animated bg-transparent" data-number="12" style={{visibility : 'visible'}}>
            <i className="fa fa-briefcase"></i>
            <p id="number1" className="number">12</p>
            <span></span>
            <p>Projects done</p>
          </div>
          <div className="item wow fadeInUpBig animated animated bg-transparent" data-number="55" style={{visibility : 'visible'}}>
            <i className="fas fa-user-graduate"></i>
            <p id="number2" className="number">55</p>
            <span></span>
            <p>Course Enrollment</p>
          </div>
          <div className="item wow fadeInUpBig animated animated bg-transparent" data-number="359" style={{visibility : 'visible'}}>
            <i className="	fas fa-award"></i>
            <p id="number3" className="number">359</p>
            <span></span>
            <p>No. Of events</p>
          </div>
          <div className="item wow fadeInUpBig animated animated bg-transparent" data-number="359" style={{visibility : 'visible'}}>
            <i className="fas fa-book-open"></i>
            <p id="number3" className="number">359</p>
            <span></span>
            <p>No. of Courses</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights