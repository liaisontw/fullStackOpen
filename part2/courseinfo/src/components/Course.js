const Header = ( { course } ) => <h1>{ course }</h1>

const Part = ( {part, exercises} ) => <p>{ part } { exercises }</p>

const Content = ( { parts } ) => {
  return (
    <>
        {parts.map((part) => <Part part={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Total = ( { parts } ) => <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

export default function Course({course}) {
    return(
        <div>
            <Header  course={course.name}/>
            <Content parts={course.parts} />
            <Total   parts={course.parts} />
        </div>
    )
}