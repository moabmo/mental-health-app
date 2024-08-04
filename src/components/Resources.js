import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Resources = () => {
  const [resources, setResources] = useState([
    { id: 1, title: 'How to Manage Stress', description: 'Learn effective stress management techniques.' },
    { id: 2, title: 'Mindfulness Meditation', description: 'An introduction to mindfulness meditation.' },
    { id: 3, title: 'Breathing Exercises', description: 'Simple breathing exercises to reduce stress.' },
    { id: 4, title: 'Healthy Lifestyle Tips', description: 'Tips for maintaining a healthy lifestyle.' },
  ]);

  return (
    <ResourcesContainer>
      <h2>Resources and Tips</h2>
      <ResourceList>
        {resources.map((resource) => (
          <ResourceCard key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </ResourceCard>
        ))}
      </ResourceList>
    </ResourcesContainer>
  );
};

const ResourcesContainer = styled.div`
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const ResourceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ResourceCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 45%;
  h3 {
    margin-bottom: 10px;
    color: #3498db;
  }
`;

export default Resources;
