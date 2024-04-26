import {React,useEffect, useState} from 'react'
import Tab from '../components/Tab';
import {db} from '../firebase';
import { onSnapshot, collection} from 'firebase/firestore';



function POTD() {

  
   const [phytabs,setPhytabs]=useState([]);
   const [mathstabs,setMathstabs]=useState([]);
   const [chemtabs,setChemtabs]=useState([]);

   useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "questions"), (snapshot) => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      } 
     

        snapshot.docs.forEach(doc => {
            const data = doc.data();
            const options = [
                data.option1, data.option2, data.option3, data.option4
            ].filter(Boolean);  // Filter to remove any falsy values

            const newTab1 = {
                id: doc.id,
                title:"maths",  // Assuming 'ques' holds the question title
                content: {
                    question: data.ques,
                    options: options
                }
            };
            const newTab3 = {
              id: doc.id,
              title:"chem",  // Assuming 'ques' holds the question title
              content: {
                  question: data.ques,
                  options: options
              }
          };
          const newTab2 = {
            id: doc.id,
            title:"physics",  // Assuming 'ques' holds the question title
            content: {
                question: data.ques,
                options: options
            }
        };

            // Example conditions to differentiate tabs, assuming you have some field or logic to distinguish them
            
            mathstabs.push(newTab1);
            phytabs.push(newTab2);
           
                
           
                chemtabs.push(newTab3);
            
        });

        setPhytabs(phytabs);  // Assuming you have a state set up for physics tabs
        setMathstabs(mathstabs);  // Assuming you have a state set up for maths tabs
        setChemtabs(chemtabs);  // Assuming you have a state set up for chemistry tabs
    }, []);

    return () => unsubscribe();
}, []);

    
     
      return (
        <div>
          <h1>Problem of the Day</h1>
          <div>
            
            <Tab tabs={mathstabs} />
          </div>
          <div>
            
            <Tab tabs={phytabs} />
          </div>
          <div>
            
            <Tab tabs={chemtabs} />
          </div>
        </div>
      );
}

export default POTD

/*
qid

*/