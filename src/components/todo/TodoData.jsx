const TodoData = (props) => {
  const { todoList } = props;
  console.log("check props", todoList);

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log("Check map: ", item, index);
        return (
          <div className="todo-item">
            {item.name}
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
