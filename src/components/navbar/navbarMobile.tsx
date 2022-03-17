import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";
import Button from "../searchButton";
import axios from "axios";

export default function MobileNavbar() {
  const [SearchBox, setSearchBox] = useState(false);
  const [textC, setTextC] = useState(false);
  const [text, setText] = useState("");
  const [category, setCategory] = useState("characters");
  const [data, setData] = useState(null);

  function Search(e: any) {
    e.preventDefault();
    Router.push(`/character/${text}`);
  }
  const searchData = async () => {
    const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
      params: { order_by: "favorites", q: text },
    });
    setData(req.data.data);
  };
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
        {/* if else StateMent */}
        {SearchBox ? (
          <form onSubmit={Search} className="container-search">
            <Button
              dataSearch={searchData}
              placeholder={category}
              text={text}
              setText={setText}
              className="searchBox"
              setDropDown={setTextC}
            >
              <select
                defaultValue={"characters"}
                className="optionCategory"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="characters">character</option>
                <option value="anime">anime</option>
                <option value="manga">manga</option>
              </select>
            </Button>
            {textC ? <div className="dropDrop">{}</div> : null}
          </form>
        ) : null}
      </div>
    </>
  );
}
