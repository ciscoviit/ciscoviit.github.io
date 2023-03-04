import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './EventRegistrationForm.css';

const firebaseConfig = {
  apiKey: "AIzaSyCxMsy0vG5Y4J7jvlhmvzFsfF_cWgWYir0",
  authDomain: "netacad-7098b.firebaseapp.com",
  projectId: "netacad-7098b",
  storageBucket: "netacad-7098b.appspot.com",
  messagingSenderId: "49905148387",
  appId: "1:49905148387:web:9140eb2891ac5f117200d6",
  measurementId: "G-JVSDS8W367"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const TeamRegistrationForm = () => {
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [numteamMembers, setNumTeamMembers] = useState(1);
  const [teamMembers, setTeamMembers] = useState([]);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...teamMembers];
    list[index][name] = value;
    setTeamMembers(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...teamMembers];
    list.splice(index, 1);
    setTeamMembers(list);
  };

  const handleAddClick = () => {
    setTeamMembers([...teamMembers, { name: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const teamRef = db.collection('teams').doc();
    teamRef.set({
      teamName,
      captainName,
      email,
      phone,
      teamMembers
    })
      .then(() => {
        console.log('Team registration successful');
        window.location.replace("./");
        setRegistrationComplete(true);
      })
      .catch((error) => {
        console.error('Error registering team: ', error);
      });
  };
  useEffect(() => {
    if (registrationComplete) {
      alert('Registration successful!');
    }
  }, [registrationComplete]);

  return (
    <div>
      
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
        <div className="formbold-form-label text-center">
        <h2>Event Registration Form</h2>
      </div>
          <form onSubmit={handleSubmit}>
            <div className="formbold-mb-5">
              <label className="formbold-form-label" htmlFor="teamName">Team Name:</label>
              <input type="text" id="teamName" name="teamName" className="formbold-form-input" value={teamName} onChange={(event) => setTeamName(event.target.value)} required />
            </div>

            <div className="formbold-mb-5">
              <label className="formbold-form-label" htmlFor="captainName">Captain Name:</label>
              <input type="text" id="captainName" className="formbold-form-input"  name="captainName" value={captainName} onChange={(event) => setCaptainName(event.target.value)} required />
            </div>

            <div className="formbold-mb-5">
              <label className="formbold-form-label" htmlFor="email">Email:</label>
              <input type="email" id="email" className="formbold-form-input" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>

            <div className="formbold-mb-5">
              <label className="formbold-form-label" htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" className="formbold-form-input" value={phone} onChange={(event) => setPhone(event.target.value)} required />
            </div>

            <div className="formbold-mb-5">
              <label className="formbold-form-label">Team Members:</label>
              {teamMembers.map((teamMember, index) => {
                return (
                  <div key={index}>
                    <input type="text" className="formbold-form-input1" name="name" value={teamMember.name} onChange={(event) => handleInputChange(event, index)} required />
                    {teamMembers.length > 1 && <button className="formbold-btn" type="button" onClick={() => handleRemoveClick(index)}>Remove</button>}
                  </div>
                );
              })}
            </div>

            <div>
              <input className="formbold-btn" type="submit" value="Add Member" onClick={handleAddClick} />
              <input type="submit" className="formbold-btn" value="Register Team" />
            </div>
            {/* <button type="button" onClick={handleAddClick}>Add Member</button> */}

            {/* <button type="submit">Register Team</button> */}
          </form>
          <div>
          {/* <p>Registration successful!</p> */}
          {/* <img className='center' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/444px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="Pay Here" /> */}
        </div>

          {registrationComplete &&<script>alert('registration complete');</script>}
        </div>
      </div>
    </div>
  );
};

export default TeamRegistrationForm;