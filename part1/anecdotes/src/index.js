import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
  const dataVotes = anecdotes[selected].votes

  useEffect(() => {
    setVotes(dataVotes.length)
  }, [selected])

  const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

  const lastPosition = anecdotes.length - 1

  const mostVotes = Math.max(...anecdotes.map(({ votes }) => votes.length))

  const mostVotedAnecdote = anecdotes.find(
    ({ votes }) => votes.length === mostVotes
  )

  return (
    <div>
      <h2>{anecdotes[selected].description}</h2>
      <p>has {votes} votes</p>
      <button
        onClick={() => {
          dataVotes.push('vote')
          setVotes(votes + 1)
        }}
      >
        vote
      </button>
      <button onClick={() => setSelected(random(lastPosition, 0))}>
        Next anecdote
      </button>

      <h2>Anecdote with more votes</h2>
      <p>{mostVotedAnecdote.description}</p>
    </div>
  )
}

const anecdotes = [
  { description: 'If it hurts, do it more often', votes: [] },
  {
    description: 'Adding manpower to a late software project makes it ,later!',
    votes: []
  },
  {
    description:
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: []
  },
  {
    description:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: []
  },
  { description: 'Premature optimization is the root of all evil.', votes: [] },
  {
    description:
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: []
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App anecdotes={anecdotes} />)

