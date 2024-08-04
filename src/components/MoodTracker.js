import React, { useState } from 'react';
import styled from 'styled-components';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [stressLevel, setStressLevel] = useState(0);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <TrackerContainer>
      <h2>Track Your Mood</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Mood</Label>
        <Input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="How do you feel?"
        />
        <Label>Stress Level</Label>
        <Input
          type="number"
          value={stressLevel}
          onChange={(e) => setStressLevel(e.target.value)}
          placeholder="Rate your stress (1-10)"
        />
        <Label>Notes</Label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any additional notes?"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </TrackerContainer>
  );
};

const TrackerContainer = styled.div`
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const Form = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  color: #2c3e50;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #2980b9;
  }
`;

export default MoodTracker;
