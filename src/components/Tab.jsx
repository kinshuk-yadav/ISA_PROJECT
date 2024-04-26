import React, { useState, useEffect } from 'react';
import './tab.css'; // Import CSS for styling

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs.id);

  

  const handleTabClick = (tabId) => {
      setActiveTab(tabId);
  };

  if (!tabs || tabs.length === 0) {
      return <div>Loading tabs...</div>;
  }

  return (
      <div className="tab-container">
          <div className="tab-header">
              {tabs.map((tab) => (
                  <div
                      key={tab.id}
                      className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => handleTabClick(tab.id)}
                  >
                      {tab.title}
                  </div>
              ))}
          </div>
          <div className="tab-content">
              {tabs.filter(tab => tab.id === activeTab).map((tab) => (
                  <div key={tab.id} className="tab-pane active">
                      <p>{tab.content.question}</p>
                      {tab.content.options.map((option, index) => (
                          <p key={index}>{option}</p>  // Display each option
                      ))}
                  </div>
              ))}
          </div>
      </div>
  );
};


export default Tab;
