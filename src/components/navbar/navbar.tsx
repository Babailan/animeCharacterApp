import { useState, useContext } from "react";
import Media from "react-media";
import dynamic from "next/dynamic";
const NavDesktop = dynamic(() => import("./navbarDesktop"), { ssr: false });
import { Query } from "../../hooks/sizeQuery";
const MobileNavbar = dynamic(() => import("./navbarMobile"), { ssr: false });

export default function Navbar() {
  const query = useContext(Query);

  const [category, setCategory] = useState("characters");
  const [previousCall, setPreviousCall] = useState();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className={`navbar`}>
      <Media query={query.mobileNav}>
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
      </Media>
      <Media query={query.DesktopNav}>
        <NavDesktop
          data={data}
          setData={setData}
          text={text}
          setText={setText}
          setCategory={setCategory}
          category={category}
          previousCall={previousCall}
          setPreviousCall={setPreviousCall}
        />
      </Media>
    </div>
  );
}
