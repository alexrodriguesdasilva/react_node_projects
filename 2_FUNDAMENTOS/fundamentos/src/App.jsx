import FirstComponent from './components/FirstComponent'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        <FirstComponent />
      </div>
    </>
  )
}

export default App
