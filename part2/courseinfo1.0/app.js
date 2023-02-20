import Course from './components/Course.js'

const Node = ({ node }) => {
  return (<h1>{node}</h1>)
}

const Total = ({ sum }) => {
  return (
    <h4>Total of exercises {sum} exercises</h4>
  )


}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    <Part
      part={parts[0]}
    />
    <Part
      part={parts[1]}
    />
    <Part
      part={parts[2]}
    />
    <Part
      part={parts[3]}
    />
  </>
const NodeContent = ({ parts }) =>
  <>
    <Part
      part={parts[0]}
    />
    <Part
      part={parts[1]}
    />
  </>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course course={courses[0].name} />
      <Content parts={courses[0].parts} />
      <Total sum={courses[0].parts.reduce((t, s) => t + s.exercises, 0)} />
      <Node node={courses[1].name} />
      <NodeContent parts={courses[1].parts} />
      <Total sum={courses[1].parts.reduce((t, s) => t + s.exercises, 0)} />


    </div>
  )
}

export default App
