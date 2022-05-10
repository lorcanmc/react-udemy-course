import { useState, useRef } from "react";

import Button from "../UI/Button.js";
import Card from "../UI/Card.js";
import Modal from "../UI/Modal.js";
import css from "./AddUser.module.css";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  function errorHandler() {
    setError(null);
  }

  function addUserHandler(e) {
    e.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    props.onAddUser(username, age);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={css.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}
