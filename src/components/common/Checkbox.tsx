import { BsCheckLg } from "react-icons/bs";

export default function CheckBox(props: any) {
  return (
    <div className="checkbox-container">
      <div data-checked={props.checked}>
        <div
          style={{
            position: "absolute",
            fontSize: 15,
            display: "flex",
            padding: 2,
          }}
        >
          <BsCheckLg />
        </div>
        <input id={props.name} {...props} type="checkbox" />
      </div>

      {props.label && <label htmlFor={props.name}>{props.label}</label>}
    </div>
  );
}
