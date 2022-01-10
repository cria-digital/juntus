import styles from "styles/components/common/Input.module.scss";
import { MdSearch, MdFileUpload } from "react-icons/md";
import { IconContext } from "react-icons/lib";

const textTypes = ["text", "password", "search", "file", "email"];

const getIcon = (type: string) =>
  type === "search" ? <MdSearch /> : type === "file" ? <MdFileUpload /> : null;

export default function Input(props: any) {
  const { type, value, error, width, disabled } = props;

  if (textTypes.includes(type)) {
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
        <div className={styles.input_container} {...inputProps}>
          {props.label && (
            <label htmlFor={props.name}>
              {props.label} {props.required ? "*" : null}
            </label>
          )}
          <div className={styles.input}>
            {type === "file" && (
              <label
                id="placeholder"
                htmlFor={props.name}
                className={styles.placeholder}
              >
                {props.placeholder}
              </label>
            )}
            <input id={props.name} {...props} />
            {getIcon(props.type)}
          </div>
        </div>
      </IconContext.Provider>
    );
  }

  return null;
}
