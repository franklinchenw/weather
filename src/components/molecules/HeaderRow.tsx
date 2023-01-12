import { TEMP_SIGNS } from "../../constants/types";
import { SwitchToggle } from "../atoms/SwitchToggle";

interface IHeaderProps {
  title: string;
  switchOn: (checked: boolean) => void;
}

export const HeaderRow: React.FunctionComponent<IHeaderProps> = ({
  title,
  switchOn,
}) => {
  const toggleOn = (checked: boolean) => {
    switchOn(checked);
  };
  return (
    <div className="header">
      <div>{title}</div>
      <SwitchToggle
        on={TEMP_SIGNS.METRIC}
        off={TEMP_SIGNS.IMPERIAL}
        toggleOn={toggleOn}
      />
    </div>
  );
};
