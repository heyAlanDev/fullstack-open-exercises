import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

const persons = [{ name: 'Arto Hellas' }]

root.render(<App dataPersons={persons}/>)

