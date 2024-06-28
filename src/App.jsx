import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import "./components/todo/todo.css";
import LogoReact from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([
    // {
    //   id: 1,
    //   name: "Learning React ",
    //   id: 2,
    //   name: "Watching Youtube",
    // },
  ]);
  // const datdinh = "itsme";
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };

    setTodoList([...todoList, newTodo]);
  };

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // function myFunction() {
  //   console.log("My Function");
  // }
  // const myFunction = () => {
  //   console.log("My Function");
  // }
  // myFunction();
  return (
    <div className="todo-container">
      <div className="Todo-List"> Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData
        //  name={datdinh}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={LogoReact} className="Logo" />
      </div>
    </div>
  );
};

export default App;
