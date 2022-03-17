import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  setText: (e: string) => void;
  className: string;
  setDropDown: (e: boolean) => void;
  children: ReactNode;
};

function Button({
  text,
  setText,
  className,
  setDropDown,
  children,
}: ButtonProps) {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Character"
        className={className}
        value={text}
        onChange={(e) => {
          if (e.target.value) {
            setDropDown(true);
          } else {
            setDropDown(false);
          }
          return setText(e.target.value);
        }}
      />
      {children}
    </div>
  );
}
export default Button;
