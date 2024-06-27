
const TodoNew = (props) => {
    console.log("Check props: ", props)
    const {addNewTodo} = props;

    // addNewTodo("abc")
    const handleClick = () => {
      alert("click me")
    }
    const handleOnChange = (event) => {
      console.log("handleOnChange", event.target.value)
    }
    return (
        <div className='todo-new'>
          <input type="text"
            onChange={handleOnChange}
        />
        <button 
            style={{cursor: "Pointer"}}
            onClick={handleClick}
        >Add</button>
      </div>
    )
}

export default TodoNew;