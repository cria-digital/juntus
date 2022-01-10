import "styles/components/common/Button.scss";

export default function Button(props: any) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`btn ${props.type}`}
      role={props.role}
    >
      {props.children}
    </button>
  );
}
