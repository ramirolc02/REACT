import { useState } from 'react' // import function

// Destructuring, not passing props but just necessary objects.
const Display = ({counter}) => <divs> {counter} </divs>

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0) // counter = 0 && setcounter is function that modifies state

  // variables containing reference to function
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter -1)
  const setToZero = () => setCounter(0)

  // Set timeout adds 1 to counter each second.
  /* setTimeout(
    () => setCounter(counter + 1),
    1000
  ) */ 
  return (
    <div>
        <h1>App</h1>
        <Display counter = {counter}/>
        <Button onClick={increaseByOne}
          text='plus'
        />
         <Button onClick={setToZero}
          text='zero'
        />
         <Button onClick={decreaseByOne}
          text='minus'
        />
    </div>
  )
}

export default App