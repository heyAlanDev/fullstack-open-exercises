import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ part }) => {
  const { name, exercises } = part

console.log({part})

  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({ amount }) => <p>Number of exercises {amount}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part={part1} />
      <Content part={part2} />
      <Content part={part3} />
      <Total amount={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

