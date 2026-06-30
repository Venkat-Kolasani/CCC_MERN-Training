import { useState } from 'react'

function Test() {
  const [student, setStudent] = useState({ name: 'Alex', age: 20 })

  const updateAge = () => {
    setStudent({ ...student, age: 22 }) //spread operator to create a new object with the updated age
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello, {student.name}!</h1>
      <p>You are {student.age} years old.</p>
      <button type="button" onClick={updateAge}>
        Update Age
      </button>
    </div>
  )
}

export default Test
