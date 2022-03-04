import { ListItem } from '@mui/material'

export type Todo = {
  id: number
  text: string
  complete: boolean
}

export interface ITodoProps {
  todo: Todo
  onRemove: (id: number) => void
  toggleTodo: (id: number) => void
}

export default function TodoItem(props: ITodoProps) {
  const { todo, onRemove, toggleTodo } = props

  function handleDoubleClick(id: number) {
    onRemove(id)
  }
  return (
    <ListItem
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        background: 'green',
        fontSize: '500',
      }}
      onDoubleClick={() => {
        handleDoubleClick(todo.id)
      }}
    >
      <span>{todo.id}</span>
      <span>{todo.text + ' '}</span>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo.id)}
      />
    </ListItem>
  )
}
