import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [width, setWidth] = useState(0);
  useEffect(()=> {
    setWidth(window.innerWidth)
  },[])
  return (
    <div className="navbar">
      <div className="logo" onClick={()=> {
        console.log(width)
      }}>
        <p className="A">a</p>
        <p className="middle">)</p>
        <p className="C">c</p>
      </div>
      <div className="search-icon">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="magni" />
      </div>
    </div>
  );
}
