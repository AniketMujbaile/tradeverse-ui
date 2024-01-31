 // RightSidebar.js

import React from 'react';
//import FocusTopicsList from './FocusTopicsList';

const RightSidebar = ({ topFocusTopics }) => {
    const Data = { // Provide a sample definition for Data
        username: 'Aniket',
        welcomeMessage: 'Good to see you again!',
      };
  return (
    <aside className="right-sidebar">
      <p className="username-welcome">
          {Data.welcomeMessage}, {Data.username}
      </p>
      <br/>
      <br/>
      <h2>ABOUT GRAPH</h2>
      <p>See Detail &gt;</p>
      <div className="graph-container">
        <div className="graph-bar" style={{ height: '75%' }}></div>
        <div className="graph-bar" style={{ height: '50%' }}></div>
        <div className="graph-bar" style={{ height: '25%' }}></div>
        <div className="graph-bar" style={{ height: '10%' }}></div>
        <div className="graph-bar" style={{ height: '5%' }}></div>
      </div>
      <p>Username</p>
      <p>75%</p>
      <p>About Graph</p>
      <p>See Detail &gt;</p>
      <br/>
      <br/>
      <div className="top-focus-topics">
        <h2>Top 10 Focus Topics</h2>
        <ul>
          {topFocusTopics.map((topic) => (
            <li key={topic.id}>{topic.title}</li>
          ))}
        </ul>
      </div>
      {/* <FocusTopicsList focusTopics={topFocusTopics} /> */}
    </aside>
  );
};

export default RightSidebar;
