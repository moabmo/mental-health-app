import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/mood-tracker">Mood Tracker</NavLink>
      <NavLink to="/resources">Resources</NavLink>
      <NavLink to="/meditations">Meditations</NavLink>
      <NavLink to="/community">Community</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: #3498db;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
