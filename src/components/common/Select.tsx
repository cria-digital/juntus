import { IconContext } from "react-icons/lib";
import styles from "styles/components/common/Input.module.scss";

export default function Select(props) {
  const { type, value, error, width, disabled } = props;

  const inputProps = {
    "data-value": !!value,
    "data-error": error,
    "data-disabled": disabled,
    style: { width: width || "100%" },
  };

  return (
    <IconContext.Provider
      value={{
        size: "20",
        color: "var(--Gray60)",
        style: { marginRight: 10 },
      }}
    >
      <div className={styles.input_container} {...inputProps}>
        {props.label && (
          <label htmlFor={props.name}>
            {props.label} {props.required ? "*" : null}
          </label>
        )}
        <div className={styles.input}>
          <select id={props.name} {...props}>
            <option value=""> {props.placeholder}</option>
            {props.children}
          </select>
        </div>
      </div>
    </IconContext.Provider>
  );
}
