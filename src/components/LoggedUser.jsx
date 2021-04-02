import React, { useState } from "react";
import ToDoItem from "./ToDoItem.jsx";
import axios from "axios";
import Auth from "./Auth";

function LoggedUser() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);
    const [listedItemsFlag, setListedItemsFlag] = useState(true);
  


    function listedItems() {

        axios.get("https://my-check-list-server.herokuapp.com/mylist").then(res => {

            res.data.forEach(item => {
                setItems(prevItems => {
                    return [...prevItems, item];
                });

            });

        });

        setListedItemsFlag(false);

    }

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        axios.post("https://my-check-list-server.herokuapp.com/mylist", { content: inputText }).then(res => {

            setItems(prevItems => {

                return [...prevItems, res.data];
            });

        });

        setInputText("");

    }

    function deleteItem(id) {

        const idDeletedItem = items[id]._id;

        console.log(idDeletedItem);

        axios.delete("https://my-check-list-server.herokuapp.com/mylist", { data: { idDeletedItem } }).then(() => {
            setItems(prevItems => {
                return prevItems.filter((item, index) => {
                    return index !== id;
                });

            });

        });

    }
    return (

        <div className="container">

            <div className="heading">
                <h1>Welcome to your Check List:</h1>
                <p> {Auth.authUser.username} </p>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={inputText} />
                <button onClick={addItem}>
                    <span>+</span>
                </button>
            </div>
            <div>
                <ul>
                    {listedItemsFlag ? listedItems() : items.map((newItem, index) => (
                        <ToDoItem key={index} id={index} item={newItem.content} done={deleteItem} />
                    ))}
                </ul>
            </div>

        </div>


    );
}

export default LoggedUser;