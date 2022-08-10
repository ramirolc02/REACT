import { useState } from 'react' // import function

// Destructuring, not passing props but just necessary objects.

const History = (props) => {
  if (props.allClicks.length === 0) {
    return( <div> The app is used by pressing the butttons: </div> )
  }
  return(<div> Button press history : {props.allClicks.join(' ')}</div>)
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  // Function that returns a function.
  const hello = (who) => () => {
    console.log('Welcome', who)
  }

  const[value, setValue] = useState(10) 
  const setToValue = (newValue) => () => {
    console.log('value now', newValue) // prints new value
    setValue(newValue)
  }

 /* "Normal" way to achieve the same 

 const setToValue = (newValue) => {
  console.log('value now', newValue)
  setValue(newValue)
}   

return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
} */

  return (
    <div>
      <h1> Welcome </h1>
      {value}
     <button onClick={hello('user')}> button </button>
     <button onClick={setToValue(1000)}> thousand </button>
     <button onClick={setToValue(0)}>reset</button>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks}/> 
    </div>
  )
  // join(separated by string passed as function parameter)
}

export default App