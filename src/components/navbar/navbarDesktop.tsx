import Router from "next/router";
import { FaBars } from "react-icons/fa";
import {
  logoOnClick,
  onSubmitSearchDesktop,
  searchData,
} from "../../libs/navbarFunctions";
import FormSearchBox from "../searchBoxNav/mainSearchBox";
export default function Desktop({
  data,
  setData,
  text,
  setText,
  setCategory,
  category,
  previousCall,
  setPreviousCall,
}) {
  const onClickBox = async (e: any, id: any) => {
    e.preventDefault();
    setText("");
    setData([]);
    Router.push(`/character/id/${id}`, undefined, { shallow: false });
  };
  return (
    <>
      {/* navbar */}
      <div className="search-icon">
        <FaBars className="bar" />
        <div className="logo" onClick={logoOnClick}>
          <p className="logoMain">AnimeWorld</p>
        </div>
      </div>
      <div className="logins-signups">
        <FormSearchBox
          category={category}
          setPreviousCall={setPreviousCall}
          searchData={searchData}
          onSubmitSearch={onSubmitSearchDesktop}
          text={text}
          setCategory={setCategory}
          data={data}
          setData={setData}
          previousCall={previousCall}
          setText={setText}
          onClickBox={onClickBox}
        />
        <button className="login">login</button>
        <button className="sign-up">sign up</button>
      </div>
    </>
  );
}
