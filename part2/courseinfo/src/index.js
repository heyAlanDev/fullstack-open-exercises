import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => (
  <div>
    {parts.map(({ name, exercises, id }) => (
      <p key={id}>
        {name} {exercises}
      </p>
    ))}
  </div>
)

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

const Course = ({ course }) => (
  <div key={course.id}>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

const Courses = ({ courses }) => {
  return courses.map(course => (
    <Course key={course.id} course={course} />
  ))
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Courses courses={courses} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

