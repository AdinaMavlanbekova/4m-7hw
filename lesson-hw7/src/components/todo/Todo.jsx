import {useState} from "react";

export  function Todo({todo, deleteTodo, updateTitle}) {

    const [newTitle, setNewTitle] = useState(todo.title);

    function updateTitles (event) {
        updateTitle(todo.id, newTitle);
        setNewTitle(event.target.value);
    }



    return (
        <div className="todo">
            <input type="checkbox"/>
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>удалить</button>
            <button onClick={updateTitles}>Поменять</button>
        </div>
    )
}