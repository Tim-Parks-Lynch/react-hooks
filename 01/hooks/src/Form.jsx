import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const handleChange = (e) => {
    console.log('handle change')
    console.log(e.target.name)
  }

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>

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

export { Form }
