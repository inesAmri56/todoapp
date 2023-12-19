import React,{ useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //use effect
 
  const [inputText, setInputText] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [status , setStatus] = useState('all');
  const [filteredTodos , setFiltredTodos] = useState([]);
  useEffect(()=>{
    filterHandler();
  } ,[todos , status]);
  const filterHandler = () =>{
    switch(status) {
      case 'completed':
        setFiltredTodos(todos.filter((todo )=>todo.completed === true ));
   break;
   case 'uncompleted':
    setFiltredTodos(todos.filter((todo)=>todo.completed === false));
      break;
      default:
        setFiltredTodos(todos);
        break;
  }
  }
  return (
    <div className="App">
      
      <header>
        <h1> Ines to do list</h1>
     
      </header>
      <Form inputText={inputText} todos={todos} 
      setTodos={setTodos} 
       setInputText={setInputText} 
        setStatus = {setStatus}
        filteredTodos={ filteredTodos}
        
       />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
    
  );
}

export default App;
