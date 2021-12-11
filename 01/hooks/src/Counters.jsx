import { useState, useEffect } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

function CounterEffect() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('CounterEffect running!')
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          console.log('onClick, count:', count)
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

export { Counter, CounterEffect }
