import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import FooterHeart from "../footerHeart/FooterHeart";

const events = [
  {
    date: "2023-03-01",
    title: "Registration Starts",
    description: "Join us for our upcoming event",
    image: 'https://img.icons8.com/fluency/1x/edit-user-male.png',
    button: {
      text: "Register Here",
      link: '/registrationform'
    }
  },
  {
    date: "2023-03-04",
    title: "Registration Ends",
    description: "Come participate and win",
    image: 'https://img.icons8.com/fluency/1x/edit-user-male.png',
  },
  {
    date: "2023-03-05",
    title: "Day 1 Of Event",
    description: "coding hunt",
    image: 'https://img.icons8.com/fluency/1x/edit-user-male.png',
  },
];

const Timeline = () => {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <div className="container">
      <div className="timeline-heading text-center">
        Event Timeline
      </div>
      <VerticalTimeline>
        {events.map((event, index) => {
          const isCurrent = event.date === today;
          const button = event.button && (
            <a href={event.button.link} className="vertical-timeline-element-button">
              {event.button.text}
            </a>
          );
          return (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element ${isCurrent ? 'current-date' : ''}`}
              date={event.date}
              dateClassName="vertical-timeline-element-date"
              iconStyle={{ background: '#f5f5f5', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}
              icon={<img src={event.image} alt={event.title} />}
            >
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <p className="vertical-timeline-element-description">{event.description}</p>
              {index === 0 && button}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <FooterHeart />
    </div>
  );
};

export default Timeline;
