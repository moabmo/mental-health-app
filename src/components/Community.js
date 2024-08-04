import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Dealing with Anxiety',
      content: 'I have been struggling with anxiety lately. Any tips?',
      comments: ['Try mindfulness exercises', 'Talk to a therapist', 'Exercise regularly'],
    },
    {
      id: 2,
      title: 'Meditation Techniques',
      content: 'What are some good meditation techniques for beginners?',
      comments: ['Start with guided meditations', 'Focus on your breath', 'Practice daily'],
    },
    {
      id: 3,
      title: 'Healthy Eating',
      content: 'How does diet impact mental health?',
      comments: ['Eat a balanced diet', 'Avoid processed foods', 'Stay hydrated'],
    },
  ]);

  return (
    <CommunityContainer>
      <h2>Community Support</h2>
      <PostList>
        {posts.map((post) => (
          <PostCard key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <CommentSection>
              {post.comments.map((comment, index) => (
                <Comment key={index}>
                  <p>{comment}</p>
                </Comment>
              ))}
            </CommentSection>
          </PostCard>
        ))}
      </PostList>
    </CommunityContainer>
  );
};

const CommunityContainer = styled.div`
  padding: 20px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PostCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 45%;
`;

const CommentSection = styled.div`
  margin-top: 20px;
  padding: 10px;
  background: #ecf0f1;
  border-radius: 5px;
`;

const Comment = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

export default Community;
