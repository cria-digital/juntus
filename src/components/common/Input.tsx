import { IInputProps } from "helpers/interfaces";
import { useState } from "react";
import { IconContext } from "react-icons/lib";
import { MdFileUpload, MdSearch } from "react-icons/md";
import InputMask from "react-input-mask";
import styles from "styles/components/Input.module.scss";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import { useEffect } from "react";

const getIcon = (type: string) =>
  type === "search" ? <MdSearch /> : type === "file" ? <MdFileUpload /> : null;

export default function Input(props: IInputProps) {
  const { type, value, error, width, disabled } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    setIsInvalid(false);
  }, [props.value]);

  const inputProps = {
    "data-value": !!value,
    "data-error": error,
    "data-disabled": disabled,
    style: { width: width || "100%", marginLeft: props.left || "auto" },
  };

  const handleInvalid = (e: any) => {
    e.target.setCustomValidity("");
    setIsInvalid(true);
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
        data-invalid={isInvalid}
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
          ) : props.mask ? (
            <>
              <InputMask
                id={props.name}
                name={props.name}
                onChange={(e) => props.changeAutoComplete(e, props.name)}
                {...props}
              />
              {isInvalid && <span>Invalido</span>}
            </>
          ) : props.autoComplete ? (
            <TextInput
              trigger=""
              options={["teste"]}
              className="autocomplete"
              id={props.name}
              {...props}
            />
          ) : (
            <input
              title=""
              onInvalid={handleInvalid}
              id={props.name}
              {...props}
            />
          )}
          {getIcon(props.type)}
        </div>
      </div>
    </IconContext.Provider>
  );
}
