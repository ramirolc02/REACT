import { useState } from 'react' // import function

const App = () => {
  const [ counter, setCounter ] = useState(0) // counter = 0 && setcounter is function that modifies state

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App