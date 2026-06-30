import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Practice from './practice.jsx'
import Test from './test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>Day 2 React Demo</h1>
      <section>
        <h2>Controlled Input</h2>
        <Practice />
      </section>
      <hr />
      <section>
        <h2>State Update</h2>
        <Test />
      </section>
    </div>
  </StrictMode>,
)
