import React, { useState } from 'react';
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
  const [numTeamMembers, setNumTeamMembers] = useState(1);
  const [teamMembers, setTeamMembers] = useState([]);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const maxTeamMembers = 5;
  const allowedTeamMembers = ['John', 'Jane', 'Bob', 'Sue'];
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

  const handleAddMember = () => {
    if (teamMembers.length < maxTeamMembers) {
      const newTeamMember = teamMembers[teamMembers.length - 1].name;
      if (allowedTeamMembers.includes(newTeamMember)) {
        handleAddClick();
      } else {
        alert('Sorry, that team member is not allowed.');
      }
      } 
    else {
      alert(`Sorry, you can only have up to ${maxTeamMembers} team members.`);
    }
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
      alert('Team registration successful');
      setRegistrationComplete(true);
    })
    .catch((error) => {
      console.error('Error registering team: ', error);
    });

    if (registrationComplete) {
      return null; // don't render anything
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="teamName">Team Name:</label>
        <input type="text" id="teamName" name="teamName" value={teamName} onChange={(event) => setTeamName(event.target.value)} required />

        <label htmlFor="captainName">Captain Name:</label>
        <input type="text" id="captainName" name="captainName" value={captainName} onChange={(event) => setCaptainName(event.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />

        <label>Number of Team Members:</label>
        <input
          type="number"
          value={numTeamMembers}
          onChange={(event) => setNumTeamMembers(parseInt(event.target.value))}
          min="1"
          max={maxTeamMembers}
        />
        {teamMembers.map((teamMember, index) => (
        <div key={index}>
          <label>Team member #{index + 1}:</label>
          <input
            type="text"
            name="name"
            value={teamMember.name}
            onChange={(event) => handleInputChange(event, index)}
          />
        </div>
      ))}
       <button type="button" onClick={handleAddMember}>
        Add another team member
      </button>
        <button type="submit">Register Team</button>
      </form>

      {registrationComplete && <p>Registration complete!</p>}
    </div>
  );
};

export default TeamRegistrationForm;