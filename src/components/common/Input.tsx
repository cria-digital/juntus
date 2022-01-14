import { IInputProps } from "helpers/interfaces";
import { IconContext } from "react-icons/lib";
import { MdFileUpload, MdSearch } from "react-icons/md";
import styles from "styles/components/Input.module.scss";

const getIcon = (type: string) =>
  type === "search" ? <MdSearch /> : type === "file" ? <MdFileUpload /> : null;

export default function Input(props: IInputProps) {
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
        size: type === "file" ? "35" : "20",
        color: "var(--Gray60)",
        style: { marginRight: 10 },
      }}
    >
      <div
        className={styles.input_container + " input-container"}
        {...inputProps}
      >
        {props.label && (
          <label htmlFor={props.name}>
            {props.label} {props.required ? "*" : null}
          </label>
        )}
        <div
          className={styles.input}
          style={{ height: props.height || "40px" }}
        >
          {type === "file" && (
            <label
              id="placeholder"
              htmlFor={props.name}
              className={styles.placeholder}
            >
              {props.placeholder}
            </label>
          )}
          {props.type === "textarea" ? (
            <textarea id={props.name} {...props}></textarea>
          ) : (
            <input id={props.name} {...props} />
          )}
          {getIcon(props.type)}
        </div>
      </div>
    </IconContext.Provider>
  );
}
