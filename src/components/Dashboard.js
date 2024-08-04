import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <WelcomeMessage>Welcome back, John!</WelcomeMessage>
      <Overview>
        <Card>
          <h3>Mood Entries</h3>
          <p>Last entry: Happy</p>
        </Card>
        <Card>
          <h3>Meditation Progress</h3>
          <p>Completed: 5 sessions</p>
        </Card>
      </Overview>
      <QuickAccess>
        <Button>Track Mood</Button>
        <Button>Guided Meditations</Button>
        <Button>Read Articles</Button>
      </QuickAccess>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const WelcomeMessage = styled.h1`
  color: #2c3e50;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 45%;
  text-align: center;
  h3 {
    margin-bottom: 10px;
    color: #3498db;
  }
`;

const QuickAccess = styled.div`
  display: flex;
  justify-content: space-around;
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

export default Dashboard;
