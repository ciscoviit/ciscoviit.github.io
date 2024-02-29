import React from "react";
import Carousel from "react-elastic-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamSection from "../../components/team/TeamSection";
import "../../components/team/TeamSection.css";
import FooterHeart from "../footerHeart/FooterHeart";
import "./TeamCard.css";
// Importing Images
// Faculty Co-ordinators
import Nitin_Sakhare from "../../assets/TeamDocuments/Nitin_Sakhare.jpg";
import Vikas_Kolekar from "../../assets/TeamDocuments/Vikas_Kolekar.jpg";
// TY Committee
import Shreyas_Gavhalkar from "../../assets/TeamDocuments/Shreyas_Gavhalkar.jpg";
import Sachi_Teke from "../../assets/TeamDocuments/Sachi_Teke.jpg";
import Pratik_Rathod from "../../assets/TeamDocuments/Pratik_Rathod.jpg";
import Tejaswini_Bahir from "../../assets/TeamDocuments/Tejaswini_Bahir.jpg";
import Saikumar_Padmawar from "../../assets/TeamDocuments/Saikumar_Padmawar.jpg";
import Shrutika_Wagh from "../../assets/TeamDocuments/Shrutika_Wagh.jpg";
import Vishnu_Jadhav from "../../assets/TeamDocuments/Vishnu_Jadhav.jpg";
import Sayali_Sontakke from "../../assets/TeamDocuments/Sayali_Sontakke.jpg";
import Nikhilesh_Sharma from "../../assets/TeamDocuments/Nikhilesh_Sharma.jpg";
import Samruddhi_Nande from "../../assets/TeamDocuments/Samruddhi_Nande.jpg";
import Yash_Akotkar from "../../assets/TeamDocuments/Yash_Akotkar.jpg";
import Siddharth_Latthe from "../../assets/TeamDocuments/Siddharth_Latthe.jpg";
import Rahul_Talele from "../../assets/TeamDocuments/Rahul_Talele.jpg";
import Vinayak_Pawar from "../../assets/TeamDocuments/Vinayak_Pawar.jpg";
import Shravani_Murabatte from "../../assets/TeamDocuments/Shravani_Murabatte.jpg";
import Shubham_Wamanacharya from "../../assets/TeamDocuments/Shubham_Wamanacharya .jpg";
import Amey_Agrawal from "../../assets/TeamDocuments/Amey_Agrawal.jpg";
import Lokesh_Shingavi from "../../assets/TeamDocuments/Lokesh_Shingavi.jpg";
import Gaurav_kanade from "../../assets/TeamDocuments/Gaurav_kanade.jpg";
import Ritesh_Lade from "../../assets/TeamDocuments/Ritesh_Lade.jpg";
import Armaan_Shaikh from "../../assets/TeamDocuments/Armaan_Shaikh.jpg";
// SY Committee
import Riya_Agarwal from "../../assets/TeamDocuments/Riya_Agarwal.jpg";
import Abhiskek_Jadhav from "../../assets/TeamDocuments/Abhishek_Jadhav.jpg";
import Mayur_Tingare from "../../assets/TeamDocuments/Mayur_Tingare.jpg";
import Yash_Patil from "../../assets/TeamDocuments/Yash_Patil.jpg";
import Sahil_Wagh from "../../assets/TeamDocuments/Sahil_Wagh.jpg";
import Rahul_Shelke from "../../assets/TeamDocuments/Rahul_Shelke.jpg";
import Prathamesh_Bhaskar from "../../assets/TeamDocuments/Prathamesh_Bhaskar.jpg";
import Arnav_Umarkar from "../../assets/TeamDocuments/Arnav_Umarkar.jpg";
import Vedant_Devre from "../../assets/TeamDocuments/Vedant_Devre.jpg";
import Sankalp_Akkewar from "../../assets/TeamDocuments/Sankalp_Akkewar.jpg";
import Hasan_Hussain from "../../assets/TeamDocuments/Hasan_Hussain.jpg";
import Akash_Kalshetti from "../../assets/TeamDocuments/Akash_Kalshetti.jpg";
import Manas_Sangale from "../../assets/TeamDocuments/Manas_Sangale.jpg";
import Sanchit_Dhale from "../../assets/TeamDocuments/Sanchit_Dhale.jpg";
import Gunesh_Sonawane from "../../assets/TeamDocuments/Gunesh_Sonawane.jpg";
import Siddhesh_Khairnar from "../../assets/TeamDocuments/Siddhesh_Khairnar.jpg";
import HARSH from "../../assets/TeamDocuments/HARSH.jpg";
import Om_Dhede from "../../assets/TeamDocuments/Om_Dhede.jpg";
import Chaitanya_Ganjiwale from "../../assets/TeamDocuments/Chaitanya_Ganjiwale.jpg";
import Ankush_Singh from "../../assets/TeamDocuments/Ankush_Singh.jpg";
import Smit_Ramteke from "../../assets/TeamDocuments/Smit_Ramteke.jpg";
import Sandesh_Buchkul from "../../assets/TeamDocuments/Sandesh_Buchkul.jpg";
import Sumedh_kulkarni from "../../assets/TeamDocuments/Sumedh_kulkarni.jpg";
import Viraj_Badale from "../../assets/TeamDocuments/Viraj_Badale.jpg";
import Ashish_Ruke from "../../assets/TeamDocuments/Ashish_Ruke.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
];

const TeamCard = () => {
  return (
    <section className="team-section" id="team">
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
              instagram="https://instagram.com/nitinsakhare4?igshid=YmMyMTA2M2Y="
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              image={Vikas_Kolekar}
              Name="Vikas Kolekar"
              domain="Professor"
              linkedin="https://www.linkedin.com/in/vikas-kolekar"
              twitter="https://twitter.com/KolekarVikas279"
              instagram="https://instagram.com/kolekarvikas279?igshid=YmMyMTA2M2Y="
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          TY-Committee
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Shreyas_Gavhalkar}
              Name="Shreyas Gavhalkar"
              domain="President"
              linkedin="https://www.linkedin.com/in/shreyas-gavhalkar-a8b0bb206"
              instagram="www.instagram.com/__shreyas__19"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Sachi_Teke}
              Name="Sachi Teke"
              domain="Vice-President"
              linkedin="https://www.linkedin.com/in/sachi-teke-118469206/"
              twitter="https://twitter.com/sachi_teke"
              instagram="https://instagram.com/sachi_teke7032"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Pratik_Rathod}
              Name="Pratik Rathod"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/pratik-rathod-10a522208"
              twitter="https://twitter.com/cyph3r_s"
              instagram="https://www.instagram.com/pratik_rathod_1/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Tejaswini_Bahir}
              Name="Tejaswini Bahir"
              domain="IR-Head"
              linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210"
              instagram="https://instagram.com/tej_b01/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Saikumar_Padmawar}
              Name="Saikumar Padmawar"
              domain="Technical-Head"
              linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
              twitter="https://twitter.com/SAIKUMARPADMAW1"
              instagram="https://www.instagram.com/saikumarpadmawar/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Shrutika_Wagh}
              Name="Shrutika Wagh"
              domain="Publicity-Head"
              linkedin="https://www.linkedin.com/in/shrutika-wagh-65b907199"
              instagram="https://www.instagram.com/shrutika_53/"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Vishnu_Jadhav}
              Name="Vishnu Jadhav"
              domain="Department-Head "
              linkedin="Https://www.linkedin.com/mwlite/in/vishnujadhav"
              twitter="https://twitter.com/vj_5501/status/1586284985656365056?t=k6UOBLD4QD7rk3JC51I8gQ&s=19"
              instagram="https://instagram.com/vj_5501?igshid=YmMyMTA2M2Y="
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Sayali_Sontakke}
              Name="Sayali Sontakke"
              domain="Design-Head"
              linkedin="https://www.linkedin.com/in/sayali-sontakke-a8119a209"
              twitter="https://www.twitter.com/Sayaliii_s?t=0wEAcycyR-7Aecvhp4B9OA&s=08"
              instagram="https://www.instagram.com/sayaliii.s_?igshid=ZDdkNTZiNTM="
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <TeamSection
              Tag={<i className="fas fa-code"></i>}
              image={Nikhilesh_Sharma}
              Name="Nikhilesh Sharma"
              domain="Department-Head"
              linkedin="https://www.linkedin.com/in/nikhilesh-sharma-/"
              instagram="https://www.instagram.com/_nikhileshsharma_/"
            />
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <TeamSection
            className="cardcarousel"
            image={Samruddhi_Nande}
            Name="Samruddhi N."
            domain="Technical Head"
            linkedin="http://www.linkedin.com/in/samruddhi-nande-35b0b6206"
            twitter="https://twitter.com/NandeSamruddhi"
            instagram="https://www.instagram.com/__samruddhi07/"
          />
          <TeamSection
            className="cardcarousel"
            image={Yash_Akotkar}
            Name="Yash Akotkar"
            domain="Design-Head"
            linkedin="https://www.linkedin.com/in/yash-akotkar-9350ba214"
            instagram="https://www.instagram.com/invites/contact/?i=n3ae3z845okv&utm_content=hlfwqgr"
          />
          <TeamSection
            className="cardcarousel"
            image={Siddharth_Latthe}
            Name="Siddharth L."
            domain="Content Head"
            linkedin="https://www.linkedin.com/in/siddharth-latthe-4ab69a213"
            instagram="https://instagram.com/sidd_latthe?igshid=ZDdkNTZiNTM="
          />
          <TeamSection
            className="cardcarousel"
            image={Rahul_Talele}
            Name="Rahul Talele"
            domain="Admin"
          />
          <TeamSection
            className="cardcarousel"
            image={Vinayak_Pawar}
            Name="Vinayak Pawar"
            domain="Admin"
            linkedin="https://www.linkedin.com/in/vinayak-pawar-17133a212"
            instagram="https://www.instagram.com/we_nayak.08/"
          />
          <TeamSection
            className="cardcarousel"
            image={Shravani_Murabatte}
            Name="Shravani M."
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/shravani-murabatte-518a80176/"
            instagram="https://www.instagram.com/mshrau_28/"
          />
          <TeamSection
            className="cardcarousel"
            image={Shubham_Wamanacharya}
            Name="Shubham W."
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/shubham-wamanacharya-420750227/"
            twitter="https://mobile.twitter.com/ShubhamPW2911"
            instagram="https://www.instagram.com/shubham_wamanacharya/"
          />
          <TeamSection
            className="cardcarousel"
            image={Amey_Agrawal}
            Name="Amey Agarwal"
            domain="Doc-Head"
            linkedin="https://www.linkedin.com/in/amey-agrawal-9a0b66213"
            instagram="https://instagram.com/i_m_amey?igshid=YmMyMTA2M2Y="
          />
          <TeamSection
            className="cardcarousel"
            image={Lokesh_Shingavi}
            Name="Lokesh S."
            domain="IR-Head"
            linkedin="https://www.linkedin.com/in/lokesh-shingvi-b270b421a"
            instagram="https://www.instagram.com/lokesh_shingvi/"
            twitter="https://twitter.com/LokeshShingvi?t=xKbSSdWcasZ7mGxNckznFw&s=09"
          />
          <TeamSection
            className="cardcarousel"
            image={Gaurav_kanade}
            Name="Gaurav Kanade"
            domain="Dept-Head"
          />
          <TeamSection
            className="cardcarousel"
            image={Ritesh_Lade}
            Name="Rithesh Lade"
            domain="Dept-Head"
            linkedin="https://www.linkedin.com/in/ritesh-lade-669263200"
            instagram="https://instagram.com/ritesh.lade?igshid=YmMyMTA2M2Y="
          />
          <TeamSection
            className="cardcarousel"
            image={Armaan_Shaikh}
            Name="Armaan Shaikh"
            domain="Dept-Head"
            linkedin="https://www.linkedin.com/in/armaan-shaikh-23b9141a5"
            instagram="https://www.instagram.com/armaaaaan.__/"
          />
          <TeamSection
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
      </div>
      <FooterHeart />
    </section>
  );
};

export default TeamCard;
