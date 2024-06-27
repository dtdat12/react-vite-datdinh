import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import './components/todo/todo.css';
import LogoReact from './assets/react.svg';

const App = () => {
  const datdinh = "itsme"
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  
  // function myFunction() {
  //   console.log("My Function");
  // }
  // const myFunction = () => {
  //   console.log("My Function");
  // }
  // myFunction();
  return (
    <div className = "todo-container">
      <div className = "Todo-List"> Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
      name={datdinh}/>
      <div className='todo-image'>
        <img src={LogoReact} className='Logo'/>
      </div>
    </div>
  )
}

export default App
