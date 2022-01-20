import { IButtonProps, IInputProps } from "helpers/interfaces";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import Card from "./Card";

interface IProps {
  children?: JSX.Element;
  noChildren?: boolean;
  inputs?: any[];
  buttons?: any[];
  item?: any;
  add?: string;
  index?: number;
  setInputs?: any;
}

export default function InputCard(props: IProps) {
  if (props.children && !props.noChildren)
    return (
      <Card>
        <div className="input-card">{props.children}</div>
      </Card>
    );

  console.log(props.add);

  const addState = () => {
    props.setInputs((state: any[]) => [...state, props.item]);
  };

  return (
    <Card className="input-card">
      <div>
        {props.inputs.map((inputs, index) => (
          <div key={index} className="flex">
            {inputs.map((input: any) =>
              input.select ? (
                <Select key={input.name} {...input} />
              ) : (
                <Input key={input.name} {...input} />
              )
            )}
          </div>
        ))}

        {props.children ? props.children : null}

        {props.add && (
          <p
            style={{ cursor: "pointer", color: "var(--JuntUs-Blue)" }}
            onClick={addState}
          >
            + {props.add}
          </p>
        )}

        <div className="buttons-container">
          {props.buttons.map((button: IButtonProps) => (
            <Button key={button.name} {...button} />
          ))}
        </div>
      </div>
    </Card>
  );
}
