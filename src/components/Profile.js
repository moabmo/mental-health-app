import React, { useState } from 'react';
import styled from 'styled-components';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lover of life and mental health enthusiast.',
  });

  return (
    <ProfileContainer>
      <h2>Profile</h2>
      <ProfileDetails>
        <ProfileItem>
          <strong>Name:</strong> {user.name}
        </ProfileItem>
        <ProfileItem>
          <strong>Email:</strong> {user.email}
        </ProfileItem>
        <ProfileItem>
          <strong>Bio:</strong> {user.bio}
        </ProfileItem>
        <Button>Edit Profile</Button>
      </ProfileDetails>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const ProfileDetails = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileItem = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  margin: 0 10px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #2980b9;
  }
`;

export default Profile;
