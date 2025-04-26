const Header = (props) => {
  return (
    <div>
      <p>Welcome to {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((p, i) => (
        <Part key = {i} part= {p.part} exercises = {p.exercises} />
      ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, p) => sum + p.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: "Using props to pass data", exercises: 7},
    {part: "State of a component", exercises: 14}
  ]

  return (
    <div>
      <Header course ={course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App