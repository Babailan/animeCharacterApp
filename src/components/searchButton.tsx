import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  setText: Function;
  className: string;
  children: ReactNode;
  placeholder: string;
  dataSearch: (e: any) => void;
};

function SeachBox({
  text,
  setText,
  className,
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
          dataSearch(e.target.value);
          return;
        }}
      />
      {children}
    </div>
  );
}
export default SeachBox;
