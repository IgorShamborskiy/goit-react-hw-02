import { useState } from 'react'
import Options from '../Options/Options.jsx'
import Description from '../Description/Description.jsx'
import Feedback from '../Feedback/Feedback.jsx'



export default function App () {
  const [typesFeedback, setTypesFeedback] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }
    );

    const updateFeedback = (feedbackType) => {
      setTypesFeedback({
        ...typesFeedback,
        [feedbackType]: typesFeedback[feedbackType] + 1,
      });
    };
    
  return (
    <>
    <Description/>
      <Options
       onButton={updateFeedback}
       />
      <Feedback />
    </>
  )
}
