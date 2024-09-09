import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="quiz-App">
        <div className="score-section"> 
        </div>
      
        <div className="question-section">

          <h1>Question 1 </h1>
          <h2> Who is the father of computer </h2>
          <div className="options"> 
            <button>Charles Babbage</button>
            <button>Thomsan Alva Edison</button>
            <button>Charles Diekens</button>
            <button>Michael Spey</button>

          </div>
          <div className="timer">Time Left:<span> 10s
          </span>
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
