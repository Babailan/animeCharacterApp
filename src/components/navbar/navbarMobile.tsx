import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";
import Button from "../searchButton";

export default function MobileNavbar() {
  const [SearchBox, setSearchBox] = useState(true);
  const [textC, setTextC] = useState(false);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("character");

  function Search(e: any) {
    e.preventDefault();
    Router.push(`/character/${text}`);
  }
  const logoClick = () => {
    Router.push(`/`);
  };
  return (
    <>
      {/* navbar */}
      <div className="navbar">
        <div className="search-icon">
          <FaBars className="bar" />
          <FaSearch
            className="magni"
            onClick={() => {
              setSearchBox((p) => !p);
            }}
          />
        </div>
        <div className="logo" onClick={logoClick}>
          <p className="logoMain">aw</p>
        </div>
        <div className="logins-signups">
          <button className="login">login</button>
          <button className="sign-up">sign up</button>
        </div>
      </div>
      {/* if else StateMent */}
      {SearchBox ? (
        <form onSubmit={Search} className="container-search">
          <Button
            text={text}
            setText={setText}
            className="searchBox"
            setDropDown={setTextC}
          >
            <select
              defaultValue={"character"}
              className="optionCategory"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="character">character</option>
              <option value="anime">anime</option>
              <option value="manga">manga</option>
            </select>
          </Button>
          {textC ? <div className="dropDrop">{text}</div> : null}
        </form>
      ) : null}
    </>
  );
}
