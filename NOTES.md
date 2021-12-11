# Notes

## `useState`

![img](/01/hooks/src/imgs/useState.webp)

Import `useState` from the `react` library. Using [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax, we access state and a setter. 

A minimal example:

```js
function Counter() {
  const [count, setCount] = useState(0) 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

Hook resides inside the functional component. By convention, we prefix the second variable with `set`. `setCount` in this case is analogous to `this.setState` function in class components. Note `setCount` only updates the variable `count`. You can call multiple `useState` hooks in a single component (more on that later)

By clicking the button, `count` is incremented by 1. Since state is changed via `setCount`, `<Counter />` rerenders with the new `count`. Works exactly like class components. 

## `useEffect`

<!-- replace with img -->

```js
useEffect(() => {
  console.log('useEffect has run!')
}, [])
```

Contains 2 parameters: a callback function and a dependency array. When the functional component mounts, useEffect is run. The empty array signifies that the callback function should run once. Consider this example:

```js
function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect has run!')
  }, [])

  useEffect(() => {
    console.log('count:', count)
  }, [count])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

### The Flow

1. `<Counter />` is mounted, and rendered
2. `useEffect` runs its callback functions: "useEffect has run!" and count is logged.
3. When the user clicks the button, `count` is incremented
4. `useEffect` that contains `count` in its dependency array runs its callback function 
5. `<Counter />` rerenders due to state change

Note that the first `useEffect` is only run once, upon mounting of component, which leads to an useful heuristic: `useEffect` with an empty dependency array is analogous to `componentDidMount`.

## Multiple `useState`

While technically you can use `useState` to create an object, it does not merge state. 

```js
const [form, setForm] = useState({name: 'Tom', age: 20})

setForm({name: 'Sam'}) /* 🛑 form will now only have name as key */
setForm({name: 'Sam', age: form.age}) /* 🟢 form will keep its key/value pairs */
```

An obvious solution is to use `useState` with atomic values: a `useState` for `name`, and another `useState` for `age`.

```js
function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  return (
    <>
      {name || 'Name'} and {age || '0'} 
      <input value={name} onChange={() => setName(e.target.value)} />
      <input value={name} onChange={() => setAge(e.target.value)} />
    </>
  )
}
```

The flow goes something like this:

1. `<Form />` will be mounted.
2. `useState` hooks are executed.
3. JSX reads values from `name` and `age` and is rendered to the DOM.
4. User types into the first name input field.
5. For each keystroke, the anonymous callback function runs, calling `setName`.
6. `<Form />` is rerendered because `name` is changed.
7. User types into the second age field.
8. Same steps are repeated.

You may imagine when multiple `useStates` are used, especially in complex forms. This is when [`useReducer`](https://reactjs.org/docs/hooks-reference.html#useeffect) comes into play.

## Redux

Redux library exposes its API via hooks. Instead of `connect`, `mapStateToProps` and `mapDispatchToProps`, use `useSelector` and `useDispatch` from the `react-redux` library.

`useDispatch` as you guess it, returns the dispatch method. Usually, you return


## React Router

Similarly, React Router also exposes its API via hooks. The ones relevant to us today are `useLocation`, `useHistory`.