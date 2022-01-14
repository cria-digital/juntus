interface IProps {
  className?: string;
  width?: string;
  children: JSX.Element | JSX.Element[];
}

export default function Card(props: IProps) {
  return (
    <div
      style={{ width: props.width || "90%" }}
      className={"card appear " + (props.className || "")}
    >
      {props.children}
    </div>
  );
}
