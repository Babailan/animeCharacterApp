import { useState } from "react";
import MobileNavbar from "./navbarMobile";
import { useWidth } from "../hooks/useWidth";
export default function Navbar() {
  let width = useWidth();
  const [category, setCategory] = useState("characters");
  const [previousCall, setPreviousCall] = useState();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  return (
    <>
      {width < 768 ? (
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
