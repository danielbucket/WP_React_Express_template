import React from 'react'
const robot = require('./robot.jpeg')

export default function App() {

  return (
    <div>
      <h1>React App</h1>
      <img src={ robot } alt='robot' />
    </div>
  )
}
