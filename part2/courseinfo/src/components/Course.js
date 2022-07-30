const Header = ( { course } ) => <h1>{ course }</h1>

const Part = ( {part, exercises} ) => <p>{ part } { exercises }</p>

const Content = ( { parts } ) => {
  return (
    <>
        {parts.map((part) => <Part part={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Total = ( { parts } ) => {
  const total = parts.reduce( ( accum, current ) => {
      return accum + current.exercises
  }, 0 )

  return(
      <h3>total of {total} exercises</h3>
  ) 
}
export default function Course({course}) {
    return(
        <div>
            <Header  course={course.name}/>
            <Content parts={course.parts} />
            <Total   parts={course.parts} />
        </div>
    )
}