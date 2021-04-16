import "./Search.css";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
const Search = ({ hideButton = false }) => {
  const [input, setValue] = useState("");
  const history = useHistory();
  const [{}, dispatch] = useStateValue();
  const handleSearch = (e) => {
    e.preventDefault();

    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={input}
        />
        <MicIcon />
      </div>
      {!hideButton ? (
        <div className="search__buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onClick={handleSearch} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling Lucky</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
