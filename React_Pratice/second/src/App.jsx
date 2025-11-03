import './App.css'
import Student from './student'
function App() {
  const hobbies =['Reading', 'Gaming', 'Coding']
  return (
    <>
      <Student name="John Doe" age={20} rollno={101} hobbies={hobbies} />
    </>
  )
}

export default App
