import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average =  (good - bad) / all
  const positiveRate = (good * 100) / all

  

  return (
    <>
      <div>
        <h1>Give feedback</h1>

        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      <div>
        <h1>Statistics</h1>

        <p>
          <span style={{ fontWeight: 'bold' }}>Good </span> {good}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Neutral </span> {neutral}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Bad </span>
          {bad}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>All </span>
          {all}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Average </span>
          {average ? average : 0}
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>Positive </span>
          {positiveRate ? positiveRate : 0}%
        </p>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

