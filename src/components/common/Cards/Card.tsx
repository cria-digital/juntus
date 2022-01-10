export default function Card(props: any) {
  return (
    <div
      style={{ width: props.width || "90%" }}
      className={"card appear " + (props.className || "")}
    >
      {props.children}
    </div>
  );
}
