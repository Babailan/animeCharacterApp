import { useState, useEffect } from "react";
import MobileNavbar from "./navbarMobile";

export default function Navbar() {
  const [width, setWidth] = useState<number>(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
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
      ) : null}
    </>
  );
}
