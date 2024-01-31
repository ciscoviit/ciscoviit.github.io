import React from "react";
import TeamSection from "../../components/team/TeamSection";
import "../../components/team/TeamSection.css";
import "./TeamCard.css";
// import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import FooterHeart from "../footerHeart/FooterHeart";
import Nitin_Sakhare from "../../assets/TeamDocuments/Nitin_Sakhare.jpg";
import Vikas_Kolekar from "../../assets/TeamDocuments/Vikas_Kolekar.jpg";
// import Shreyas_Gavhalkar from "../../assets/TeamDocuments/Shreyas_Gavhalkar.jpg";
// import Sachi_Teke from "../../assets/TeamDocuments/Sachi_Teke.jpg";
// import Pratik_Rathod from "../../assets/TeamDocuments/Pratik_Rathod.jpg";
// import Tejaswini_Bahir from "../../assets/TeamDocuments/Tejaswini_Bahir.jpg";
import Saikumar_Padmawar from "../../assets/TeamDocuments/Saikumar_Padmawar.jpg";
// import Shrutika_Wagh from "../../assets/TeamDocuments/Shrutika_Wagh.jpg";
// import Vishnu_Jadhav from "../../assets/TeamDocuments/Vishnu_Jadhav.jpg";
// import Sayali_Sontakke from "../../assets/TeamDocuments/Sayali_Sontakke.jpg";
// import Nikhilesh_Sharma from "../../assets/TeamDocuments/Nikhilesh_Sharma.jpg";
// import Samruddhi_Nande from "../../assets/TeamDocuments/Samruddhi_Nande.jpg";
// import Yash_Akotkar from "../../assets/TeamDocuments/Yash_Akotkar.jpg";
// import Siddharth_Latthe from "../../assets/TeamDocuments/Siddharth_Latthe.jpg";
// import Rahul_Talele from "../../assets/TeamDocuments/Rahul_Talele.jpg";
import Vinayak_Pawar from "../../assets/TeamDocuments/Vinayak_Pawar.jpg";
// import Shravani_Murabatte from "../../assets/TeamDocuments/Shravani_Murabatte.jpg";
// import Shubham_Wamanacharya from "../../assets/TeamDocuments/Shubham_Wamanacharya .jpg";
// import Amey_Agrawal from "../../assets/TeamDocuments/Amey_Agrawal.jpg";
// import Lokesh_Shingavi from "../../assets/TeamDocuments/Lokesh_Shingavi.jpg";
// import Gaurav_kanade from "../../assets/TeamDocuments/Gaurav_kanade.jpg";
// import Ritesh_Lade from "../../assets/TeamDocuments/Ritesh_Lade.jpg";
// import Armaan_Shaikh from "../../assets/TeamDocuments/Armaan_Shaikh.jpg";
// import Riya_Agarwal from "../../assets/TeamDocuments/Riya_Agarwal.jpg";
// import Abhiskek_Jadhav from "../../assets/TeamDocuments/Abhishek_Jadhav.jpg";
// import Mayur_Tingare from "../../assets/TeamDocuments/Mayur_Tingare.jpg";
// import Yash_Patil from "../../assets/TeamDocuments/Yash_Patil.jpg";
import Sahil_Wagh from "../../assets/TeamDocuments/Sahil_Wagh.jpg";
import Rahul_Shelke from "../../assets/TeamDocuments/Rahul_Shelke.jpg";
// import Prathamesh_Bhaskar from "../../assets/TeamDocuments/Prathamesh_Bhaskar.jpg";
// import Arnav_Umarkar from "../../assets/TeamDocuments/Arnav_Umarkar.jpg";
import Vedant_Devre from "../../assets/TeamDocuments/Vedant_Devre.jpg";
// import Sankalp_Akkewar from "../../assets/TeamDocuments/Sankalp_Akkewar.jpg";
// import Hasan_Hussain from "../../assets/TeamDocuments/Hasan_Hussain.jpg";
import Akash_Kalshetti from "../../assets/TeamDocuments/Akash_Kalshetti.jpg";
// import Manas_Sangale from "../../assets/TeamDocuments/Manas_Sangale.jpg";
// import Sanchit_Dhale from "../../assets/TeamDocuments/Sanchit_Dhale.jpg";
// import Gunesh_Sonawane from "../../assets/TeamDocuments/Gunesh_Sonawane.jpg";
// import Siddhesh_Khairnar from "../../assets/TeamDocuments/Siddhesh_Khairnar.jpg";
// import HARSH from "../../assets/TeamDocuments/HARSH.jpg";
// import Om_Dhede from "../../assets/TeamDocuments/Om_Dhede.jpg";
// import Chaitanya_Ganjiwale from "../../assets/TeamDocuments/Chaitanya_Ganjiwale.jpg";
// import Ankush_Singh from "../../assets/TeamDocuments/Ankush_Singh.jpg";
import Smit_Ramteke from "../../assets/TeamDocuments/Smit_Ramteke.jpg";
// import Sandesh_Buchkul from "../../assets/TeamDocuments/Sandesh_Buchkul.jpg";
import Sumedh_kulkarni from "../../assets/TeamDocuments/Sumedh_kulkarni.jpg";
import Viraj_Badale from "../../assets/TeamDocuments/Viraj_Badale.jpg";
import Ashish_Ruke from "../../assets/TeamDocuments/Ashish_Ruke.jpg";
import Amol_Golhar from "../../assets/TeamDocuments/Amol_Golhar.jpg";
import Deepak_Ghume from "../../assets/TeamDocuments/Deepak_Ghume.jpg";
import Devyani_Dahake from "../../assets/TeamDocuments/Devyani_Dahake.jpg";
import Nikita_Sanap from "../../assets/TeamDocuments/Nikita_Sanap.jpg";
import Shruti_Ghodake from "../../assets/TeamDocuments/Shruti_Ghodake.jpg";
import Hrishikesh_Mahajan from "../../assets/TeamDocuments/Hrishikesh_Mahajan.jpg";

// const breakPoints = [
//   { width: 1, itemsToShow: 1, itemsToScroll: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3, itemsToScroll: 3 },
// ];

const TeamCard = () => {
  return (
    <section className="team-section" id="team">
      {/* Co-ordinators Section */}
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary ">
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

        <h2 className="page-section-heading text-center text-uppercase text-secondary ">
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
        <h2 className="page-section-heading text-center text-uppercase text-secondary ">
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
              linkedin="https://www.linkedin.com/in/sachi-teke-118469206/"
              twitter="https://twitter.com/sachi_teke"
              instagram="https://instagram.com/sachi_teke7032"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Amol_Golhar}
              Name="Amol Golhar"
              domain="Technical-Head"
              linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
              twitter="https://twitter.com/SAIKUMARPADMAW1"
              instagram="https://www.instagram.com/saikumarpadmawar/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Hrishikesh_Mahajan}
              Name="Hrishikesh Mahajan"
              domain="Technical-Head"
              linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
              twitter="https://twitter.com/SAIKUMARPADMAW1"
              instagram="https://www.instagram.com/saikumarpadmawar/"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Sahil_Wagh}
              Name="Sahil Wagh"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/pratik-rathod-10a522208"
              twitter="https://twitter.com/cyph3r_s"
              instagram="https://www.instagram.com/pratik_rathod_1/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Shruti_Ghodake}
              Name="Shruti Ghodake"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/pratik-rathod-10a522208"
              twitter="https://twitter.com/cyph3r_s"
              instagram="https://www.instagram.com/pratik_rathod_1/"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Rahul_Shelke}
              Name="Rahul Shelke"
              domain="IR-Head"
              linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210"
              instagram="https://instagram.com/tej_b01/"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Deepak_Ghume}
              Name="Deepak Ghume"
              domain="Design-Head"
              linkedin="https://www.linkedin.com/in/sayali-sontakke-a8119a209"
              twitter="https://www.twitter.com/Sayaliii_s"
              instagram="https://www.instagram.com/sayaliii.s_"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Devyani_Dahake}
              Name="Devyani Dahake"
              domain="Documentation & content-Head"
              linkedin="https://www.linkedin.com/in/sayali-sontakke-a8119a209"
              twitter="https://www.twitter.com/Sayaliii_s"
              instagram="https://www.instagram.com/sayaliii.s_"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Nikita_Sanap}
              Name="Nikita Sanap"
              domain="Activily-Head"
              linkedin="https://www.linkedin.com/in/sayali-sontakke-a8119a209"
              twitter="https://www.twitter.com/Sayaliii_s"
              instagram="https://www.instagram.com/sayaliii.s_"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Vedant_Devre}
              Name="Vedant Devre"
              domain="IT Department-Head "
              linkedin="Https://www.linkedin.com/mwlite/in/vishnujadhav"
              twitter="https://twitter.com/vj_5501/status/1586284985656365056"
              instagram="https://instagram.com/vj_5501"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Smit_Ramteke}
              Name="Smit Ramteke"
              domain="Comp Department-Head"
              linkedin="https://www.linkedin.com/in/nikhilesh-sharma-/"
              instagram="https://www.instagram.com/_nikhileshsharma_/"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Viraj_Badale}
              Name="Viraj Badale"
              domain="EN&TC Department-Head"
              linkedin="https://www.linkedin.com/in/nikhilesh-sharma-/"
              instagram="https://www.instagram.com/_nikhileshsharma_/"
            />
          </div>

          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Ashish_Ruke}
              Name="Ashish Ruke"
              domain="AI&DS Department-Head"
              linkedin="https://www.linkedin.com/in/nikhilesh-sharma-/"
              instagram="https://www.instagram.com/_nikhileshsharma_/"
            />
          </div>

          {/* updated content */}
        </div>
      </div>

      {/* SY-Committee Section */}
      {/* <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary ">
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
