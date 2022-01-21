import { IconContext } from "react-icons/lib";
import styles from "styles/components/Input.module.scss";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";

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

  const inputProps = {
    "data-value": !!value,
    "data-error": error,
    "data-disabled": disabled,
    style: { width: width || "100%", marginLeft: props.left || "auto" },
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
          {props.async ? (
            <AsyncSelect
              className={styles.selectMultiple}
              onInputChange={props.onChange}
              onChange={null}
              {...props}
            />
          ) : (
            <ReactSelect
              isMulti={props.multiple}
              className={styles.selectMultiple}
              onInputChange={props.onChange}
              {...props}
            />
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
}
