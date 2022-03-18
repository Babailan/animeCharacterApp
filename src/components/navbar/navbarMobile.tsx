import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";
import SeachBox from "../searchButton";
import axios from "axios";
import Image from "next/image";

type Props = {
  text: string;
  setText: Function;
  category: string;
  setCategory: Function;
  setPreviousRequest: Function;
  previousRequest: any;
};

export default function MobileNavbar({
  text,
  setText,
  category,
  setCategory,
  setPreviousRequest,
  previousRequest,
}: Props) {
  const [SearchBox, setSearchBox] = useState(false);
  const [dropData, setdropData] = useState(false);
  const [data, setData] = useState([]);
  //SearchNavbar
  function Search(e: any) {
    e.preventDefault();
    Router.push(`/character/${text}`);
  }
  const searchData = async (value: string) => {
    if (value) {
      console.log(data);
      const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
        params: { order_by: "favorites", limit: 10, letter: value },
      });

      const character = req.data.data;
      setData(character);
    } else {
      return;
    }
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
            <SeachBox
              dataSearch={searchData}
              placeholder={category}
              text={text}
              setText={setText}
              className="searchBox"
              setDropDown={setdropData}
            >
              <select
                defaultValue={category}
                className="optionCategory"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="characters">character</option>
                <option value="anime">anime</option>
                <option value="manga">manga</option>
              </select>
            </SeachBox>
            {dropData ? (
              <div className="dropDrop">
                {data.map(({ name, images }, index) => {
                  return (
                    <div key={index}>
                      <Image
                        src={images.jpg.image_url}
                        width="100px"
                        height="100px"
                      />
                      <p>{name}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </form>
        ) : null}
      </div>
    </>
  );
}
