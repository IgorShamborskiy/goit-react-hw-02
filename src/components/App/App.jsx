import { useState } from 'react'
import Options from '../Options/Options.jsx'
import Description from '../Description/Description.jsx'
import Feedback from '../Feedback/Feedback.jsx'



export default function App () {
  const [click, setClick]= useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  return (
    <>
    <Description/>
      <Options/>
      <Feedback/>
    </>
  )
}
