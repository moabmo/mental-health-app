import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Meditations = () => {
  const [sessions, setSessions] = useState([
    { id: 1, title: 'Guided Meditation for Relaxation', audioUrl: '/audio/meditation1.mp3' },
    { id: 2, title: 'Stress Relief Meditation', audioUrl: '/audio/meditation2.mp3' },
    { id: 3, title: 'Mindfulness Meditation', audioUrl: '/audio/meditation3.mp3' },
    { id: 4, title: 'Breathing Exercise', audioUrl: '/audio/meditation4.mp3' },
  ]);

  return (
    <MeditationsContainer>
      <h2>Guided Meditations</h2>
      <SessionList>
        {sessions.map((session) => (
          <SessionCard key={session.id}>
            <h3>{session.title}</h3>
            <audio controls>
              <source src={session.audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </SessionCard>
        ))}
      </SessionList>
    </MeditationsContainer>
  );
};

const MeditationsContainer = styled.div`
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const SessionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SessionCard = styled.div`
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
  audio {
    width: 100%;
    margin-top: 10px;
  }
`;

export default Meditations;
