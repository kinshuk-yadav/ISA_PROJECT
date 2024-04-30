import React, { useState, useEffect } from 'react';
import './tab.css'; // Import CSS for styling

const Tab = ({ tabs }) => {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

    useEffect(() => {
        // Check if all questions have been answered
        const answeredQuestions = Object.keys(selectedOptions);
        setAllQuestionsAnswered(answeredQuestions.length === tabs.length);
    }, [selectedOptions, tabs]);

    const handleOptionSelect = (tabId, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [tabId]: option
        });
    };

    return (
        <div>
            {tabs.map((tab) => (
                <div key={tab.id} className="tab-container">
                    <div className="tab-header">
                        <div className="tab-item">
                            {tab.title}
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active">
                            <p>{tab.content.question}</p>
                            {tab.content.options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={`option_${tab.id}_${index}`}
                                        name={`question_${tab.id}`} // Ensure unique name per question
                                        value={option}
                                        checked={selectedOptions[tab.id] === option}
                                        onChange={() => handleOptionSelect(tab.id, option)}
                                    />
                                    <label htmlFor={`option_${tab.id}_${index}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tab;
