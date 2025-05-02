import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}


const Display = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick = {handleGoodClick} text = 'good'></Button>
      <Button onClick = {handleNeutralClick} text = 'neutral'></Button>
      <Button onClick = {handleBadClick} text = 'bad'></Button>
      <h1>Statistics</h1>
      <Display text = 'good' value = {good}/>
      <Display text = 'neutral' value = {neutral}/>
      <Display text = 'bad' value = {bad}/>
    </div>
  )
}

export default App