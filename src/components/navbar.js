import Search from "../public/search.svg";
import Image from "next/image";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Anime Character</h1>
      <div className="SearcherDiv">
        <input
          type={"text"}
          className="inputType"
          placeholder="Seach Character"
        />
        <div className="imageSearchDiv">
          <Image
            src={Search}
            width={20}
            height={20}
            className="imageTitleNav"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
