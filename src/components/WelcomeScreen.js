import React from 'react';
import styled from 'styled-components';

const WelcomeScreen = () => {
  return (
    <WelcomeContainer>
      <Hero>
        <h1>Welcome to MindPeace</h1>
        <p>Your companion in managing stress and improving mental health</p>
        <ButtonGroup>
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </ButtonGroup>
      </Hero>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: #fff;
`;

const Hero = styled.div`
  text-align: center;
  max-width: 600px;
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
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
  border-radius: 5px;
  &:hover {
    background: #2980b9;
  }
`;

export default WelcomeScreen;
