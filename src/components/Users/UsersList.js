import React from "react";
import Card from "../UI/Card";
import css from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={css.users}>
      <h2>Current Users</h2>
      <ul>
        {props.users.map((user, i) => (
          <li key={i}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
