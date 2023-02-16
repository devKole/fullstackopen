import { useState } from "react"

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) =>
  <table>
    <tbody>
      <tr>
        <td>{text} {value}</td>
      </tr>
    </tbody>
  </table>

const Statistics = ({ good, neutral, bad, all, avarage, positive }) => {
  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="avarage" value={avarage} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increasesGoodByOne = () => setGood(good + 1)
  const increasesNeutralByOne = () => setNeutral(neutral + 1)
  const increasesBadByOne = () => setBad(bad + 1)
  const all = good + neutral + bad
  const positive = [(good / all) * 100, '%']
  const percentage = positive.join(' ')
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increasesGoodByOne} text='good' />
      <Button onClick={increasesNeutralByOne} text='neutral' />
      <Button onClick={increasesBadByOne} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avarage={((good - bad)) / all} positive={percentage} />
    </div>

  )
}


export default App;
