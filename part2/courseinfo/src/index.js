import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises }, index) => (
        <p key={index}>
          {name} {exercises}
        </p>
      ))}
    </div>
  )
}

const Total = ({ parts = [] }) => {
  const totalExercises = parts
    .map(({ exercises }) => exercises)
    .reduce((prev, current) => {
      return prev + current
    })

  return (
    <p>
      <strong>Total of {totalExercises} exercises</strong>
    </p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

