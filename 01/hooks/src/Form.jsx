import { useState, useReducer } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleChange = e => {
    console.log('%c handleChange', 'color: skyblue')
    const { value } = e.target

    if (e.target.name === 'name') setName(value)
    else setAge(value)

    console.log('%c value:', 'color: palevioletred', value)
  }

  return (
    <div>
      <h1 className="component">Form</h1>
      <div className="flex justify-around border border-gray-300">
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>

      <input
        name="name"
        type="text"
        value={name}
        placeholder="name"
        onChange={handleChange}
      />
      <input name="age" type="number" value={age} onChange={handleChange} />
    </div>
  )
}

const initialState = {
  name: '',
  age: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.name }
    case 'age':
      return { ...state, age: state.age + action.age }
    default:
      return state
  }
}

const FormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1 className='component'>Reducer</h1>
      <div className="flex justify-around border border-gray-300">
        <h3>Name: {state.name}</h3>
        <h3>Age: {state.age}</h3>
      </div>
      <button onClick={() => dispatch({ type: 'age', age: 5 })}>
        Increment
      </button>

      <input
        value={state.name}
        placeholder='name'
        onChange={e => dispatch({ type: 'name', name: e.target.value })}
      />
    </div>
  )
}

export { Form, FormReducer }
