import { useState } from "react";

import Button from "../UI/Button.js";
import Card from "../UI/Card.js";
import Modal from "../UI/Modal.js";
import css from "./AddUser.module.css";

export default function AddUser(props) {
  const { onAddUser } = props;

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  function errorHandler() {
    setError(null)
  }

  function addUserHandler(e) {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
        setError({
            title: "Invalid input",
            message: "Please enter a valid name and age"
        })
        return;
    }
      
    onAddUser(username, age);
    setUsername("");
    setAge("");
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };


  return (
    <>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={css.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
