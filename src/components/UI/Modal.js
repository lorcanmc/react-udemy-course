import React from "react";
import ReactDOM from "react-dom";
import css from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

export default function Modal(props) {
  const Backdrop = (props) => {
    return <div className={css.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={css.modal}>
        <header>
          <h2 className={css.title}>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}