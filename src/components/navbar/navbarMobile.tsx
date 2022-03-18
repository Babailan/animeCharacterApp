import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";
import SeachBox from "../searchButton";
import searchData from "../libs/searchNavbar";

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

  const onClickBox = async (e: any, id: any) => {
    e.preventDefault();
    await Router.push(`/character/id/${id}`);
    Router.reload();
  };
  //SearchNavbar
  const Search = (e: any) => {
    Router.push(`/character/${text}`);
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
              setSearchBox((p: any) => !p);
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
              dataSearch={(e) =>
                searchData(e, setPreviousCall, setData, previousCall, category)
              }
              placeholder={category}
              text={text}
              setText={setText}
              className="searchBox"
            >
              <select
                defaultValue={category}
                className="optionCategory"
                onChange={(e) => {
                  setCategory(e.target.value);
                  setData([]);
                  searchData(
                    text,
                    setPreviousCall,
                    setData,
                    previousCall,
                    e.target.value
                  );
                }}
              >
                <option value="characters">character</option>
                <option value="anime">anime</option>
                <option value="manga">manga</option>
              </select>
            </SeachBox>
            {data.length ? (
              <div className="dropDrop">
                {category === "characters"
                  ? data.map(({ name, images, mal_id }, index) => {
                      console.log(data);
                      return (
                        <div
                          key={index}
                          className="card-bar"
                          onClick={(e) => onClickBox(e, mal_id)}
                        >
                          <img
                            src={images.webp.image_url}
                            width={"25px"}
                            height={"40px"}
                            className="card-bar-image"
                          />
                          <p>{name}</p>
                        </div>
                      );
                    })
                  : null}
                {category === "anime"
                  ? data.map(({ title, images }, index) => {
                      return (
                        <div
                          key={index}
                          className="card-bar"
                          // onClick={onClickBox}
                        >
                          <img
                            src={images.webp.image_url}
                            width={"25px"}
                            height={"40px"}
                            className="card-bar-image"
                          />
                          <p>{title}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            ) : null}
          </form>
        ) : null}
      </div>
    </>
  );
}

export default MobileNavbar;
