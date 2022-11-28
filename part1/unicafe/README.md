- [unicafe]([./unicafe/README.md](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps))
   - Exercises
   - 1.6  : unicafe step1
     - index.js as

>
>import React from 'react'
>
>import ReactDOM from 'react-dom/client'
>
>import App from './App'
>
>ReactDOM.createRoot(document.getElementById('root')).render(<App />)
> 

  - App.js as

>import { useState } from 'react'
>
>const App = () => {
>
>  // save clicks of each button to its own state
>  
>  const [good, setGood] = useState(0)
>
>  const [neutral, setNeutral] = useState(0)
>  
>  const [bad, setBad] = useState(0)
>
>  return (
  
    <div>
      code here
    </div>
    
>  )
>}
>
>export default App


   - 1.7  : unicafe step2
   - 1.8  : unicafe step3

>const Statistics = (props) => {
>
>}
>
>const App = () => {
>
>  const [good, setGood] = useState(0)
>
>  const [neutral, setNeutral] = useState(0)
>
>  const [bad, setBad] = useState(0)
>
>  return (
>
>  )
>}

   - 1.9  : unicafe step4
   - 1.10 : unicafe step5

>const Statistics = (props) => {
>
>  return(

    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>

>   )
>}

   - 1.11*: unicafe step6
