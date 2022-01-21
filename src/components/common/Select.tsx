import { IconContext } from "react-icons/lib";
import styles from "styles/components/Input.module.scss";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";
import { useEffect, useRef, useState } from "react";

interface IProps {
  type?: string;
  value?: any;
  onChange?: any;
  error?: boolean;
  disabled?: boolean;
  placeholder: string;
  width?: string;
  required?: boolean;
  label?: string;
  height?: string;
  name: string;
  maxLength?: number;
  options?: any[];
  multiple?: boolean;
  children?: any;
  id?: string;
  defaultValue?: any;
  left?: string;
  async?: boolean;
  loadOptions?: any;
}

export default function Select(props: IProps) {
  const { value, error, width, disabled } = props;
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    setIsInvalid(false);
  }, [props.value]);

  const selectRef = useRef(null);

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
        size: "20",
        color: "var(--Gray60)",
        style: { marginRight: 10 },
      }}
    >
      <div
        data-invalid={isInvalid}
        className={styles.input_container}
        {...inputProps}
      >
        {props.label && (
          <label htmlFor={props.name}>
            {props.label} {props.required ? "*" : null}
          </label>
        )}
        <div className={styles.input}>
          {props.async ? (
            <AsyncSelect
              ref={selectRef}
              className={styles.selectMultiple}
              onInputChange={props.onChange}
              onChange={null}
              {...props}
              isClearable
              loadOptions={(value: string, cb: any) =>
                props.loadOptions(value, cb, selectRef.current)
              }
            />
          ) : (
            <ReactSelect
              ref={selectRef}
              isMulti={props.multiple}
              className={styles.selectMultiple}
              onInputChange={props.onChange}
              {...props}
              isClearable
            />
          )}
          {props.required && (
            <input
              tabIndex={-1}
              autoComplete="off"
              style={{
                opacity: 0,
                width: "100px",
                height: 0,
                position: "absolute",
              }}
              value={selectRef.current?.value}
              onChange={null}
              onFocus={() => selectRef.current?.focus()}
              required={props.required}
              onInvalid={handleInvalid}
            />
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
}
