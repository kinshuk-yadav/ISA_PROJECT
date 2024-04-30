import React, { useEffect, useState } from 'react';
import Tab from '../components/Tab';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import Navbar from '../components/Navbar';

function POTD() {
    const [mathstabs, setMathstabs] = useState([]);
    const [phytabs, setPhytabs] = useState([]);
    const [chemtabs, setChemtabs] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "questions"), (snapshot) => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            const newPhytabs = [];
            const newMathstabs = [];
            const newChemtabs = [];

            snapshot.docs.forEach(doc => {
                const data = doc.data();
                const options = [
                    data.option1, data.option2, data.option3, data.option4
                ].filter(Boolean);  // Filter to remove any falsy values

                const newTab1 = {
                    id: doc.id,
                    title: "Mathematics",
                    content: {
                        question: data.ques,
                        options: options
                    }
                };
                const newTab3 = {
                    id: doc.id,
                    title: "Chemistry",
                    content: {
                        question: data.ques,
                        options: options
                    }
                };
                const newTab2 = {
                    id: doc.id,
                    title: "Physics",
                    content: {
                        question: data.ques,
                        options: options
                    }
                };

                newMathstabs.push(newTab1);
                newPhytabs.push(newTab2);
                newChemtabs.push(newTab3);
            });

            setPhytabs(newPhytabs);
            setMathstabs(newMathstabs);
            setChemtabs(newChemtabs);
        });

        return () => unsubscribe();
    }, []);

    const handleOptionSelect = (tabId, option) => {
        setSelectedOptions({
            ...selectedOptions,
            [tabId]: option
        });
    };

    const handleSubmit = () => {
        // Handle submission of selected options
        console.log("Selected Options:", selectedOptions);
        // You can perform further actions here, such as submitting the answers to a server
    };

    return (
        <div>
            <h1>Problem of the Day</h1>
            <Navbar/>
            <Tab tabs={mathstabs} onOptionSelect={handleOptionSelect} />
            <Tab tabs={phytabs} onOptionSelect={handleOptionSelect} />
            <Tab tabs={chemtabs} onOptionSelect={handleOptionSelect} />
            <div className="submit-button-container">
                <button
                    className="submit-button"
                    onClick={handleSubmit}
                    disabled={Object.keys(selectedOptions).length !== (mathstabs.length + phytabs.length + chemtabs.length)}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default POTD;
