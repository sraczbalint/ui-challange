import React, { useState,useRef, useEffect} from "react";
import './Todo.style.css'


function TodoForm(props) {
    const [input, setInput] = useState('');


    const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();
    // })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

         props.onSubmit ({
             id: Math.floor(Math.random()*10000),
             value: input
         });
        setInput('');
    };

    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input 
            className="todo-input"
            name='text'
            type='text'
            placeholder='Write something'
            onChange={handleChange}
            value={input}
            />
        <button type="submit" className='todo-button'>Submit</button>
        </form>
    )
};

export default TodoForm;