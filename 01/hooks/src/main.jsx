import React from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'
import { Counter, CounterEffect } from './Counters.jsx'
import { Form } from './Form.jsx'

export default function Main({ children }) {
  return (
    <div>
      <h1 className="text-center text-4xl mb-8">Main Component</h1>
      <div className="p-4 border border-pink-200 max-w-400px mx-auto">
        {children}
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main>
      <div className="border border-green-300 flex flex-col justify-between h-400px">
        <Counter />
        <CounterEffect />
        <Form />
      </div>
    </Main>
  </React.StrictMode>,
  document.getElementById('root')
)
