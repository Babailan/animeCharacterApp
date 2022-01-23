import Search from "../public/search.svg";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
function Navbar() {
  const [search, setSearch] = useState("");
  const startSearch = (e) => {
    Router.push(`/search/${search}`);
  };
  return (
    <div className="Navbar">
      <h3 className="itemLogo" onClick={() => Router.push("/")}>
        Anime Character
      </h3>

      <form
        className="SearcherDiv"
        onSubmit={(e) => {
          e.preventDefault();
          startSearch();
        }}
      >
        <input
          type={"text"}
          className="inputType"
          placeholder="Seach Character"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onSubmit={startSearch}
        />
        <div className="imageSearchDiv" onClick={() => startSearch()}>
          <Image
            src={Search}
            width={20}
            height={20}
            alt="serchIcon"
            className="imageTitleNav"
          />
        </div>
      </form>
    </div>
  );
}

export default Navbar;
