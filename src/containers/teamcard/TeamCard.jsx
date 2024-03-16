import React from "react";
import TeamSection from "../../components/team/TeamSection.jsx";
import TeamInnerSection from "../../components/team/TeamInnerSection.jsx";
import "../../components/team/TeamSection.css";
import "./TeamCard.css";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import FooterHeart from "../footerHeart/FooterHeart";
// Importing Images
// Faculty Co-ordinators
import Nitin_Sakhare from "../../assets/TeamDocuments/Faculty/Nitin_Sakhare.jpg";
import Vikas_Kolekar from "../../assets/TeamDocuments/Faculty/Vikas_Kolekar.jpg";
// Advisory Board
import Saikumar_Padmawar from "../../assets/TeamDocuments/Committee-23-24/Advisory/Saikumar_Padmawar.jpg";
import Vinayak_Pawar from "../../assets/TeamDocuments/Committee-23-24/Advisory/Vinayak_Pawar.jpg";
// TY Committee
import Akash_Kalshetti from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Akash_Kalshetti.jpg";
import Sumedh_kulkarni from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Sumedh_kulkarni.jpg";
import Sanchit_Dhale from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Sanchit_Dhale.jpg";
import Mayur_Tingare from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Mayur_Tingare.jpg";
import Hrishikesh_Mahajan from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Hrishikesh_Mahajan.jpg";
import Amol_Golhar from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Amol_Golhar.jpg";
import Nikita_Sanap from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Nikita_Sanap.jpg";
import Rahul_Shelke from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Rahul_Shelke.jpg";
import Khushi_Asodekar from "../..//assets/TeamDocuments/Committee-23-24/TY-Committee/Khushi_Asodekar.jpg";
import Shruti_Ghodake from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Shruti_Ghodake.jpg";
import Sahil_Wagh from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Sahil_Wagh.jpg";
import Deepak_Ghume from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Deepak_Ghume.jpg";
import Rajan_Sudan from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Rajan_Sudan.jpg";
import Devyani_Dahake from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Devyani_Dahake.jpg";
import Smit_Ramteke from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Smit_Ramteke.jpg";
import Vedant_Devre from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Vedant_Devre.jpg";
import Viraj_Badale from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Viraj_Badale.jpg";
import Ashish_Ruke from "../../assets/TeamDocuments/Committee-23-24/TY-Committee/Ashish_Ruke.jpg";
// SY Committee
import Abhijeet_Shinde from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Abhijeet_Shinde.jpeg";
import Aditya_Uragudwar from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Aditya_Uragudwar.jpg";
import Aishwarya_Meshram from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Aishwarya_Meshram.jpg";
import Arya_Patil from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Arya_Patil.jpg";
import Ayush_Rathod from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Ayush_Rathod.jpg";
import Jaydip_Mane from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Jaydip_Mane.png";
import Kapil_Murge from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Kapil_Murge.jpg";
import Kshitija_Deshmukh from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Kshitija_Deshmukh.jpg";
import Manish_Patil from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Manish_Patil.jpg";
import Pranav_Hore from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Pranav_Hore.jpg";
import Prasad_Kulkarni from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Prasad_Kulkarni.jpg";
import Pratham_Katariya from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Pratham_Katariya.jpg";
import Rijul_Pimpale from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Rijul_Pimpale.jpg";
import Robin_Patel from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Robin_Patel.jpg";
import Rucha_Patil from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Rucha_Patil.jpeg";
import Sahil_Khilari from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Sahil_Khilari.jpeg";
import Sakshi_Amate from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Sakshi_Amate.jpg";
import Sakshi_Hedke from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Sakshi_Hedke.jpg";
import Sakshi_Nagmode from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Sakshi_Nagmode.jpg";
import Shravani_Ghorpade from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Shravani_Ghorpade.jpg";
import Shreyanshi_Meshram from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Shreyanshi_Meshram.jpg";
import Shreyash_Borade from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Shreyash_Borade.jpg";
import Srivatsa_Ankamwar from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Srivatsa_Ankamwar.jpg";
import Vaishnavi_Shinde from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Vaishnavi_Shinde.jpg";
import Varad_Bodhade from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Varad_Bodhade.jpg";
import Vedashri_Patil from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Vedashri_Patil.jpg";
import Zeeshan_Parvez from "../../assets/TeamDocuments/Committee-23-24/SY-Committee/Zeeshan_Parvez.jpg";
// TY Committee 2022-23
import Shreyas_Gavhalkar from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shreyas_Gavhalkar.jpg";
import Sachi_Teke from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Sachi_Teke.jpg";
import Pratik_Rathod from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Pratik_Rathod.jpg";
import Tejaswini_Bahir from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Tejaswini_Bahir.jpg";
import Shrutika_Wagh from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shrutika_Wagh.jpg";
import Vishnu_Jadhav from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Vishnu_Jadhav.jpg";
import Sayali_Sontakke from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Sayali_Sontakke.jpg";
import Samruddhi_Nande from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Samruddhi_Nande.jpg";
import Nikhilesh_Sharma from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Nikhilesh_Sharma.jpg";
import Yash_Akotkar from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Yash_Akotkar.jpg";
import Siddharth_Latthe from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Siddharth_Latthe.jpg";
import Rahul_Talele from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Rahul_Talele.jpg";
import Shravani_Murabatte from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shravani_Murabatte.jpg";
import Shubham_Wamanacharya from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shubham_Wamanacharya.jpg";
import Amey_Agrawal from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Amey_Agrawal.jpg";
import Lokesh_Shingavi from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Lokesh_Shingavi.jpg";
import Gaurav_kanade from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Gaurav_kanade.jpg";
import Ritesh_Lade from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Ritesh_Lade.jpg";
import Armaan_Shaikh from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Armaan_Shaikh.jpg";
import Manas_Sangale from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Manas_Sangale.jpg";
// SY Commttee 2022-23
import Riya_Agarwal from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Riya_Agarwal.jpg";
import Abhiskek_Jadhav from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Abhishek_Jadhav.jpg";
import Yash_Patil from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Yash_Patil.jpg";
import Prathamesh_Bhaskar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Prathamesh_Bhaskar.jpg";
import Arnav_Umarkar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Arnav_Umarkar.jpg";
import Sankalp_Akkewar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sankalp_Akkewar.jpg";
import Hasan_Hussain from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Hasan_Hussain.jpg";
import Gunesh_Sonawane from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Gunesh_Sonawane.jpg";
import Siddhesh_Khairnar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Siddhesh_Khairnar.jpg";
import HARSH from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/HARSH.jpg";
import Om_Dhede from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Om_Dhede.jpg";
import Chaitanya_Ganjiwale from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Chaitanya_Ganjiwale.jpg";
import Ankush_Singh from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Ankush_Singh.jpg";
import Sandesh_Buchkul from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sandesh_Buchkul.jpg";

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
          Faculty Advisors
        </h2>
        <div className="row justify-content-center">
          <TeamSection
            image={Nitin_Sakhare}
            Name="Nitin Sakhare"
            domain="Faculty Advisor"
            linkedin="https://www.linkedin.com/in/nitin-sakhare-b2485383"
            twitter="https://twitter.com/NitinSakhare16"
            instagram="https://instagram.com/nitinsakhare4"
          />
          <TeamSection
            image={Vikas_Kolekar}
            Name="Vikas Kolekar"
            domain="Faculty Advisor"
            linkedin="https://www.linkedin.com/in/vikas-kolekar"
            twitter="https://twitter.com/KolekarVikas279"
            instagram="https://instagram.com/kolekarvikas279"
          />
        </div>
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          Student Advisory Board
        </h2>
        <div className="row justify-content-center">
          <TeamSection
            image={Vinayak_Pawar}
            Name="Vinayak Pawar"
            domain="Advisory Board Member"
            linkedin="https://www.linkedin.com/in/vinayak-pawar-17133a212"
            instagram="https://www.instagram.com/we_nayak.08/"
          />
          <TeamSection
            image={Saikumar_Padmawar}
            Name="Saikumar Padmawar"
            domain="Advisory Board Member"
            linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
            instagram="https://www.instagram.com/saikumarpadmawar/"
          />
        </div>
      </div>
      {/* TY-Committe Section*/}
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          TY-Committee
        </h2>
        <div className="row justify-content-center">
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Akash_Kalshetti}
            Name="Akash Kalshetti"
            domain="President"
            linkedin="https://www.linkedin.com/in/akash-kalshetti-27712b252"
            instagram="https://www.instagram.com/kalshetti_akash"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Sumedh_kulkarni}
            Name="Sumedh kulkarni"
            domain="Vice-President"
            linkedin="https://www.linkedin.com/in/sumedh-kulkarni-080235245"
            twitter="https://twitter.com/sumedh_2103"
            instagram="https://www.instagram.com/sumedhk_2103"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Sanchit_Dhale}
            Name="Sanchit Dhale"
            domain="Administration Head"
            linkedin="https://www.linkedin.com/in/sanchit-dhale-8a9588231"
            twitter="https://twitter.com/sanchez_1711"
            instagram="https://www.instagram.com/sanchit_dhale_17_"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Mayur_Tingare}
            Name="Mayur Tingare"
            domain="Administration Head"
            linkedin="https://www.linkedin.com/in/mayur-tingare-b2642122a"
            instagram="https://www.instagram.com/_itz_mayur_26"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Hrishikesh_Mahajan}
            Name="Hrishikesh Mahajan"
            domain="Technical Head"
            linkedin="https://www.linkedin.com/in/hrishikesh-mahajan"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Amol_Golhar}
            Name="Amol Golhar"
            domain="Technical Head"
            linkedin="https://www.linkedin.com/in/amol-golhar-a17536251"
            instagram="https://www.instagram.com/amolsgolhar"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Nikita_Sanap}
            Name="Nikita Sanap"
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/nikita-sanap-072b3a24b"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Rahul_Shelke}
            Name="Rahul Shelke"
            domain="Industry Relations Head"
            linkedin="https://www.linkedin.com/in/rahul-shelke-457841227"
            twitter="https://twitter.com/Mr_RahulShelke"
            instagram="https://www.instagram.com/mr_rahulshelke"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Khushi_Asodekar}
            Name="Khushi Asodekar"
            domain="Publicity Head"
            linkedin="https://www.linkedin.com/in/khushi-asodekar-90b982267"
            instagram="https://www.instagram.com/khushi_asodekar"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Shruti_Ghodake}
            Name="Shruti Ghodake"
            domain="Publicity Head"
            linkedin="https://www.linkedin.com/in/shruti-ghodake-539935260"
            instagram="https://www.instagram.com/shrutighodake_03"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Sahil_Wagh}
            Name="Sahil Wagh"
            domain="Publicity Head"
            linkedin="https://www.linkedin.com/in/sahil-wagh-73b9a7240"
            instagram="https://www.instagram.com/its_me_sahilwagh"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Deepak_Ghume}
            Name="Deepak Ghume"
            domain="Design Head"
            linkedin="https://www.linkedin.com/in/deepak-ghume-35537628a"
            instagram="https://www.instagram.com/_king_deepak_official"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Rajan_Sudan}
            Name="Rajan Sudan"
            domain="Design Head"
            linkedin="https://www.linkedin.com/in/rajan-sudan-7a7283216"
            instagram="https://www.instagram.com/rajan._39"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Devyani_Dahake}
            Name="Devyani Dahake"
            domain="Documentation & Content Head"
            linkedin="https://www.linkedin.com/in/devyani-dahake-148682230"
            instagram="https://www.instagram.com/devyanid_"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Smit_Ramteke}
            Name="Smit Ramteke"
            domain="Computer Department Head"
            linkedin="https://www.linkedin.com/in/smit-ramteke-4b60b5232"
            instagram="https://www.instagram.com/smit.__.ramteke"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Vedant_Devre}
            Name="Vedant Devre"
            domain="IT Department Head"
            linkedin="https://www.linkedin.com/in/vedant-devre"
            instagram="https://www.instagram.com/vedant_devre_77"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Viraj_Badale}
            Name="Viraj Badale"
            domain="E&TC Department Head"
            linkedin="https://www.linkedin.com/in/viraj-badale-731216229"
            instagram="https://www.instagram.com/viraj_11_2020"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Ashish_Ruke}
            Name="Ashish Ruke"
            domain="AI&DS Department Head"
            linkedin="https://www.linkedin.com/in/ashish-ruke-68a038230"
            instagram="https://www.instagram.com/ashishruke99"
          />
        </div>
      </div>
      {/* SY-Committee Section */}
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          SY-Committee
        </h2>
        <div className="row justify-content-center">
          <TeamSection
            className="cardcarousel"
            image={Robin_Patel}
            Name="Robin Patel"
            domain="Technical Team"
            limkedin="https://www.linkedin.com/in/robin-patel-31b32125b"
            instagram="https://www.instagram.com/robinpatel2061"
          />
          <TeamSection
            className="cardcarousel"
            image={Kshitija_Deshmukh}
            Name="Kshitija Deshmukh"
            domain="Technical Team"
            linkedin="https://www.linkedin.com/in/kshitija-deshmukh-06b74625b"
            instagram="https://www.instagram.com/kshitudeshmukh0110"
          />
          <TeamSection
            className="cardcarousel"
            image={Rijul_Pimpale}
            Name="Rijul Pimpale"
            domain="Technical Team"
            linkedin="https://www.linkedin.com/in/rijul-pimpale-b72734269"
            instagram="https://www.instagram.com/rijjj_919"
          />
          <TeamSection
            className="cardcarousel"
            image={Aishwarya_Meshram}
            Name="Aishwarya Meshram"
            domain="Technical Team"
            linkedin="https://www.linkedin.com/in/aishwarya-meshram-403338260"
            instagram="https://www.instagram.com/aishwaryameshram26"
          />
          <TeamSection
            className="cardcarousel"
            image={Arya_Patil}
            Name="Arya Patil"
            domain="Activity Team"
            linkedin="https://www.linkedin.com/in/arya-patil-a2931925b"
            instagram="https://www.instagram.com/arya7patil"
          />
          <TeamSection
            className="cardcarousel"
            image={Shravani_Ghorpade}
            Name="Shravani Ghorpade"
            domain="Activity Team"
            linkedin="https://www.linkedin.com/in/shravani-ghorpade-61778322a"
            instagram="https://www.instagram.com/shravtyy"
          />
          <TeamSection
            className="cardcarousel"
            image={Shreyash_Borade}
            Name="Shreyash Borade"
            domain="Admin Team"
            linkedin="https://www.linkedin.com/in/shreyash-borade-a986a3256"
            instagram="https://www.instagram.com/shrey.borade"
          />
          <TeamSection
            className="cardcarousel"
            image={Varad_Bodhade}
            Name="Varad Bodhade"
            domain="Admin Team"
            linkedin="https://www.linkedin.com/in/varad-bodhade-5a947525b"
            instagram="https://www.instagram.com/varad_bodhade"
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
            instagram="https://www.instagram.com/sakshihedke17"
          />
          <TeamSection
            className="cardcarousel"
            image={Vedashri_Patil}
            Name="Vedashri Patil"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/vedashri-patil-b3a27b28b"
            instagram="https://www.instagram.com/patil_vedashri"
          />
          <TeamSection
            className="cardcarousel"
            image={Pranav_Hore}
            Name="Pranav Hore"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/pranav-hore-0204a4258"
            instagram="https://www.instagram.com/pranav_h_221"
          />
          <TeamSection
            className="cardcarousel"
            image={Sakshi_Nagmode}
            Name="Sakshi Nagmode"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/sakshi-nagmode-ba5a8725b"
            instagram="https://www.instagram.com/sakshi_0.97"
          />
          <TeamSection
            className="cardcarousel"
            image={Zeeshan_Parvez}
            Name="Zeeshan Parvez"
            domain="Publicity Team"
            instagram="https://www.instagram.com/zeeshan_612"
          />
          <TeamSection
            className="cardcarousel"
            image={Kapil_Murge}
            Name="Kapil Murge"
            domain="Publicity Team"
            linkedin="https://www.linkedin.com/in/kapil-m-62875325b"
            instagram="https://www.instagram.com/kapil_772002"
          />
          <TeamSection
            className="cardcarousel"
            image={Manish_Patil}
            Name="Manish Patil"
            domain="Publicity Team"
            linkedin="https://www.linkedin.com/in/manish-patil-2aa865252"
            instagram="https://www.instagram.com/manish__patil0204"
          />
          <TeamSection
            className="cardcarousel"
            image={Ayush_Rathod}
            Name="Ayush Rathod"
            domain="AI&DS Department Team"
            linkedin="https://www.linkedin.com/in/ayushjrathod"
            instagram="https://www.instagram.com/ayushjrathod"
            twitter="https://twitter.com/ayushjrathod0"
          />
          <TeamSection
            className="cardcarousel"
            image={Abhijeet_Shinde}
            Name="Abhijeet Shinde"
            domain="Computer Department Team"
            linkedin="https://www.linkedin.com/in/abhijeet-shinde-94794725a"
            instagram="https://www.instagram.com/abhijeetshinde_01"
          />
          <TeamSection
            className="cardcarousel"
            image={Rucha_Patil}
            Name="Rucha Ravindra Patil"
            domain="Computer Department Team"
            linkedin="https://www.linkedin.com/in/rucha-patil-15045625a"
            instagram="https://www.instagram.com/rucha_28_"
          />
          <TeamSection
            className="cardcarousel"
            image={Pratham_Katariya}
            Name="Pratham Katariya"
            domain="E&TC Department Team"
            linkedin="https://www.linkedin.com/in/pratham-katariya-239839259"
            instagram="https://www.instagram.com/pratham_katariya7"
          />
          <TeamSection
            className="cardcarousel"
            image={Shreyanshi_Meshram}
            Name="Shreyanshi Meshram"
            domain="E&TC Department Team"
            linkedin="https://www.linkedin.com/in/shreyanshi-meshram-0694b2258"
            instagram="https://www.instagram.com/shreyanshi.meshram.05"
          />
          <TeamSection
            className="cardcarousel"
            image={Sahil_Khilari}
            Name="Sahil Khilari"
            domain="IT Department Team"
            linkedin="https://www.linkedin.com/in/sahil-khilari-20513224a"
            instagram="https://www.instagram.com/sahil._.1.6"
          />
          <TeamSection
            className="cardcarousel"
            image={Prasad_Kulkarni}
            Name="Prasad Kulkarni"
            domain="IT Department Team"
            linkedin="https://www.linkedin.com/in/prasad-kulkarni-392b9b268"
            instagram="https://www.instagram.com/prasad_kulkarni_04"
          />
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
            instagram="https://www.instagram.com/vaishnaviramanshinde"
          />
          <TeamSection
            className="cardcarousel"
            image={Jaydip_Mane}
            Name="Jaydip Mane"
            domain="Documentation Team"
            instagram="https://www.instagram.com/jaydipmane90"
          />
          <TeamSection
            className="cardcarousel"
            image={Aditya_Uragudwar}
            Name="Aditya Uragudwar"
            domain="Finance Team"
            linkedin="https://www.linkedin.com/in/aditya-uragudwar-702311198"
          />
        </div>
      </div>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          TY-Committee 2022-23
        </h2>
        <Carousel breakPoints={breakPoints}>
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Shreyas_Gavhalkar}
            Name="Shreyas G."
            domain="President"
            linkedin="https://www.linkedin.com/in/shreyas-gavhalkar-a8b0bb206"
            instagram="www.instagram.com/__shreyas__19"
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Sachi_Teke}
            Name="Sachi Teke"
            domain="Vice-President"
            linkedin="https://www.linkedin.com/in/sachi-teke-118469206/"
            twitter="https://twitter.com/sachi_teke"
            instagram="https://instagram.com/sachi_teke7032"
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Pratik_Rathod}
            Name="Pratik Rathod"
            domain="Publicity-Head"
            linkedin="https://www.linkedin.com/in/pratik-rathod-10a522208"
            twitter="https://twitter.com/cyph3r_s"
            instagram="https://www.instagram.com/pratik_rathod_1/"
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Tejaswini_Bahir}
            Name="Tejaswini Bahir"
            domain="IR-Head"
            linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210"
            instagram="https://instagram.com/tej_b01/"
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Saikumar_Padmawar}
            Name="Saikumar P."
            domain="Technical-Head"
            linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
            twitter="https://twitter.com/SAIKUMARPADMAW1"
            instagram="https://www.instagram.com/saikumarpadmawar/"
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Shrutika_Wagh}
            Name="Shrutika Wagh"
            domain="Publicity-Head"
            linkedin="https://www.linkedin.com/in/shrutika-wagh-65b907199"
            instagram="https://www.instagram.com/shrutika_53/"
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Vishnu_Jadhav}
            Name="Vishnu J."
            domain="Department-Head "
            linkedin="Https://www.linkedin.com/mwlite/in/vishnujadhav"
            twitter="https://twitter.com/vj_5501/status/1586284985656365056?t=k6UOBLD4QD7rk3JC51I8gQ&s=19"
            instagram="https://instagram.com/vj_5501?igshid=YmMyMTA2M2Y="
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Sayali_Sontakke}
            Name="Sayali Sontakke"
            domain="Design-Head"
            linkedin="https://www.linkedin.com/in/sayali-sontakke-a8119a209"
            twitter="https://www.twitter.com/Sayaliii_s?t=0wEAcycyR-7Aecvhp4B9OA&s=08"
            instagram="https://www.instagram.com/sayaliii.s_?igshid=ZDdkNTZiNTM="
          />
          <TeamInnerSection
            className="cardcarousel"
            Tag={<i className="fas fa-code"></i>}
            image={Nikhilesh_Sharma}
            Name="Nikhilesh S."
            domain="Department-Head"
            linkedin="https://www.linkedin.com/in/nikhilesh-sharma-/"
            instagram="https://www.instagram.com/_nikhileshsharma_/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Samruddhi_Nande}
            Name="Samruddhi N."
            domain="Technical Head"
            linkedin="http://www.linkedin.com/in/samruddhi-nande-35b0b6206"
            twitter="https://twitter.com/NandeSamruddhi"
            instagram="https://www.instagram.com/__samruddhi07/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Yash_Akotkar}
            Name="Yash Akotkar"
            domain="Design-Head"
            linkedin="https://www.linkedin.com/in/yash-akotkar-9350ba214"
            instagram="https://www.instagram.com/invites/contact/?i=n3ae3z845okv&utm_content=hlfwqgr"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Siddharth_Latthe}
            Name="Siddharth L."
            domain="Content Head"
            linkedin="https://www.linkedin.com/in/siddharth-latthe-4ab69a213"
            instagram="https://instagram.com/sidd_latthe?igshid=ZDdkNTZiNTM="
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Rahul_Talele}
            Name="Rahul Talele"
            domain="Admin"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Vinayak_Pawar}
            Name="Vinayak Pawar"
            domain="Admin"
            linkedin="https://www.linkedin.com/in/vinayak-pawar-17133a212"
            instagram="https://www.instagram.com/we_nayak.08/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Shravani_Murabatte}
            Name="Shravani M."
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/shravani-murabatte-518a80176/"
            instagram="https://www.instagram.com/mshrau_28/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Shubham_Wamanacharya}
            Name="Shubham W."
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/shubham-wamanacharya-420750227/"
            twitter="https://mobile.twitter.com/ShubhamPW2911"
            instagram="https://www.instagram.com/shubham_wamanacharya/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Amey_Agrawal}
            Name="Amey Agarwal"
            domain="Doc-Head"
            linkedin="https://www.linkedin.com/in/amey-agrawal-9a0b66213"
            instagram="https://instagram.com/i_m_amey?igshid=YmMyMTA2M2Y="
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Lokesh_Shingavi}
            Name="Lokesh S."
            domain="IR-Head"
            linkedin="https://www.linkedin.com/in/lokesh-shingvi-b270b421a"
            instagram="https://www.instagram.com/lokesh_shingvi/"
            twitter="https://twitter.com/LokeshShingvi?t=xKbSSdWcasZ7mGxNckznFw&s=09"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Gaurav_kanade}
            Name="Gaurav Kanade"
            domain="Dept-Head"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Ritesh_Lade}
            Name="Rithesh Lade"
            domain="Dept-Head"
            linkedin="https://www.linkedin.com/in/ritesh-lade-669263200"
            instagram="https://instagram.com/ritesh.lade?igshid=YmMyMTA2M2Y="
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Armaan_Shaikh}
            Name="Armaan Shaikh"
            domain="Dept-Head"
            linkedin="https://www.linkedin.com/in/armaan-shaikh-23b9141a5"
            instagram="https://www.instagram.com/armaaaaan.__/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Manas_Sangale}
            Name="Manas Sangale"
            domain="Jt.Dept-Head"
            linkedin="https://www.linkedin.com/in/manas-sangale-47a209217"
            instagram="https://instagram.com/___manas_12?igshid=ZDdkNTZiNTM="
          />
        </Carousel>
      </div>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          SY-Committee 2022-23
        </h2>
        <Carousel breakPoints={breakPoints}>
          <TeamInnerSection
            Tag={<i className="fas fa-code"></i>}
            image={Hrishikesh_Mahajan}
            Name="Hrishikesh M."
            domain="Jt. Technical Head"
            linkedin="https://www.linkedin.com/in/hrishikesh-mahajan"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Riya_Agarwal}
            Name="Riya Agarwal"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/riya-agarwal-a9285b229"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Chaitanya_Ganjiwale}
            Name="Chaitanya G."
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/chaitanya-ganjiwale-77a61a229"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Abhiskek_Jadhav}
            Name="Abhishek J."
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/abhishek-jadhav-161b8b250"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Mayur_Tingare}
            Name="Mayur Tingare"
            domain="Jt.Activity Head"
            linkedin="https://www.linkedin.com/in/tingare-mayur-b2642122a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Yash_Patil}
            Name="Yash Patil"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/yash-patil-2a728122b"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Sahil_Wagh}
            Name="Sahil Wagh"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/sahil-wagh-73b9a7240"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Vedant_Devre}
            Name="Vedant Devre"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/vedant-devre/"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Rahul_Shelke}
            Name="Rahul Shelke"
            domain="Jt.Content Head"
            linkedin="https://www.linkedin.com/in/rahul-shelke-457841227"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Prathamesh_Bhaskar}
            Name="Prathamesh B."
            domain="Video Editor"
            linkedin="https://www.linkedin.com/in/prathamesh-bhaskar-9b738822a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Arnav_Umarkar}
            Name="Arnav Umarkar"
            domain="Content Writing"
            linkedin="https://www.linkedin.com/in/arnav-umarkar-0191a7252"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Sankalp_Akkewar}
            Name="Sankalp A."
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/sankalp-akkewar-614b8822a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Hasan_Hussain}
            Name="Hasan Hussain"
            domain="Jt.Activity Head"
            linkedin="https://www.linkedin.com/in/hasan-hussain-3481a722a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Akash_Kalshetti}
            Name="Akash K."
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/akash-kalshetti-27712b252"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Sanchit_Dhale}
            Name="Sanchit Dhale"
            domain="Jt. Admin"
            linkedin="https://www.linkedin.com/in/sanchit-dhale-8a9588231"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Gunesh_Sonawane}
            Name="Gunesh S."
            domain="Jt. Admin"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Siddhesh_Khairnar}
            Name="Siddhesh K."
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/siddhesh-khairnar-4234a3226"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={HARSH}
            Name="HARSH"
            domain="Jt.Doc Head"
            linkedin="https://www.linkedin.com/in/harsh-01071b24a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Om_Dhede}
            Name="Om_Dhede"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/om-dhede-7b026122a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Ankush_Singh}
            Name="Ankush Singh"
            domain="Jt.Activity Head"
            linkedin="https://www.linkedin.com/in/ankush-singh-4721a122a"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Smit_Ramteke}
            Name="Smit Ramteke"
            domain="Jt.Dept Head"
            linkedin="https://www.linkedin.com/in/smit-ramteke-4b60b5232"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Sandesh_Buchkul}
            Name="Sandesh B."
            domain="Jt.Publicity Head"
            linkedin="https://www.linkedin.com/in/sandeshbuchkul"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Sumedh_kulkarni}
            Name="Sumedh K."
            domain="Jt.Doc Head"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Viraj_Badale}
            Name="Viraj Badale"
            domain="Jt.Design Head"
          />
          <TeamInnerSection
            className="cardcarousel"
            image={Ashish_Ruke}
            Name="Ashish Ruke"
            domain="Jt.Publicity Head"
          />
        </Carousel>
      </div>
      <FooterHeart />
    </section>
  );
};

export default TeamCard;
