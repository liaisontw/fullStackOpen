Solutions of part 1 exercises to this folder, one app per folder

eg. the project unicafe for exercises 1.6.-1.11 as folder unicafe

- a: Introduction to React
- Exercises
- 1.1  : course information, step1
- index.js as
----------------------------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

----------------------------------------------------------------------
- App.js as
----------------------------------------------------------------------
const App = () => {
  // const-definitions

  return (
  
    <div>
      <Header course\={course} />
      <Content ... />
      <Total ... />
    </div>
    
  )
}

----------------------------------------------------------------------
- 1.2  : course information, step2
- App.js as
----------------------------------------------------------------------
const Content = ... {

  return (
  
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  
  )
}

----------------------------------------------------------------------
- b: Javascript
- Exercises
- 1.3  : course information, step3
- 1.4  : course information, step4
- 1.5  : course information, step5
