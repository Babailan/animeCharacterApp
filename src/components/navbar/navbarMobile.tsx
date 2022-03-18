import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";
import SeachBox from "../searchButton";
import axios from "axios";

type Props = {
  text: string;
  setText: Function;
  category: string;
  setCategory: Function;
  data: Array<any>;
  setData: Function;
  setPreviousCall: Function;
  previousCall: any;
};
// Mobile Navbar
function MobileNavbar({
  text,
  setText,
  category,
  setCategory,
  data,
  setData,
  setPreviousCall,
  previousCall,
}: Props) {
  const [SearchBox, setSearchBox] = useState(false);

  //SearchNavbar
  function Search(e: any) {
    Router.push(`/character/${text}`);
  }
  const searchData = (value: string) => {
    if (value && value.length >= 3) {
      let previousTime = setTimeout(async () => {
        const req = await axios.get(`https://api.jikan.moe/v4/${category}`, {
          params: { limit: 6, q: value },
        });

        const character = req.data.data;
        setData(character);
        console.log(data);
      }, 1000);
      clearTimeout(previousCall);
      setPreviousCall(previousTime);
    } else {
      setData([]);
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
          <p className="logoMain">AW</p>
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
            {data.length ? (
              <div className="dropDrop">
                {data.map(({ name, images }, index) => {
                  console.log(data);
                  return (
                    <div key={index} className="card-bar">
                      <img
                        src={images.webp.image_url}
                        width={"25px"}
                        height={"40px"}
                        className="card-bar-image"
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

export default MobileNavbar;
