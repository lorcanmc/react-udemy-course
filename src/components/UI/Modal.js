import React from "react";
import css from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function Modal(props) {
  const { title, message, onConfirm } = props;

  return (
    <>
      <div className={css.backdrop} onClick={onConfirm} />
      <Card className={css.modal}>
        <header>
          <h2 className={css.title}>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <Button onClick={onConfirm}>OK</Button>
        </footer>
      </Card>
    </>
  );
}
