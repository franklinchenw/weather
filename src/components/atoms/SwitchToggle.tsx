import { FunctionComponent, useState } from "react";

interface ISwitchToggleProps {
  on: string;
  off: string;
  toggleOn: (checked: boolean) => void;
}

export const SwitchToggle: FunctionComponent<ISwitchToggleProps> = ({
  on,
  off,
  toggleOn,
}) => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="can-toggle demo-rebrand-2">
      <input
        id="e"
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          toggleOn(!checked);
        }}
      />
      <label htmlFor="e">
        <div
          className="can-toggle__switch"
          data-checked={on}
          data-unchecked={off}
          // onClick={toggleOn}
        ></div>
      </label>
    </div>
  );
};
