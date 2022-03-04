import { List } from '@mui/material'
import TodoItem, { Todo } from './TodoItem'

interface ITodoListProps {
  todos: Todo[]
  onRemove: (id: number) => void
  toggleTodo: (id: number) => void
}

export default function TodoList(props: ITodoListProps) {
  const { todos, onRemove, toggleTodo } = props
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.text + index}
          todo={todo}
          onRemove={onRemove}
          toggleTodo={toggleTodo}
        />
      ))}
    </List>
  )
}
