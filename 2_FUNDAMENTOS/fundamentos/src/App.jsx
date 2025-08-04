import TemplateExpressions from './components/TemplateExpression'
import FirstComponent from './components/FirstComponent'
import { useState } from 'react'
import './App.css'
import MyComponet from './components/MyComponet'
import Events from './components/Events'
import Challege from './components/Challege'

// Exemplo de comentario 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Exemplo de comentario no jsx, não são carregados no final */}
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponet />
        <Events />
        <Challege />
      </div>
    </>
  )
}

export default App
