import React from "react";
import TeamSection from "../../components/team/TeamSection";
import "./TeamCard.css";
import Carousel from 'react-elastic-carousel';
import 'react-multi-carousel/lib/styles.css';


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

const TeamCard = () => {
    return (
        <section className="team-section gradient__bg" id="team">

            {/* Co-ordinators Section */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-4 pt-5">Co-ordinators</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                </div>

            </div>

            {/* TY-Committe Section*/}

            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">TY-Committee</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-line"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    </div>
                </div>

            </div>

            {/* SY-Committee Section */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">SY-Committee</h2>
                <div className="divider-custom">
                    <h2 className="divider-custom-line line-secondary"></h2>

                    <div className="divider-custom-line"></div>
                </div>

                <Carousel enableAutoPlay breakPoints={breakPoints}>

                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y=" />

                </Carousel>

            </div>
            <div class="text-center p-3">
               @Cisco Team.  ©All rights reserved.
            </div>
        </section>
    );
};

export default TeamCard;


