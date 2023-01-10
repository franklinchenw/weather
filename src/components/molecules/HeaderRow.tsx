import { FunctionComponent, useState } from "react";
import { SwitchToggle } from "../atoms/SwitchToggle";

interface IHeaderProps {
  title: string;
  toggle: boolean;
  test: any;
}

export const HeaderRow: FunctionComponent<IHeaderProps> = ({
  title,
  toggle,
  test,
}) => {
  const [switchOn, setSwitchOn] = useState(true);

  const toggleOn = (checked: boolean) => {
    setSwitchOn(checked);
  };
  return (
    <div className="header">
      <div>{title}</div>
      <SwitchToggle on={"°C"} off={"°F"} toggleOn={toggleOn} />
    </div>
  );
};
