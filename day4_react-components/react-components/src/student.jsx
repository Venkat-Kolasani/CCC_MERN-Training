function Student(props) {
  return (
    <>
      <h2>{props.data.name}</h2>
      <h2>{props.data.age}</h2>
      <ul>
        {props.courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </>
  )
}

export default Student
