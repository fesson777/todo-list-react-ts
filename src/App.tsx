import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import { Todo } from './TodoItem'
import TodoList from './TodoList'
import { Button, Container, Stack } from '@mui/material'
import { initState } from './initState'

function App() {
  const [todos, setTodos] = useState<Todo[]>(initState)
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const addTodo = (): void => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: value,
        complete: false,
      },
    ])
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }

  function handleClick() {
    if (value) {
      addTodo()
      setValue('')
    }
  }

  function onRemove(id: number) {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  }
  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo

        return {
          ...todo,
          complete: !todo.complete,
        }
      })
    )
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && value) {
      addTodo()
      setValue('')
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <Container maxWidth="sm">
      <Stack direction="row" spacing={2}>
        <input
          type="text"
          ref={inputRef}
          value={value}
          placeholder="Введите задание"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" onClick={handleClick}>
          Add Todo
        </Button>
      </Stack>
      <Stack spacing={2} mt={5}>
        <TodoList todos={todos} onRemove={onRemove} toggleTodo={toggleTodo} />
      </Stack>
    </Container>
  )
}

export default App
