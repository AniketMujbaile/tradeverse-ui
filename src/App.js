import React from 'react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import './App.css';

const Data = {
  header: 'TRADEVERSE',
  username: 'Aniket',
  welcomeMessage: 'Good to see you again!',
  currentLicence: 'USD / CAD AUD / USD',
  newsDataFlow: [
    {
       news: [
        {
          type: 'ERU',
          content:
            'The Euro has steadied against the US Dollar on Thursday as the market ponders the path of Fed rate hikes',
          score: 1,
          impact: 'Neutral',
          probability: 'High',
        },
       ],
    },
   ],
  topFocusTopics: [
    { id: 1, title: '1. Focus Topic 1' },
    { id: 1, title: '2. Focus Topic 2' },
    { id: 1, title: '3. Focus Topic 3' },
    { id: 1, title: '4. Focus Topic 4' },
    { id: 1, title: '5. Focus Topic 5' },
    { id: 1, title: '6. Focus Topic 6' },
    { id: 1, title: '7. Focus Topic 7' },
    { id: 1, title: '8. Focus Topic 8' },
    { id: 1, title: '9. Focus Topic 9' },
    { id: 1, title: '10. Focus Topic 10' },
    ],
};

function NewsDataFlow({ newsDataFlow }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Type</th>
          <th>News</th>
          <th>Score</th>
          <th>Impact</th>
          <th>Probability</th>
        </tr>
      </thead>
      <tbody>
        {newsDataFlow.map((timeSlot) => (
          <React.Fragment key={timeSlot.time}>
            <tr className="time-slot">
              <td colSpan="6">{timeSlot.time}</td>
            </tr>
            {timeSlot.news.map((newsItem, index) => (
              <tr key={index}>
                <td>{newsItem.type}</td>
                <td>{newsItem.content}</td>
                <td>{newsItem.score}</td>
                <td>{newsItem.impact}</td>
                <td>{newsItem.probability}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

function FocusTopics({ focusTopics }) {
  return (
    <ul>
      {focusTopics.map((topic) => (
        <li key={topic.id}>{topic.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
       
        <section className="news-data-flow">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="search-container">
            <img src="/img/main.png" alt="Image" />
          </div>
          <div className="data-flow">
          <h2>News & Data Flow</h2>
          <NewsDataFlow newsDataFlow={Data.newsDataFlow} />
          </div>
        </section>
        <RightSidebar topFocusTopics={Data.topFocusTopics} />
      </main>
    </div>
  );
}

export default App;


 