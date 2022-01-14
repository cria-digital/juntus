import { IButtonProps } from "helpers/interfaces";
import "styles/components/Button.scss";

export default function Button(props: IButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`btn ${props.type}`}
      role={props.role}
      type={props.submit ? "submit" : "button"}
    >
      {props.children}
    </button>
  );
}
