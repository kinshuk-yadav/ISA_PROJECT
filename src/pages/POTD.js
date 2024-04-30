import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Tab from '../components/Tab';
import { db } from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import './potd.css';

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
                if (!data.subject) {
                    console.warn('Document has no subject:', doc.id);
                    return; // Skip this document if it doesn't have a subject field
                }
                const options = [
                    data.option1, data.option2, data.option3, data.option4
                ].filter(Boolean); // Filter to remove any falsy values

                const newTab = {
                    id: doc.id,
                    title: data.subject,
                    content: {
                        question: data.ques,
                        options: options
                    }
                };

                switch(data.subject) {
                    case 'Mathematics':
                        newMathstabs.push(newTab);
                        break;
                    case 'Physics':
                        newPhytabs.push(newTab);
                        break;
                    case 'Chemistry':
                        newChemtabs.push(newTab);
                        break;
                    default:
                        console.warn('Unknown subject:', data.subject);
                }
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
    const navigate=useNavigate();
    const handleSubmit = () => {
        console.log("Selected Options:", selectedOptions);
        // Additional submission logic here
        navigate('/');
    };
   

    return (
        <div>
            <h1>Problem of the Day</h1>
            <Navbar/>
            <Tab tabs={mathstabs} onOptionSelect={handleOptionSelect} />
            <Tab tabs={phytabs} onOptionSelect={handleOptionSelect} />
            <Tab tabs={chemtabs} onOptionSelect={handleOptionSelect} />
            <div className='btn'>
            <button onClick={handleSubmit}
               style={{
                width: '150px', // Set the width of the button
                height: '50px', // Set the height of the button
                backgroundColor: '#4CAF50', // Green background
                color: 'white', // White text
                fontSize: '16px', // Larger font size
                border: 'none', // No border
                borderRadius: '5px', // Rounded corners
                cursor: 'pointer' // Pointer cursor on hover
            }}
            > Submit</button>
            </div>
           
           
        </div>
    );
}

export default POTD;
