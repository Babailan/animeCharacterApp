import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";

export default function MobileNavbar() {
  const [SearchBox, setSearchBox] = useState(false);
  const [text, setText] = useState("");
  function Search(e: any) {
    e.preventDefault();
    // Router.push(`/character/`);
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p className="A">a</p>
          <p className="middle">)</p>
          <p className="C">c</p>
        </div>
        <div className="search-icon">
          <FaSearch
            className="magni"
            onClick={() => {
              setSearchBox((p) => !p);
            }}
          />
        </div>
      </div>
      {SearchBox ? (
        <form onSubmit={Search}>
          <input
            type="text"
            placeholder="Character"
            className="SearchBox"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </form>
      ) : null}
    </>
  );
}
