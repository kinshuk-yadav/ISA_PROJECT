import React from 'react'
import Tab from '../components/Tab';


function POTD() {
    const tabs = [
        { id: 1, title: 'Mathematics', content: 'Mathematics question' },
        { id: 2, title: 'Physics', content: 'Physics question' },
        { id: 3, title: 'Chemistry', content: 'Chemistry question' },
      ];

  return (
    <div>
        <h1>Problem of the Day</h1>
        <Tab tabs={tabs} />
    </div>
  )
}

export default POTD

/*
qid

*/