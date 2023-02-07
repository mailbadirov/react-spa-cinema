import { ComponentType } from "react";

import { IHighOrderButtonProps } from "./types";

const HighOrderButton =
  <T,>(OriginalComponent: ComponentType<T>) =>
  (props: T & IHighOrderButtonProps) => {
    const { onClick: propsClick } = props;

    const handleClick = () => {
      propsClick && propsClick();
    };

    return (
      <button onClick={handleClick}>
        <OriginalComponent {...props} />
      </button>
    );
  };

export default HighOrderButton;
