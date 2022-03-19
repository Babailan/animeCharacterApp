import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router from "next/router";
import {
  searchData,
  logoOnClick,
  onSubmitSearch,
} from "../../libs/navbarFunctions";
import FormSearchBox from "../searchBoxNav/mainSearchBox";

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
    setSearchBox(false);
    setText("");
    setData([]);
    await Router.push(`/character/id/${id}`);
  };
  //SearchNavbar

  return (
    <>
      {/* navbar */}
      <div className="search-icon">
        <FaBars className="bar" />
        <FaSearch
          className="magni"
          onClick={() => {
            setSearchBox((p: any) => !p);
          }}
        />
      </div>
      <div className="logo" onClick={logoOnClick}>
        <p className="logoMain">AW</p>
      </div>
      <div className="logins-signups">
        <button className="login">login</button>
        <button className="sign-up">sign up</button>
      </div>
      {/* SearchBoxIfStatement*/}
      {SearchBox ? (
        <FormSearchBox
          category={category}
          setPreviousCall={setPreviousCall}
          searchData={searchData}
          onSubmitSearch={onSubmitSearch}
          text={text}
          setCategory={setCategory}
          data={data}
          setData={setData}
          previousCall={previousCall}
          setText={setText}
          onClickBox={onClickBox}
        />
      ) : null}
    </>
  );
}

export default MobileNavbar;
