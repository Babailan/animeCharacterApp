import { FaSearch } from "react-icons/fa";
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
      <div className="navbar">
        <div className="search-icon">
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
          <a className="login">login</a>
          <a className="sign-up">sign up</a>
        </div>
      </div>
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
