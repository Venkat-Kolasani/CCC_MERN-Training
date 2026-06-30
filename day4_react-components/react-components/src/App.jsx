import Student from './student.jsx'

function App() {
  const studentData = { name: 'Alex', age: 20 }
  const courses = ['React', 'Node', 'MongoDB']

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Component Demo</h1>
      <Student data={studentData} courses={courses} />
    </div>
  )
}

export default App
