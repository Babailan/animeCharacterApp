// import { useWindowWidth } from "@react-hook/window-size";
import { useState, Fragment } from "react";
import Media from "react-media";
import dynamic from "next/dynamic";
const MobileNavbar = dynamic(() => import("./navbarMobile"));

const SizeQuery = {
  mobileNav: "(max-width: 640px)",
  DesktopNav: "(min-width: 641px)",
};

export default function Navbar() {
  // const handleResize = () => setWidth(window.innerWidth);

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  // }, []);
  const [category, setCategory] = useState("characters");
  const [previousCall, setPreviousCall] = useState();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className={`navbar`}>
      <Media queries={SizeQuery}>
        {(matches) => (
          <Fragment>
            {matches.mobileNav && (
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
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}
