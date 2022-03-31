import { FaSearch, FaBars } from "react-icons/fa";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import {
  searchData,
  logoOnClick,
  onSubmitSearchMobile,
} from "../../libs/navbarFunctions";
import FormSearchBox from "../searchBoxNav/navSearchBoxMobile";

type Props = {
  text: string;
  setText: Function;
  category: string;
  setCategory: Function;
  data: Array<any>;
  setData: Function;
  setPreviousCall: Function;
  previousCall: any;
  checkUser: boolean;
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
  checkUser,
}: Props) {
  const router = useRouter();
  const [SearchBox, setSearchBox] = useState(false);

  const onClickBox = async (e: any, id: any) => {
    e.preventDefault();
    setSearchBox(false);
    setText("");
    setData([]);
    Router.push(`/character/id/${id}`, undefined, { shallow: false });
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
      <div className="logo" onClick={(e) => logoOnClick(e, router)}>
        <p className="logoMain">AW</p>
      </div>

      {checkUser ? null : (
        <div className="logins-signups">
          <button className="login">login</button>
          <button className="sign-up">sign up</button>
        </div>
      )}

      {/* SearchBoxIfStatement*/}
      {SearchBox ? (
        <FormSearchBox
          category={category}
          setPreviousCall={setPreviousCall}
          searchData={searchData}
          onSubmitSearch={onSubmitSearchMobile}
          text={text}
          setCategory={setCategory}
          data={data}
          setData={setData}
          previousCall={previousCall}
          setText={setText}
          onClickBox={onClickBox}
          setSearchBox={setSearchBox}
          router={router}
        />
      ) : null}
    </>
  );
}

export default MobileNavbar;
