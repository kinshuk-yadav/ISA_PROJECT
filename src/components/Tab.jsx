import React, { useState, useEffect } from 'react';
import './tab.css'; // Import CSS for styling

const Tab = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(null);

    // Use useEffect to set the initial activeTab when tabs are loaded
    useEffect(() => {
      if (tabs && tabs.length > 0) {
        setActiveTab(tabs[0].id);  // Set to the first tab's id
      }
    }, []);

  
 
  const handleTabClick = (tabId) => {
      setActiveTab(tabId);
  };

  

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
