import React from "react";
import { useStateValue } from "./context/StateProvider";
import response from "./response";
import { Link } from "react-router-dom";
import useGoogleSearch from "./useGoogleSearch";
import "./searchPage.css";
import Search from "./Search";

import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import RoomIcon from "@material-ui/icons/Room";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);
  const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        {/* <h1>{term}</h1> */}
        {/* {window.localStorage.setItem(term, term)} */}
        <Link to="/">
          <img
            className="searchPage__image"
            src="https://uwaterloo.ca/engineering/sites/ca.engineering/files/resize/uploads/images/google-logo-500x333.jpg"
            alt=""
          />
        </Link>
        <div className="searchPage__Body">
          <Search hideButton />
        </div>
      </div>
      <div className="searchPage__options">
        <div className="searchPage__optionLeft">
          <div classNmae="searchPage__search">
            <SearchIcon />
            All
          </div>
          <div classNmae="searchPage__des">
            <DescriptionIcon />
            News
          </div>
          <div classNmae="searchPage__image">
            <ImageIcon />
            Images
          </div>
          <div classNmae="searchPage__shopp">
            <LocalOfferIcon />
            Shopping
          </div>
          <div classNmae="searchPage__map">
            <RoomIcon />
            Maps
          </div>
          <div classNmae="searchPage__more">
            <MoreVertIcon />
            more
          </div>
        </div>
        <div className="searchPage__optionRight">Setting</div>
      </div>
      {/* </div> */}

      {/* </div> */}
      <div>
        <p className="searchPage__about">
          About {data?.searchInformation.formattedTotalResults} Results in ({" "}
          {data?.searchInformation.formattedSearchTime} Secounds ) for {term}
        </p>

        {data?.items.map((items) => (
          <div className="searchPage__data">
            <a className="searchPage__links" href={items.link}>
              {items.displayLink}
            </a>
            <a className="searchPage__title" href={items.link}>
              <h2>{items.title}</h2>
            </a>
            <p>{items.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
