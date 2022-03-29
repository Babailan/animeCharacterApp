import Router, { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import {
  logoOnClick,
  onSubmitSearchDesktop,
  searchData,
} from "../../libs/navbarFunctions";
import FormSearchBox from "../searchBoxNav/navSearchBoxDesktop";
export default function Desktop({
  data,
  setData,
  text,
  setText,
  setCategory,
  category,
  previousCall,
  setPreviousCall,
  checkUser,
}) {
  const router = useRouter();
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
        <div className="logo" onClick={(e) => logoOnClick(e, router)}>
          <p className="logoMain">AnimeWorld</p>
        </div>
      </div>
      <div style={{ display: "flex", width: "fit-content", gap: "1em" }}>
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
          router={router}
        />

        <div className="logins-signups">
          {checkUser ? null : (
            <>
              <button className="login" onClick={() => router.push("/login")}>
                login
              </button>
              <button
                className="sign-up"
                onClick={() => router.push("/sign-up")}
              >
                sign up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
