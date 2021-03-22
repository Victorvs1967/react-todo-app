import { Button } from "react-bootstrap-v5";

const Todo = ({ index, todo, markTodo, removeTodo }) => (
    <div className="todo">
        <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>{todo.text}</span>
        <div>
            <Button variant="online-success" onClick={() => markTodo(index)}>✔︎</Button>{' '}
            <Button variant="online-danger" onClick={() => removeTodo(index)}>✘</Button>
        </div>
    </div>
);

export default Todo;