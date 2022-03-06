import React, { useState, useEffect} from "react";
import TodoForm from "./TodoForm.component";
import Todo from "./Todo.component";
import './Todo.style.css'

function TodoList() {
 const[todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos')));

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


    const addTodo = todo => {
         if (!todo.value || /^\s*$/.test(todo.value)) {
              return;
         };
        const NewTodos = [todo,...todos];
        setTodos(NewTodos);
    };

    const updateTodo = (todoId,newValue) => {
        if (!newValue.value || /^\s*$/.test(newValue.value)) {
            return;
       };
       setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));

    };

    const deleteTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map( todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return(
        <div>
            <h1>What is your plan for today?</h1>
            <TodoForm onSubmit={(todo) =>addTodo(todo)}/>

            <Todo
             todos={todos}
            //  completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              completeTodo={completeTodo}
             /> 

        </div>
    );
};

export default TodoList;