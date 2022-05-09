import css from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={css.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
