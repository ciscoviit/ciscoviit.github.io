import React from "react";
import TeamSection from "../../components/team/TeamSection";
import "../../components/team/TeamSection.css";
import "./TeamCard.css";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import FooterHeart from "../footerHeart/FooterHeart";
// Importing Images
// Faculty Co-ordinators
import Nitin_Sakhare from "../../assets/TeamDocuments/Nitin_Sakhare.jpg";
import Vikas_Kolekar from "../../assets/TeamDocuments/Vikas_Kolekar.jpg";
// Advisory Board
import Saikumar_Padmawar from "../../assets/TeamDocuments/Saikumar_Padmawar.jpg";
import Vinayak_Pawar from "../../assets/TeamDocuments/Vinayak_Pawar.jpg";
// TY Committee
import Akash_Kalshetti from "../../assets/TeamDocuments/Akash_Kalshetti.jpg";
import Sumedh_kulkarni from "../../assets/TeamDocuments/Sumedh_kulkarni.jpg";
import Sanchit_Dhale from "../../assets/TeamDocuments/Sanchit_Dhale.jpg";
import Mayur_Tingare from "../../assets/TeamDocuments/Mayur_Tingare.jpg";
import Hrishikesh_Mahajan from "../../assets/TeamDocuments/Hrishikesh_Mahajan.jpg";
import Amol_Golhar from "../../assets/TeamDocuments/Amol_Golhar.jpg";
import Nikita_Sanap from "../../assets/TeamDocuments/Nikita_Sanap.jpg";
import Rahul_Shelke from "../../assets/TeamDocuments/Rahul_Shelke.jpg";
import Khushi_Asodekar from "../..//assets/TeamDocuments/Khushi_Asodekar.jpg";
import Shruti_Ghodake from "../../assets/TeamDocuments/Shruti_Ghodake.jpg";
import Sahil_Wagh from "../../assets/TeamDocuments/Sahil_Wagh.jpg";
import Deepak_Ghume from "../../assets/TeamDocuments/Deepak_Ghume.jpg";
import Rajan_Sudan from "../../assets/TeamDocuments/Rajan_Sudan.jpg";
import Devyani_Dahake from "../../assets/TeamDocuments/Devyani_Dahake.jpg";
import Smit_Ramteke from "../../assets/TeamDocuments/Smit_Ramteke.jpg";
import Vedant_Devre from "../../assets/TeamDocuments/Vedant_Devre.jpg";
import Viraj_Badale from "../../assets/TeamDocuments/Viraj_Badale.jpg";
import Ashish_Ruke from "../../assets/TeamDocuments/Ashish_Ruke.jpg";
// SY Committee
import Abhijeet_Shinde from "../../assets/TeamDocuments/Abhijeet_Shinde.jpeg";
import Aditya_Uragudwar from "../../assets/TeamDocuments/Aditya_Uragudwar.jpg";
import Aishwarya_Meshram from "../../assets/TeamDocuments/Aishwarya_Meshram.jpg";
import Arya_Patil from "../../assets/TeamDocuments/Arya_Patil.jpg";
import Ayush_Rathod from "../../assets/TeamDocuments/Ayush_Rathod.jpg";
import Jaydip_Mane from "../../assets/TeamDocuments/Jaydip_Mane.png";
import Kshitija_Deshmukh from "../../assets/TeamDocuments/Kshitija_Deshmukh.jpg";
import Pranav_Hore from "../../assets/TeamDocuments/Pranav_Hore.jpg";
import Pratham_Katariya from "../../assets/TeamDocuments/Pratham_Katariya.jpg";
import Rijul_Pimpale from "../../assets/TeamDocuments/Rijul_Pimpale.jpg";
import Robin_Patel from "../../assets/TeamDocuments/Robin_Patel.jpg";
import Rucha_Patil from "../../assets/TeamDocuments/Rucha_Patil.jpeg";
// import Sahil_Khilar from "../../assets/TeamDocuments/Sahil_Khilar.jpeg";
import Sakshi_Amate from "../../assets/TeamDocuments/Sakshi_Amate.jpg";
import Sakshi_Hedke from "../../assets/TeamDocuments/Sakshi_Hedke.jpg";
import Sakshi_Nagmode from "../../assets/TeamDocuments/Sakshi_Nagmode.jpg";
import Shravani_Ghorpade from "../../assets/TeamDocuments/Shravani_Ghorpade.jpg";
import Shreyanshi_Meshram from "../../assets/TeamDocuments/Shreyanshi_Meshram.jpg";
import Shreyas_Borade from "../../assets/TeamDocuments/Shreyas_Borade.jpg";
import Srivatsa_Ankamwar from "../../assets/TeamDocuments/Srivatsa_Ankamwar.jpg";
import Vaishnavi_Shinde from "../../assets/TeamDocuments/Vaishnavi_Shinde.jpg";
import Varad_Bodhade from "../../assets/TeamDocuments/Varad_Bodhade.jpg";
import Vedashri_Patil from "../../assets/TeamDocuments/Vedashri_Patil.jpg";
// import Zeeshan_Parvez from "../../assets/TeamDocuments/Zeeshan_Parvez.jpg";
// Previous Year Committees
// import Shreyas_Gavhalkar from "../../assets/TeamDocuments/Shreyas_Gavhalkar.jpg";
// import Sachi_Teke from "../../assets/TeamDocuments/Sachi_Teke.jpg";
// import Pratik_Rathod from "../../assets/TeamDocuments/Pratik_Rathod.jpg";
// import Tejaswini_Bahir from "../../assets/TeamDocuments/Tejaswini_Bahir.jpg";
// import Shrutika_Wagh from "../../assets/TeamDocuments/Shrutika_Wagh.jpg";
// import Vishnu_Jadhav from "../../assets/TeamDocuments/Vishnu_Jadhav.jpg";
// import Sayali_Sontakke from "../../assets/TeamDocuments/Sayali_Sontakke.jpg";
// import Samruddhi_Nande from "../../assets/TeamDocuments/Samruddhi_Nande.jpg";
// import Nikhilesh_Sharma from "../../assets/TeamDocuments/Nikhilesh_Sharma.jpg";
// import Yash_Akotkar from "../../assets/TeamDocuments/Yash_Akotkar.jpg";
// import Siddharth_Latthe from "../../assets/TeamDocuments/Siddharth_Latthe.jpg";
// import Rahul_Talele from "../../assets/TeamDocuments/Rahul_Talele.jpg";
// import Shravani_Murabatte from "../../assets/TeamDocuments/Shravani_Murabatte.jpg";
// import Shubham_Wamanacharya from "../../assets/TeamDocuments/Shubham_Wamanacharya .jpg";
// import Amey_Agrawal from "../../assets/TeamDocuments/Amey_Agrawal.jpg";
// import Lokesh_Shingavi from "../../assets/TeamDocuments/Lokesh_Shingavi.jpg";
// import Gaurav_kanade from "../../assets/TeamDocuments/Gaurav_kanade.jpg";
// import Ritesh_Lade from "../../assets/TeamDocuments/Ritesh_Lade.jpg";
// import Armaan_Shaikh from "../../assets/TeamDocuments/Armaan_Shaikh.jpg";
// import Riya_Agarwal from "../../assets/TeamDocuments/Riya_Agarwal.jpg";
// import Abhiskek_Jadhav from "../../assets/TeamDocuments/Abhishek_Jadhav.jpg";
// import Yash_Patil from "../../assets/TeamDocuments/Yash_Patil.jpg";
// import Prathamesh_Bhaskar from "../../assets/TeamDocuments/Prathamesh_Bhaskar.jpg";
// import Arnav_Umarkar from "../../assets/TeamDocuments/Arnav_Umarkar.jpg";
// import Sankalp_Akkewar from "../../assets/TeamDocuments/Sankalp_Akkewar.jpg";
// import Hasan_Hussain from "../../assets/TeamDocuments/Hasan_Hussain.jpg";
// import Manas_Sangale from "../../assets/TeamDocuments/Manas_Sangale.jpg";
// import Gunesh_Sonawane from "../../assets/TeamDocuments/Gunesh_Sonawane.jpg";
// import Siddhesh_Khairnar from "../../assets/TeamDocuments/Siddhesh_Khairnar.jpg";
// import HARSH from "../../assets/TeamDocuments/HARSH.jpg";
// import Om_Dhede from "../../assets/TeamDocuments/Om_Dhede.jpg";
// import Chaitanya_Ganjiwale from "../../assets/TeamDocuments/Chaitanya_Ganjiwale.jpg";
// import Ankush_Singh from "../../assets/TeamDocuments/Ankush_Singh.jpg";
// import Sandesh_Buchkul from "../../assets/TeamDocuments/Sandesh_Buchkul.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

const TeamCard = () => {
  return (
    <section className="team-section" id="team">
      {/* Co-ordinators Section */}
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          Co-ordinators
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              image={Nitin_Sakhare}
              Name="Nitin Sakhare"
              domain="Professor"
              linkedin="https://www.linkedin.com/in/nitin-sakhare-b2485383"
              twitter="https://twitter.com/NitinSakhare16"
              instagram="https://instagram.com/nitinsakhare4"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              image={Vikas_Kolekar}
              Name="Vikas Kolekar"
              domain="Professor"
              linkedin="https://www.linkedin.com/in/vikas-kolekar"
              twitter="https://twitter.com/KolekarVikas279"
              instagram="https://instagram.com/kolekarvikas279"
            />
          </div>
        </div>
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          Advisory Board
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              image={Vinayak_Pawar}
              Name="Vinayak Pawar"
              domain="Advisory Board Member"
              linkedin="https://www.linkedin.com/in/vinayak-pawar-17133a212"
              twitter=""
              instagram="https://www.instagram.com/we_nayak.08/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              image={Saikumar_Padmawar}
              Name="Saikumar Padmawar"
              domain="Advisory Board Member"
              linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
              instagram="https://www.instagram.com/saikumarpadmawar/"
            />
          </div>
        </div>
      </div>
      {/* TY-Committe Section*/}
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          TY-Committee
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Akash_Kalshetti}
              Name="Akash Kalshetti"
              domain="President"
              linkedin="https://www.linkedin.com/in/akash-kalshetti-27712b252"
              instagram="https://www.instagram.com/kalshetti_akash"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Sumedh_kulkarni}
              Name="Sumedh kulkarni"
              domain="Vice-President"
              linkedin="https://www.linkedin.com/in/sumedh-kulkarni-080235245"
              twitter="https://twitter.com/sumedh_2103"
              instagram="https://www.instagram.com/sumedhk_2103"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Sanchit_Dhale}
              Name="Sanchit Dhale"
              domain="Administration Head"
              linkedin="https://www.linkedin.com/in/sanchit-dhale-8a9588231"
              twitter="https://twitter.com/sanchez_1711"
              instagram="https://www.instagram.com/sanchit_dhale_17_"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Mayur_Tingare}
              Name="Mayur Tingare"
              domain="Administration Head"
              linkedin="https://www.linkedin.com/in/mayur-tingare-b2642122a"
              instagram="https://www.instagram.com/_itz_mayur_26"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Hrishikesh_Mahajan}
              Name="Hrishikesh Mahajan"
              domain="Technical-Head"
              linkedin="https://www.linkedin.com/in/hrishikesh-mahajan"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Amol_Golhar}
              Name="Amol Golhar"
              domain="Technical-Head"
              linkedin="https://www.linkedin.com/in/amol-golhar-a17536251"
              instagram="https://www.instagram.com/amolsgolhar"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Nikita_Sanap}
              Name="Nikita Sanap"
              domain="Activily-Head"
              linkedin="https://www.linkedin.com/in/nikita-sanap-072b3a24b"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Rahul_Shelke}
              Name="Rahul Shelke"
              domain="IR-Head"
              linkedin="https://www.linkedin.com/in/rahul-shelke-457841227"
              twitter="https://twitter.com/Mr_RahulShelke"
              instagram="https://www.instagram.com/mr_rahulshelke"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Khushi_Asodekar}
              Name="Khushi Asodekar"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/khushi-asodekar-90b982267"
              instagram="https://www.instagram.com/khushi_asodekar"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Shruti_Ghodake}
              Name="Shruti Ghodake"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/shruti-ghodake-539935260"
              instagram="https://www.instagram.com/shrutighodake_03"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Sahil_Wagh}
              Name="Sahil Wagh"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/sahil-wagh-73b9a7240"
              instagram="https://www.instagram.com/its_me_sahilwagh"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Deepak_Ghume}
              Name="Deepak Ghume"
              domain="Design-Head"
              linkedin="https://www.linkedin.com/in/deepak-ghume-35537628a"
              instagram="https://www.instagram.com/_king_deepak_official"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Rajan_Sudan}
              Name="Rajan Sudan"
              domain="Design-Head"
              linkedin="https://www.linkedin.com/in/rajan-sudan-7a7283216"
              instagram="https://www.instagram.com/rajan._39"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Devyani_Dahake}
              Name="Devyani Dahake"
              domain="Documentation & content-Head"
              linkedin="https://www.linkedin.com/in/devyani-dahake-148682230"
              instagram="https://www.instagram.com/devyanid_"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Smit_Ramteke}
              Name="Smit Ramteke"
              domain="Comp Department-Head"
              linkedin="https://www.linkedin.com/in/smit-ramteke-4b60b5232"
              instagram="https://www.instagram.com/smit.__.ramteke"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Vedant_Devre}
              Name="Vedant Devre"
              domain="IT Department-Head"
              linkedin="https://www.linkedin.com/in/vedant-devre"
              instagram="https://www.instagram.com/vedant_devre_77"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Viraj_Badale}
              Name="Viraj Badale"
              domain="EN&TC Department-Head"
              linkedin="https://www.linkedin.com/in/viraj-badale-731216229"
              instagram="https://www.instagram.com/viraj_11_2020"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Ashish_Ruke}
              Name="Ashish Ruke"
              domain="AI&DS Department-Head"
              linkedin="https://www.linkedin.com/in/ashish-ruke-68a038230"
              instagram="https://www.instagram.com/ashishruke99"
            />
          </div>
          {/* updated content */}
        </div>
      </div>
      {/* SY-Committee Section */}
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          SY-Committee
        </h2>
        <Carousel breakPoints={breakPoints}>
          <TeamSection
            className="cardcarousel"
            image={Rijul_Pimpale}
            Name="Rijul Pimpale"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/rijul-pimpale-b72734269"
          />
          <TeamSection
            className="cardcarousel"
            image={Kshitija_Deshmukh}
            Name="Kshitija Deshmukh"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/kshitija-deshmukh-06b74625b"
          />
          <TeamSection
            className="cardcarousel"
            image={Robin_Patel}
            Name="Robin Patel"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/robin-patel-31b32125b"
          />
          <TeamSection
            className="cardcarousel"
            image={Aishwarya_Meshram}
            Name="Aishwarya Meshram"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/aishwarya-meshram-403338260"
          />
          <TeamSection
            className="cardcarousel"
            image={Arya_Patil}
            Name="Arya Patil"
            domain="Activity Team"
            linkedin="https://www.linkedin.com/in/shravani-ghorpade-61778322a"
          />
          <TeamSection
            className="cardcarousel"
            image={Shreyas_Borade}
            Name="Shreyash Borade"
            domain="Activity Team"
            linkedin="https://www.linkedin.com/in/shreyash-borade-a986a3256"
          />
          <TeamSection
            className="cardcarousel"
            image={Varad_Bodhade}
            Name="Varad Bodhade"
            domain="Activity Team"
            linkedin="https://www.linkedin.com/in/varad-bodhade-5a947525b"
          />
          <TeamSection
            className="cardcarousel"
            image={Shravani_Ghorpade}
            Name="Shravani Ghorpade"
            domain="Activity Team"
            linkedin="https://www.linkedin.com/in/arya-patil-a2931925b"
          />
          <TeamSection
            className="cardcarousel"
            image={Sakshi_Amate}
            Name="Sakshi Amate"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/sakshi-amate-67685a25a"
          />
          <TeamSection
            className="cardcarousel"
            image={Sakshi_Hedke}
            Name="Sakshi Hedke"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/sakshi-hedke-44975b25b"
          />
          <TeamSection
            className="cardcarousel"
            image={Vedashri_Patil}
            Name="Vedashri Patil"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/vedashri-patil-b3a27b28b"
          />
          <TeamSection
            className="cardcarousel"
            image={Pranav_Hore}
            Name="Pranav Hore"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/pranav-hore-0204a4258"
          />
          <TeamSection
            className="cardcarousel"
            image={Sakshi_Nagmode}
            Name="Sakshi Nagmode"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/sakshi-nagmode-ba5a8725b"
          />
          <TeamSection
            className="cardcarousel"
            image={Ayush_Rathod}
            Name="Ayush Rathod"
            domain=" AI&DS Dept Head"
            linkedin="https://www.linkedin.com/in/ayushjrathod"
          />
          <TeamSection
            className="cardcarousel"
            image={Abhijeet_Shinde}
            Name="Abhijeet Shinde"
            domain=" Comp Dept Head"
            linkedin="https://www.linkedin.com/in/abhijeet-shinde-94794725a"
          />
          <TeamSection
            className="cardcarousel"
            image={Rucha_Patil}
            Name="Rucha Ravindra Patil"
            domain="Comp Dept Head"
            linkedin="https://www.linkedin.com/in/rucha-patil-15045625a"
          />
          <TeamSection
            className="cardcarousel"
            image={Pratham_Katariya}
            Name="Pratham Katariya"
            domain="EN&TC Dept Head"
            linkedin="https://www.linkedin.com/in/pratham-katariya-239839259"
          />
          <TeamSection
            className="cardcarousel"
            image={Shreyanshi_Meshram}
            Name="Shreyanshi Meshram"
            domain="EN&TC Dept Head"
            linkedin="https://www.linkedin.com/in/shreyanshi-meshram-0694b2258"
          />
          <TeamSection
            className="cardcarousel"
            image={Sahil_Wagh}
            Name="Prasad Kulkarni"
            domain="IT Dept Head"
            linkedin="https://www.linkedin.com/in/prasad-kulkarni-392b9b268"
          />
          {/* <TeamSection
            className="cardcarousel"
            image={Sahil_Khilar}
            Name="Sahil Khilari"
            domain="IT Dept Head"
            linkedin="https://www.linkedin.com/in/sahil-khilari-20513224a"
          /> */}
          <TeamSection
            className="cardcarousel"
            image={Srivatsa_Ankamwar}
            Name="Srivatsa Ankamwar"
            domain="Documentation Team"
            linkedin="https://www.linkedin.com/in/srivatsa-ankamwar-89640a258"
          />
          <TeamSection
            className="cardcarousel"
            image={Vaishnavi_Shinde}
            Name="Vaishnavi Shinde"
            domain="Documentation Team"
            linkedin="https://www.linkedin.com/in/vaishnavi-raman-shinde-2b890b25a"
          />
          <TeamSection
            className="cardcarousel"
            image={Jaydip_Mane}
            Name="Jaydip Mane"
            domain="Documentation Team"
            linkedin=""
          />
          <TeamSection
            className="cardcarousel"
            image={Aditya_Uragudwar}
            Name="Aditya Uragudwar"
            domain="Finance Team"
            linkedin="https://www.linkedin.com/in/aditya-uragudwar-702311198"
          />
        </Carousel>
      </div>
      {/* <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          SY-Committee
        </h2>
        <Carousel breakPoints={breakPoints}>
          <TeamSection
            className="cardcarousel"
            image={Riya_Agarwal}
            Name="Riya Agarwal"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/riya-agarwal-a9285b229"
          />
          <TeamSection
            className="cardcarousel"
            image={Abhiskek_Jadhav}
            Name="Abhishek J."
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/abhishek-jadhav-161b8b250"
          />
          <TeamSection
            className="cardcarousel"
            image={Mayur_Tingare}
            Name="Mayur Tingare"
            domain="Jt.Activity Head"
            linkedin="https://www.linkedin.com/in/tingare-mayur-b2642122a"
          />
          <TeamSection
            className="cardcarousel"
            image={Yash_Patil}
            Name="Yash Patil"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/yash-patil-2a728122b"
          />
          <TeamSection
            className="cardcarousel"
            image={Sahil_Wagh}
            Name="Sahil Wagh"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/sahil-wagh-73b9a7240"
          />
          <TeamSection
            className="cardcarousel"
            image={Rahul_Shelke}
            Name="Rahul Shelke"
            domain="Jt.Content Head"
            linkedin="https://www.linkedin.com/in/rahul-shelke-457841227"
          />
          <TeamSection
            className="cardcarousel"
            image={Prathamesh_Bhaskar}
            Name="Prathamesh B."
            domain="Video Editor"
            linkedin="https://www.linkedin.com/in/prathamesh-bhaskar-9b738822a"
          />
          <TeamSection
            className="cardcarousel"
            image={Arnav_Umarkar}
            Name="Arnav Umarkar"
            domain="Content Writing"
            linkedin="https://www.linkedin.com/in/arnav-umarkar-0191a7252"
          />
          <TeamSection
            className="cardcarousel"
            image={Vedant_Devre}
            Name="Vedant Devre"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/vedant-devre/"
          />
          <TeamSection
            className="cardcarousel"
            image={Sankalp_Akkewar}
            Name="Sankalp A."
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/sankalp-akkewar-614b8822a"
          />
          <TeamSection
            className="cardcarousel"
            image={Hasan_Hussain}
            Name="Hasan Hussain"
            domain="Jt.Activity Head"
            linkedin="https://www.linkedin.com/in/hasan-hussain-3481a722a"
          />
          <TeamSection
            className="cardcarousel"
            image={Akash_Kalshetti}
            Name="Akash K."
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/akash-kalshetti-27712b252"
          />
          <TeamSection
            className="cardcarousel"
            image={Sanchit_Dhale}
            Name="Sanchit Dhale"
            domain="Jt. Admin"
            linkedin="https://www.linkedin.com/in/sanchit-dhale-8a9588231"
          />
          <TeamSection
            className="cardcarousel"
            image={Gunesh_Sonawane}
            Name="Gunesh S."
            domain="Jt. Admin"
          />
          <TeamSection
            className="cardcarousel"
            image={Siddhesh_Khairnar}
            Name="Siddhesh K."
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/siddhesh-khairnar-4234a3226"
          />
          <TeamSection
            className="cardcarousel"
            image={HARSH}
            Name="HARSH"
            domain="Jt.Doc Head"
            linkedin="https://www.linkedin.com/in/harsh-01071b24a"
          />
          <TeamSection
            className="cardcarousel"
            image={Om_Dhede}
            Name="Om_Dhede"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/om-dhede-7b026122a"
          />
          <TeamSection
            className="cardcarousel"
            image={Chaitanya_Ganjiwale}
            Name="Chaitanya G."
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/chaitanya-ganjiwale-77a61a229"
          />
          <TeamSection
            className="cardcarousel"
            image={Ankush_Singh}
            Name="Ankush Singh"
            domain="Jt.Activity Head"
            linkedin="https://www.linkedin.com/in/ankush-singh-4721a122a"
          />
          <TeamSection
            className="cardcarousel"
            image={Smit_Ramteke}
            Name="Smit Ramteke"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/smit-ramteke-4b60b5232"
          />
          <TeamSection
            className="cardcarousel"
            image={Sandesh_Buchkul}
            Name="Sandesh B."
            domain="Jt.Publicity Head"
            linkedin="https://www.linkedin.com/in/sandeshbuchkul"
          />
          <TeamSection
            className="cardcarousel"
            image={Sumedh_kulkarni}
            Name="Sumedh K."
            domain="Jt.Doc Head"
          />
          <TeamSection
            className="cardcarousel"
            image={Viraj_Badale}
            Name="Viraj Badale"
            domain="Jt.Design Head"
          />
          <TeamSection
            className="cardcarousel"
            image={Ashish_Ruke}
            Name="Ashish Ruke"
            domain="Jt.Publicity Head"
          />
        </Carousel>
      </div> */}
      <FooterHeart />
    </section>
  );
};

export default TeamCard;
