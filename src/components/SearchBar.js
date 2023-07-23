import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    if (searchText) {
      navigate("/search?q=" + searchText);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex"
      >
        <input
          type="text"
          className="px-5 border border-gray-400 p-2 rounded-l-full w-96"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
        />
        <button
          className="border border-gray-400 p-2 rounded-r-full w-16"
          onClick={(e) => onSubmit()}
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
