import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  setText: Function;
  className: string;
  setDropDown: (e: boolean) => void;
  children: ReactNode;
  placeholder: string;
  dataSearch: (e: string) => void;
};

function SeachBox({
  text,
  setText,
  className,
  setDropDown,
  children,
  placeholder,
  dataSearch,
}: ButtonProps) {
  return (
    <div className="containerSearch-2">
      <input
        type="text"
        placeholder={placeholder}
        className={className}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          if (e.target.value) {
            setDropDown(true);
          } else {
            setDropDown(false);
          }
          dataSearch(e.target.value);
          return;
        }}
      />
      {children}
    </div>
  );
}
export default SeachBox;
