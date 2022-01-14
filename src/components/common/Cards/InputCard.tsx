import { IButtonProps, IInputProps } from "helpers/interfaces";
import Button from "../Button";
import Input from "../Input";
import Card from "./Card";

interface IProps {
  children?: JSX.Element;
  noChildren?: boolean;
  inputs?: any[];
  buttons?: any[];
}

export default function InputCard(props: IProps) {
  if (props.children && !props.noChildren)
    return (
      <Card>
        <div className="input-card">{props.children}</div>
      </Card>
    );

  return (
    <Card className="input-card">
      <div>
        {props.inputs.map((inputs, index) => (
          <div key={index} className="flex">
            {inputs.map((input: IInputProps) => (
              <Input key={input.name} {...input} />
            ))}
          </div>
        ))}

        {props.children ? props.children : null}

        <div className="buttons-container">
          {props.buttons.map((button: IButtonProps) => (
            <Button key={button.name} {...button} />
          ))}
        </div>
      </div>
    </Card>
  );
}
