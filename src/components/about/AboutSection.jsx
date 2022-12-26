import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AboutImg } from "./AboutImg";
import './About.css'
import module1 from "../../assets/module1.jpeg";
import module2 from "../../assets/module2.jpeg";
import module3 from "../../assets/module3.jpeg";
import 'animate.css';

import TrackVisibility from 'react-on-screen';

export const AboutSection = () => {

  const projects1 = [
    {
      title: "Module 1",
      description: "",
      imgUrl: module1,
    },
    {
      title: "Module 2",
      description: "",
      imgUrl: module2,
    },
    {
      title: "Module 3",
      description: "",
      imgUrl: module3,
    },

  ];

  const projects2 = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: module1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: module2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: module3,
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Us</h2>
                  <p>Cisco Networking Academy is a global IT and cybersecurity education program that partners with learning institutions around the world to empower all people with career opportunities. It is Cisco’s largest and longest-running Cisco Corporate Social Responsibility program.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <AboutImg
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <AboutImg
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Cisco Networking Academy is a global platform which can be used to inspire students and instructors to make their future</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
