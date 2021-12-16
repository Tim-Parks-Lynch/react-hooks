import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { fetchTodo } from '../store/todo'
import { deleteTodo, updateTodo } from '../store/todos'
import { useDispatch, useSelector } from 'react-redux'

const EditTodo = () => {
  //brings in state from store
  const todo = useSelector((state) => {
    return state.todo
  })

  //brings in actions from store
  const dispatch = useDispatch()

  //React Router Hooks
  const location = useLocation()
  const history = useHistory()

  //defining id from the url
  const id = location.pathname.slice(-1)

  //local state for editing
  const [taskName, setTaskName] = useState('')
  const [assignee, setAssignee] = useState('')

  //checking what local state looks like:
  console.log('taskName:', taskName)
  console.log('assignee:', assignee)

  //submitting changes to task
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateTodo({ ...todo, taskName, assignee }, history))
  }

  //componentDidMount fetches todo
  useEffect(() => {
    dispatch(fetchTodo(id))
  }, [])

  //componentDidUpdate updates local state
  useEffect(() => {
    //when the component mounts todo is just an empty object from the store, there is no todo.taskName and todo.assignee yet, after the first useEffect runs it populates the todo object
    if (todo.taskName && todo.assignee) {
      setTaskName(todo.taskName);
      setAssignee(todo.assignee);
    }
  }, [todo])

  return (
    <div>
      <form id="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="taskName">
          Task Name:&nbsp;
          {!taskName ? (
            <span className="warning">Field is Required!</span>
          ) : null}
        </label>
        <input
          name="taskName"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />{' '}
        <label htmlFor="assignee">Assign To:</label>
        <input
          name="assignee"
          onChange={(e) => setAssignee(e.target.value)}
          value={assignee}
        />{' '}
        {/* same as above but for assignee */}
        <button type="submit" disabled={!taskName || !assignee}>
          Submit
        </button>
      </form>
      <form onSubmit={(ev) => ev.preventDefault()}>
        <button
          className="remove"
          onClick={() => dispatch(deleteTodo(id, history))}
        >
          Delete
        </button>
      </form>
    </div>
  )
}

export default EditTodo
