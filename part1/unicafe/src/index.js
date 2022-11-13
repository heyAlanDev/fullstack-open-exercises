import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Statistic = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Table = ({title,subtitle, children }) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ fontWeight: 'bold' }}>{title}</th>
          <th style={{ fontWeight: 'bold' }}>{subtitle}</th>
        </tr>
      </thead>
      {children}
    </table>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positiveRate = (good * 100) / all

  if (!good & !neutral & !bad) return <p>No feedback given</p>

  return (
    <div>
      <h1>Statistics</h1>
      <Table title='Feedback' subtitle='Value' >
        <Statistic text='Good' value={good} />
        <Statistic text='Neutral' value={neutral} />
        <Statistic text='Bad' value={bad} />
        <Statistic text='All' value={all} />
        <Statistic text='All' value={all} />
        <Statistic text='Average' value={`${average}%`} />
        <Statistic text='Positive' value={`${positiveRate}%`} />
      </Table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='Good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

