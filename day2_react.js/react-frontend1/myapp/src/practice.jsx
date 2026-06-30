import { useState } from 'react'

function Practice() {
  const [text, setText] = useState('')

  return (
    <>
      <input
        type="text"
        placeholder="Enter your text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <h2>You typed: {text}</h2>
    </>
  )
}

export default Practice
