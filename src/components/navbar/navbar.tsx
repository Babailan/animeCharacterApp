import { useState } from "react";
import MobileNavbar from "./navbarMobile";

type Navbars = {
  width: number;
};

export default function Navbar({ width }: Navbars) {
  const [category, setCategory] = useState("characters");
  const [text, setText] = useState("");
  const [previousRequest, setPreviousRequest] = useState(undefined);
  return (
    <>
      {width < 750 ? (
        <MobileNavbar
          text={text}
          setText={setText}
          setCategory={setCategory}
          category={category}
          setPreviousRequest={setPreviousRequest}
          previousRequest={previousRequest}
        />
      ) : (
        <h1>more than</h1>
      )}
    </>
  );
}
