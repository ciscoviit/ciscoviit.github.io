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
// TY Committee
import Shreyas_Gavhalkar from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shreyas_Gavhalkar.jpg";
import Sachi_Teke from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Sachi_Teke.jpg";
import Pratik_Rathod from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Pratik_Rathod.jpg";
import Tejaswini_Bahir from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Tejaswini_Bahir.jpg";
import Saikumar_Padmawar from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Saikumar_Padmawar.jpg";
import Shrutika_Wagh from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shrutika_Wagh.jpg";
import Vishnu_Jadhav from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Vishnu_Jadhav.jpg";
import Sayali_Sontakke from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Sayali_Sontakke.jpg";
import Nikhilesh_Sharma from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Nikhilesh_Sharma.jpg";
import Samruddhi_Nande from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Samruddhi_Nande.jpg";
import Yash_Akotkar from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Yash_Akotkar.jpg";
import Siddharth_Latthe from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Siddharth_Latthe.jpg";
import Rahul_Talele from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Rahul_Talele.jpg";
import Vinayak_Pawar from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Vinayak_Pawar.jpg";
import Shravani_Murabatte from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shravani_Murabatte.jpg";
import Shubham_Wamanacharya from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Shubham_Wamanacharya.jpg";
import Amey_Agrawal from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Amey_Agrawal.jpg";
import Lokesh_Shingavi from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Lokesh_Shingavi.jpg";
import Gaurav_kanade from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Gaurav_kanade.jpg";
import Ritesh_Lade from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Ritesh_Lade.jpg";
import Armaan_Shaikh from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Armaan_Shaikh.jpg";
import Manas_Sangale from "../../assets/TeamDocuments/Committee-22-23/TY-Committee/Manas_Sangale.jpg";
// SY Committee
import Riya_Agarwal from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Riya_Agarwal.jpg";
import Abhiskek_Jadhav from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Abhishek_Jadhav.jpg";
import Mayur_Tingare from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Mayur_Tingare.jpg";
import Yash_Patil from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Yash_Patil.jpg";
import Sahil_Wagh from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sahil_Wagh.jpg";
import Rahul_Shelke from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Rahul_Shelke.jpg";
import Prathamesh_Bhaskar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Prathamesh_Bhaskar.jpg";
import Arnav_Umarkar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Arnav_Umarkar.jpg";
import Vedant_Devre from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Vedant_Devre.jpg";
import Sankalp_Akkewar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sankalp_Akkewar.jpg";
import Hasan_Hussain from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Hasan_Hussain.jpg";
import Akash_Kalshetti from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Akash_Kalshetti.jpg";
import Sanchit_Dhale from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sanchit_Dhale.jpg";
import Gunesh_Sonawane from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Gunesh_Sonawane.jpg";
import Siddhesh_Khairnar from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Siddhesh_Khairnar.jpg";
import HARSH from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/HARSH.jpg";
import Om_Dhede from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Om_Dhede.jpg";
import Chaitanya_Ganjiwale from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Chaitanya_Ganjiwale.jpg";
import Ankush_Singh from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Ankush_Singh.jpg";
import Smit_Ramteke from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Smit_Ramteke.jpg";
import Sandesh_Buchkul from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sandesh_Buchkul.jpg";
import Sumedh_kulkarni from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Sumedh_kulkarni.jpg";
import Viraj_Badale from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Viraj_Badale.jpg";
import Ashish_Ruke from "../../assets/TeamDocuments/Committee-22-23/SY-Committee/Ashish_Ruke.jpg";

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
          <TeamSection
            image={Nitin_Sakhare}
            Name="Nitin Sakhare"
            domain="Professor"
            linkedin="https://www.linkedin.com/in/nitin-sakhare-b2485383"
            twitter="https://twitter.com/NitinSakhare16"
            instagram="https://instagram.com/nitinsakhare4"
          />
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
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          TY-Committee
        </h2>
        <div className="row justify-content-center">
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Shreyas_Gavhalkar}
            Name="Shreyas Gavhalkar"
            domain="President"
            linkedin="https://www.linkedin.com/in/shreyas-gavhalkar-a8b0bb206"
            instagram="www.instagram.com/__shreyas__19"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Sachi_Teke}
            Name="Sachi Teke"
            domain="Vice-President"
            linkedin="https://www.linkedin.com/in/sachi-teke-118469206"
            twitter="https://twitter.com/sachi_teke"
            instagram="https://instagram.com/sachi_teke7032"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Pratik_Rathod}
            Name="Pratik Rathod"
            domain="Publicity-Head"
            linkedin="https://www.linkedin.com/in/pratik-rathod-10a522208"
            twitter="https://twitter.com/cyph3r_s"
            instagram="https://www.instagram.com/pratik_rathod_1"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Tejaswini_Bahir}
            Name="Tejaswini Bahir"
            domain="IR-Head"
            linkedin="https://www.linkedin.com/in/tejaswini-bahir-b6b401210"
            instagram="https://instagram.com/tej_b01"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Saikumar_Padmawar}
            Name="Saikumar Padmawar"
            domain="Technical-Head"
            linkedin="http://www.linkedin.com/in/saikumar-padmawar-0bab9b21b"
            twitter="https://twitter.com/SAIKUMARPADMAW1"
            instagram="https://www.instagram.com/saikumarpadmawar"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Shrutika_Wagh}
            Name="Shrutika Wagh"
            domain="Publicity-Head"
            linkedin="https://www.linkedin.com/in/shrutika-wagh-65b907199"
            instagram="https://www.instagram.com/shrutika_53"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Vishnu_Jadhav}
            Name="Vishnu Jadhav"
            domain="Department-Head "
            linkedin="Https://www.linkedin.com/in/vishnujadhav"
            twitter="https://twitter.com/vj_5501"
            instagram="https://instagram.com/vj_5501"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Sayali_Sontakke}
            Name="Sayali Sontakke"
            domain="Design-Head"
            linkedin="https://www.linkedin.com/in/sayali-sontakke-a8119a209"
            twitter="https://www.twitter.com/Sayaliii_s"
            instagram="https://www.instagram.com/sayaliii.s_"
          />
          <TeamSection
            Tag={<i className="fas fa-code"></i>}
            image={Nikhilesh_Sharma}
            Name="Nikhilesh Sharma"
            domain="Department-Head"
            linkedin="https://www.linkedin.com/in/nikhilesh-sharma-"
            instagram="https://www.instagram.com/_nikhileshsharma_"
          />
        </div>
        <Carousel breakPoints={breakPoints}>
          <TeamInnerSection
            image={Samruddhi_Nande}
            Name="Samruddhi N."
            domain="Technical Head"
            linkedin="http://www.linkedin.com/in/samruddhi-nande-35b0b6206"
            twitter="https://twitter.com/NandeSamruddhi"
            instagram="https://www.instagram.com/__samruddhi07"
          />
          <TeamInnerSection
            image={Yash_Akotkar}
            Name="Yash Akotkar"
            domain="Design-Head"
            linkedin="https://www.linkedin.com/in/yash-akotkar-9350ba214"
          />
          <TeamInnerSection
            image={Siddharth_Latthe}
            Name="Siddharth L."
            domain="Content Head"
            linkedin="https://www.linkedin.com/in/siddharth-latthe-4ab69a213"
            instagram="https://instagram.com/sidd_latthe"
          />
          <TeamInnerSection
            image={Rahul_Talele}
            Name="Rahul Talele"
            domain="Admin"
          />
          <TeamInnerSection
            image={Vinayak_Pawar}
            Name="Vinayak Pawar"
            domain="Admin"
            linkedin="https://www.linkedin.com/in/vinayak-pawar-17133a212"
            instagram="https://www.instagram.com/we_nayak.08"
          />
          <TeamInnerSection
            image={Shravani_Murabatte}
            Name="Shravani M."
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/shravani-murabatte-518a80176"
            instagram="https://www.instagram.com/mshrau_28"
          />
          <TeamInnerSection
            image={Shubham_Wamanacharya}
            Name="Shubham W."
            domain="Activity Head"
            linkedin="https://www.linkedin.com/in/shubham-wamanacharya-420750227"
            twitter="https://mobile.twitter.com/ShubhamPW2911"
            instagram="https://www.instagram.com/shubham_wamanacharya"
          />
          <TeamInnerSection
            image={Amey_Agrawal}
            Name="Amey Agarwal"
            domain="Doc-Head"
            linkedin="https://www.linkedin.com/in/amey-agrawal-9a0b66213"
            instagram="https://instagram.com/i_m_amey"
          />
          <TeamInnerSection
            image={Lokesh_Shingavi}
            Name="Lokesh S."
            domain="IR-Head"
            linkedin="https://www.linkedin.com/in/lokesh-shingvi-b270b421a"
            instagram="https://www.instagram.com/lokesh_shingvi"
            twitter="https://twitter.com/LokeshShingvi"
          />
          <TeamInnerSection
            image={Gaurav_kanade}
            Name="Gaurav Kanade"
            domain="Dept-Head"
          />
          <TeamInnerSection
            image={Ritesh_Lade}
            Name="Rithesh Lade"
            domain="Dept-Head"
            linkedin="https://www.linkedin.com/in/ritesh-lade-669263200"
            instagram="https://instagram.com/ritesh.lade"
          />
          <TeamInnerSection
            image={Armaan_Shaikh}
            Name="Armaan Shaikh"
            domain="Dept-Head"
            linkedin="https://www.linkedin.com/in/armaan-shaikh-23b9141a5"
            instagram="https://www.instagram.com/armaaaaan.__"
          />
          <TeamInnerSection
            image={Manas_Sangale}
            Name="Manas Sangale"
            domain="Jt. Dept-Head"
            linkedin="https://www.linkedin.com/in/manas-sangale-47a209217"
            instagram="https://instagram.com/___manas_12"
          />
        </Carousel>
      </div>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary">
          SY-Committee
        </h2>
        <Carousel breakPoints={breakPoints}>
          <TeamInnerSection
            image={Riya_Agarwal}
            Name="Riya Agarwal"
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/riya-agarwal-a9285b229"
          />
          <TeamInnerSection
            image={Abhiskek_Jadhav}
            Name="Abhishek J."
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/abhishek-jadhav-161b8b250"
          />
          <TeamInnerSection
            image={Mayur_Tingare}
            Name="Mayur Tingare"
            domain="Jt. Activity Head"
            linkedin="https://www.linkedin.com/in/tingare-mayur-b2642122a"
            instagram="https://www.instagram.com/_itz_mayur_26"
          />
          <TeamInnerSection
            image={Yash_Patil}
            Name="Yash Patil"
            domain="Design Team"
            linkedin="https://www.linkedin.com/in/yash-patil-2a728122b"
          />
          <TeamInnerSection
            image={Sahil_Wagh}
            Name="Sahil Wagh"
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/sahil-wagh-73b9a7240"
            instagram="https://www.instagram.com/its_me_sahilwagh"
          />
          />
          <TeamInnerSection
            image={Rahul_Shelke}
            Name="Rahul Shelke"
            domain="Jt. Content Head"
            linkedin="https://www.linkedin.com/in/rahul-shelke-457841227"
            twitter="https://twitter.com/Mr_RahulShelke"
            instagram="https://www.instagram.com/mr_rahulshelke"
          />
          <TeamInnerSection
            image={Prathamesh_Bhaskar}
            Name="Prathamesh B."
            domain="Video Editor"
            linkedin="https://www.linkedin.com/in/prathamesh-bhaskar-9b738822a"
          />
          <TeamInnerSection
            image={Arnav_Umarkar}
            Name="Arnav Umarkar"
            domain="Content Writing"
            linkedin="https://www.linkedin.com/in/arnav-umarkar-0191a7252"
          />
          <TeamInnerSection
            image={Vedant_Devre}
            Name="Vedant Devre"
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/vedant-devre"
          />
          <TeamInnerSection
            image={Sankalp_Akkewar}
            Name="Sankalp A."
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/sankalp-akkewar-614b8822a"
          />
          <TeamInnerSection
            image={Hasan_Hussain}
            Name="Hasan Hussain"
            domain="Jt. Activity Head"
            linkedin="https://www.linkedin.com/in/hasan-hussain-3481a722a"
          />
          <TeamInnerSection
            image={Akash_Kalshetti}
            Name="Akash K."
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/akash-kalshetti-27712b252"
            instagram="https://www.instagram.com/kalshetti_akash"
          />
          <TeamInnerSection
            image={Sanchit_Dhale}
            Name="Sanchit Dhale"
            domain="Jt. Admin"
            linkedin="https://www.linkedin.com/in/sanchit-dhale-8a9588231"
            twitter="https://twitter.com/sanchez_1711"
            instagram="https://www.instagram.com/sanchit_dhale_17_"
          />
          <TeamInnerSection
            image={Gunesh_Sonawane}
            Name="Gunesh S."
            domain="Jt. Admin"
          />
          <TeamInnerSection
            image={Siddhesh_Khairnar}
            Name="Siddhesh K."
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/siddhesh-khairnar-4234a3226"
          />
          <TeamInnerSection
            image={HARSH}
            Name="HARSH"
            domain="Jt. Doc Head"
            linkedin="https://www.linkedin.com/in/harsh-01071b24a"
          />
          <TeamInnerSection
            image={Om_Dhede}
            Name="Om_Dhede"
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/om-dhede-7b026122a"
          />
          <TeamInnerSection
            image={Chaitanya_Ganjiwale}
            Name="Chaitanya G."
            domain="Tech Team"
            linkedin="https://www.linkedin.com/in/chaitanya-ganjiwale-77a61a229"
          />
          <TeamInnerSection
            image={Ankush_Singh}
            Name="Ankush Singh"
            domain="Jt. Activity Head"
            linkedin="https://www.linkedin.com/in/ankush-singh-4721a122a"
          />
          <TeamInnerSection
            image={Smit_Ramteke}
            Name="Smit Ramteke"
            domain="Jt. Dept Head"
            linkedin="https://www.linkedin.com/in/smit-ramteke-4b60b5232"
            instagram="https://www.instagram.com/smit.__.ramteke"
          />
          <TeamInnerSection
            image={Sandesh_Buchkul}
            Name="Sandesh B."
            domain="Jt. Publicity Head"
            linkedin="https://www.linkedin.com/in/sandeshbuchkul"
          />
          <TeamInnerSection
            image={Sumedh_kulkarni}
            Name="Sumedh K."
            domain="Jt. Doc Head"
            linkedin="https://www.linkedin.com/in/sumedh-kulkarni-080235245"
            twitter="https://twitter.com/sumedh_2103"
            instagram="https://www.instagram.com/sumedhk_2103"
          />
          <TeamInnerSection
            image={Viraj_Badale}
            Name="Viraj Badale"
            domain="Jt. Design Head"
            linkedin="https://www.linkedin.com/in/viraj-badale-731216229"
            instagram="https://www.instagram.com/viraj_11_2020"
          />
          <TeamInnerSection
            image={Ashish_Ruke}
            Name="Ashish Ruke"
            domain="Jt. Publicity Head"
            linkedin="https://www.linkedin.com/in/ashish-ruke-68a038230"
            instagram="https://www.instagram.com/ashishruke99"
          />
        </Carousel>
      </div>
      <FooterHeart />
    </section>
  );
};

export default TeamCard;
