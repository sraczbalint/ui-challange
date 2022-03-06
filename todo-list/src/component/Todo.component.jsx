import React, { useState} from "react";
import './Todo.style.css'
import { BiEdit } from 'react-icons/bi';
import { TiDelete } from 'react-icons/ti';
import TodoForm from "./TodoForm.component";

function Todo ({updateTodo,deleteTodo, completeTodo, todos }) {
        const [edit, setEdit] = useState({
            id: null,
            value: ''
        });

    const submitUpdate = value => {
        updateTodo(edit.id,value)
        setEdit({
            id: null,
            value: ''
        })};

        
    if (edit.id) {
        return <TodoForm onSubmit={submitUpdate} />
    };

    function Tasks() {
            return todos.map((todo, index) => {
                // console.log(index);
                return(
                <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index} >
                    <div className='todo-text' key={todo.id} onClick={() => completeTodo(todo.id)} >
                        {todo.value}
                    </div>
                    <div className="icons">
                        <BiEdit className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.value})}/>
                        <TiDelete className="delete-icon" onClick={() => deleteTodo(todo.id)}/>
                    </div>
                </div> )
                }
                );
            };


        return (
            <div>
                {todos.length > 0 ? Tasks() : (<h1>Nothing Todo!</h1>)}
            </div>
        )
    }        
        
export default Todo;