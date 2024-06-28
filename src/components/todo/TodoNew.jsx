import { useState } from "react";

const TodoNew = (props) => {
  // console.log("Check props: ", props);
  const [valueInput, setValueInput] = useState("datdinh");
  const { addNewTodo } = props;

  // addNewTodo("abc")
  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("");
  };
  const handleOnChange = (name) => {
    setValueInput(name);
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button style={{ cursor: "Pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
