import DropSearch from "./dropSearch";
import SearchBox from "./searchButton";

interface Props {
  data: any;
  text: string;
  onSubmitSearch: Function;
  searchData: Function;
  setPreviousCall: Function;
  setData: Function;
  previousCall: any;
  category: string;
  setCategory: Function;
  setText: Function;
  onClickBox: Function;
  setSearchBox?: Function;
}

// uses dropSearchBox
function FormSearchBox({
  data,
  text,
  onSubmitSearch,
  searchData,
  setPreviousCall,
  setData,
  previousCall,
  category,
  setCategory,
  setText,
  onClickBox,
  setSearchBox,
}: Props) {
  return (
    <form
      onSubmit={(e) => onSubmitSearch(e, text, setData, setText, setSearchBox)}
      className="container-search"
    >
      <SearchBox
        dataSearch={(e) =>
          searchData(e, setPreviousCall, setData, previousCall, category)
        }
        text={text}
        setText={setText}
        setData={setData}
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
      </SearchBox>
      {/* dropSearchMobile */}
      {data.length ? (
        <DropSearch onClickBox={onClickBox} data={data} category={category} />
      ) : null}
    </form>
  );
}

export default FormSearchBox;
