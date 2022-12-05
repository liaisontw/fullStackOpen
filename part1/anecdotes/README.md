- [anecdotes](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps)
   - 1.12*: anecdotes step1

import { useState } from 'react'

>const App = () => {
>
>  const anecdotes = [
>    'If it hurts, do it more often.',
>
>    'Adding manpower to a late software project makes it later!',
>
>    'The first 90 percent of the code accounts for the first 10 percent of the 
>
>development time...The remaining 10 percent of the code accounts for the other 90 
>
>percent of the development time.',
>
>    'Any fool can write code that a computer can understand. Good programmers write 
>
>code that humans can understand.',
>
>    'Premature optimization is the root of all evil.',
>
>    'Debugging is twice as hard as writing the code in the first place. Therefore, if 
>
>you write the code as cleverly as possible, you are, by definition, not smart enough 
>
>to debug it.',
>
>    'Programming without an extremely heavy use of console.log is same as if a doctor 
>
>would refuse to use x-rays or blood tests when diagnosing patients.'
>
>  ]
>   
>  const [selected, setSelected] = useState(0)
>
>  return (

    <div>
      {anecdotes[selected]}
    </div>

>   )
>}
>
>export default App

   - 1.13*: anecdotes step2
   
![Expand your application so that you can vote for the displayed anecdote.](./19a.png)

>const voteAnecdote = () => {
>
>    const copy = [...points];
>
>    copy[selected] += 1;
>
>    setPoints(copy);
>
>    if ( copy[selected] > copy[highest] ) {
>
>      setHighest(selected);
>
>    }
>
>  };
   - 1.14*: anecdotes step3
