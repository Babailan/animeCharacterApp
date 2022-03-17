import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  setText: (e: string) => void;
  className: string;
  setDropDown: (e: boolean) => void;
  children: ReactNode;
  placeholder: string;
  dataSearch: () => void;
};

function Button({
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
          dataSearch();
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
