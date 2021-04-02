import React, { useState } from "react";


function TodoItem(props) {
    const [checked, setChecked] = useState(false);

    function handleClick() {
        setChecked((preValue) => {
            return !preValue;
        });
    }
    function handleDelete(id) {
        props.done(id);
    }

    return <div>
        <li style={{ textDecoration: checked ? "line-Through" : "none" }} onClick={handleClick}>
            {props.item}
            <button style={{ display: checked ? "initial" : "none" }} onClick={() => {
                handleDelete(props.id)
            }}>
                <span>-</span></button>
        </li>

    </div>

}

export default TodoItem