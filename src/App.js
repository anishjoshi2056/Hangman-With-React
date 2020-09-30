import React, {useState} from 'react';
import TodoList from './TodoList';

function App() {
  const [todos] = useState([])
  
  
  return (
    <>
     <TodoList todos={todos}/>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
    </>
  );
}

export default App;
