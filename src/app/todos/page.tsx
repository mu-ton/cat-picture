"use client";
import { useState } from "react";
import TaskList from "./TaskList";

export type Todo = {
  id: number;
  content: string;
};
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([{ id: 0, content: "Todo1" }]);
  const [inputText, setInputText] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);
  const clickHandler = () => {
    setTodos((prev) => [...prev, { id: prev.length, content: inputText }]);
    setInputText("");
  };
  const allDeleteHandler = () => {
    setTodos([]);
  };
  return (
    <>
      <h1>Todoリスト</h1>
      <input type="text" value={inputText} onChange={changeHandler} />
      <button onClick={clickHandler}>ボタン</button>
      <button onClick={allDeleteHandler}>削除</button>
      <TaskList todos={todos} />
    </>
  );
}
