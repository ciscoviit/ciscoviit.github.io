import React from "react";
import TeamSection from "../../components/team/TeamSection";
import "../../components/team/TeamSection.css";
import "./TeamCard.css";
import Carousel from 'react-elastic-carousel';
import 'react-multi-carousel/lib/styles.css';


const breakPoints=[
    {width:1,itemsToShow:1,itemsToScroll:1},
    {width:550,itemsToShow:2,itemsToScroll:2},
    {width:768,itemsToShow:3,itemsToScroll:3},
];


const TeamCard = ()=>{
    return(
        <section className="team-section" id="team">

            {/* Co-ordinators Section */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">Co-ordinators</h2>
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
                    <TeamSection image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Vikas Kolekar" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                </div>

            </div>

            {/* TY-Committe Section*/}

            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">TY-Committee</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>}image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Shreyas Gavhalkar" domain="President" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>}image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Sachi Teke" domain="Vice-President" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>}image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Pratik Rathod" domain="Publicity-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>} image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Tejaswini Bahir" domain="IR-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>} image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Saikumar Padmawar" domain="Technical-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>} image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Shrutika Wagh" domain="Publicity-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>} image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Vishnu Jadhav" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>} image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Sayali Sontakke" domain="Design-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <TeamSection Tag={<i target="_blank" className="fas fa-code" aria-hidden="true"></i>} image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nikhilesh Sharma" domain="Department-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    </div>
                </div>
                    <Carousel  breakPoints={breakPoints}>

                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Samruddhi Nande" domain="Jt.Technical-Head"  linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Yash Akotkar" domain="Jt.Design-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Siddharth Latthe" domain="Content Writing-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Rahul Talele" domain="Administration-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Vinayak Pawar" domain="Administration-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Shravani Murabatte" domain="Activity Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Shubham Wamanacharya" domain="Activity Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Amey Agarwal" domain="Documentation-Head"  linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Lokesh Shingvi" domain="IR-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Gaurav Kanade" domain="Department-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Rithesh Lade" domain="Department-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Armaan Shaikh" domain="Department-Head" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                        
                    </Carousel>
                
            </div>

            {/* SY-Committee Section */}
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary ">SY-Committee</h2>
                

                <Carousel enableAutoPlay breakPoints={breakPoints}>

                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor"  linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor"  linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor"  linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor"  linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" />
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    <TeamSection className="cardcarousel" image="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" sname="Nitin Sakhare" domain="professor" github="https://github.com/tejaswinibahir-01" linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210/" instagram="https://instagram.com/tej_b01?igshid=YmMyMTA2M2Y="/>
                    
                </Carousel>

            </div>
            

        </section>
    );
};

export default TeamCard;


