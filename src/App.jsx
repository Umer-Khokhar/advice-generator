import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
 
  const [advice, setAdvice] = useState('')
  const [text, setText] = useState('Generate Advice')
async function getAdvice() {
  setText('loading...')
  const response = await fetch('https://api.adviceslip.com/advice')
  const { slip: { advice } }  = await response.json()
  setAdvice(advice)
  console.log(advice)
  setText('Generate Advice')
}

  useEffect(() => {
    getAdvice()
  }, [])
  return (
    <>
      <div className="main">
        <div className="advice">
          <h1>{ advice }</h1>
          <button className="btn" onClick={getAdvice}>{text}</button>
        </div>
      </div>
    </>
  )
}

export default App