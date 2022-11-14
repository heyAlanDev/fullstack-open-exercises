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

  return <p>Total number exercises {totalExercises}</p>
}

const Course = ({course}) => {
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
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
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

