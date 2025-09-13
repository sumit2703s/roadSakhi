import React from 'react';
import './Profile.css'; // Make sure to create and import a CSS file for styling
import user from '../../assets/user.svg'

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={user} alt="User Avatar" className="user-icon" />
      <p className="user-name"> name: aradhya yadav</p>
      <p className="user-email">email: aradhyay868@gmail.com</p>
      <button className="logout-button">Log Out</button>
    </div>
  );
};

export default Profile;
 