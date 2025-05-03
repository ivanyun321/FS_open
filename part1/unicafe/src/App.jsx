import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const Statistics = ({good, neutral, bad, hasClicked}) => {
  const all= good + neutral + bad

  if (!hasClicked) {
    return <div>No feedback given</div>
  }

  const average = (good - bad) / (good + bad + neutral) || 0
  const positive = good * 100 / (good + bad + neutral) || 0
  return (
    <table>
      <tbody>
        <StatisticLine text = 'good' value = {good}/>
        <StatisticLine text = 'neutral' value = {neutral}/>
        <StatisticLine text = 'bad' value = {bad}/>
        <StatisticLine text = 'all' value = {all}/>
        <StatisticLine text = 'average' value = {average}/>
        <StatisticLine text = 'positive' value = {positive}/>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [hasClicked, setHasClicked] = useState(false);

  const handleGoodClick = () => {
    setGood(good + 1)
    setHasClicked(true)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setHasClicked(true)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setHasClicked(true)
  }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick = {handleGoodClick} text = 'good'></Button>
      <Button onClick = {handleNeutralClick} text = 'neutral'></Button>
      <Button onClick = {handleBadClick} text = 'bad'></Button>
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} hasClicked = {hasClicked} />
    </div>
  )
}

export default App