// FocusTopicsList.js

import React from 'react';

const FocusTopicsList = ({ focusTopics }) => {
  return (
    <div className="focus-topics-list">
      <h2>Top 10 Focus Topics</h2>
      <ul>
        {focusTopics.map((topic) => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FocusTopicsList;
