import { useState, Fragment, useContext } from "react";
import Media from "react-media";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import NavDesktop from "./navbarDesktop";
import { Query } from "../../hooks/sizeQuery";
const MobileNavbar = dynamic(() => import("./navbarMobile"), { ssr: false });

export default function Navbar() {
  const query = useContext(Query);
  const [navbar, onLoad] = useState(true);
  useEffect(() => {
    onLoad(false);
  }, []);
  const [category, setCategory] = useState("characters");
  const [previousCall, setPreviousCall] = useState();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  return (
    <div className={`navbar`}>
      {navbar ? (
        <>
          <div className="skeleton-1"></div>
          <div className="skeleton-2"></div>
          <div className="skeleton-3"></div>
        </>
      ) : (
        <Media queries={query}>
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
              {matches.DesktopNav && (
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
              )}
            </Fragment>
          )}
        </Media>
      )}
    </div>
  );
}
