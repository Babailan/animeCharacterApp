import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  setText: Function;
  className: string;
  children: ReactNode;
  dataSearch: (e: any) => void;
  setData: Function;
};

function SearchBox({
  text,
  setText,
  className,
  children,
  dataSearch,
  setData,
}: ButtonProps) {
  return (
    <div className="containerSearch-2">
      <input
        type="text"
        className={className}
        value={text}
        onChange={(e) => {
          setData([]);
          setText(e.target.value);
          dataSearch(e.target.value);
          return;
        }}
      />
      {children}
    </div>
  );
}
export default SearchBox;
