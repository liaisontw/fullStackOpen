import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  if ( "positive" === text) {
    return (
      <tr>
        <td>{text}</td> 
        <td>{value} %</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
      </tr>
    )
  }
}

const Statistics = ({good, neutral, bad}) => {
  const all = good+neutral+bad

  if ( 0 === all ) {
    return (
      <>
        <h3>No feedback given</h3>
      </>
    )
  }
  
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="neutral" value ={neutral} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={(good-bad)/(all)} />
          <StatisticLine text="positive" value ={(good*100)/(all)} />
        </tbody>
      </table>
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
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>     
    </div>
  )
}

export default App
