const Header = (props)=>{
  console.log(props)
    return (
      <div>
        <h1>{props.course}</h1>
      </div>
    )
}

const Content= (props)=>{
  console.log(props)
    return(
      <div>
        <p>{props.part1} {props.exercise1}</p>
        <p>{props.part2} {props.exercise2}</p>
        <p>{props.part3} {props.exercise3}</p>
      </div>
    )
}
const Total=(props) =>{
  console.log(props)
    return(
      <div>
        <p>Total number of exercises{props.total}</p>
      </div>
    )

}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      <Total total={exercises1+exercises2+exercises3} />
    </div>
  )
  }

export default App