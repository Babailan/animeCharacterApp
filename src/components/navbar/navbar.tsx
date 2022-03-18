import { useState } from "react";
import MobileNavbar from "./navbarMobile";

type Navbars = {
  width: number;
};

export default function Navbar({ width }: Navbars) {
  const [category, setCategory] = useState("characters");
  const [previousCall, setPreviousCall] = useState();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  return (
    <>
      {width < 750 ? (
        <MobileNavbar
          data={data}
          setData={setData}
          text={text}
          setText={setText}
          setCategory={setCategory}
          category={category}
          previousCall={previousCall}
          setPreviousCall={setPreviousCall}
        />
      ) : (
        <h1>more than</h1>
      )}
    </>
  );
}
