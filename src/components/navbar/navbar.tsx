import { useState } from "react";
import MobileNavbar from "./navbarMobile";

type Navbars = {
  width: number;
};

export default function Navbar({ width }: Navbars) {
  const [category, setCategory] = useState("characters");
  const [text, setText] = useState("");
  return (
    <>
      {width < 750 ? (
        <MobileNavbar
          text={text}
          setText={setText}
          setCategory={setCategory}
          category={category}
        />
      ) : (
        <h1>more than</h1>
      )}
    </>
  );
}
