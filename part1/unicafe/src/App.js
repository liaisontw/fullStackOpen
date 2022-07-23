import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad

  if ( 0 === all ) {
    return (
      <>
        <h2>No feedback given</h2>
      </>
    )
  }
  
  return (
    <>
      <h2>statistics</h2>
      <h3>good {good}</h3>
      <h3>neutral {neutral}</h3>
      <h3>bad {bad}</h3>
      <h3>all {all}</h3>
      <h3>average {(good-bad)/(all)}</h3>
      <h3>positive {(good*100)/(all)} %</h3>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>     
    </div>
  )
}

export default App
