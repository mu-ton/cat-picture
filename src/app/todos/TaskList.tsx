"use client";
import type { Todo } from "./page";

type TaskListProps = {
  todos: Todo[];
};

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
    </>
  );
};

export default TaskList;
