import React from "react";
import { useNavigate } from "react-router-dom";
import { fetchSearch } from "../../server/fetch_anime";
function SearchItems({ Data }) {
  const history = useNavigate();
  const gotoAnimeDetails = async () => {
    const url = `https://api.consumet.org/anime/gogoanime/info/${Data.id}`;
    let details = await fetchSearch(url);
    history(`/anime/${Data.title}`, {
      state: { details },
    });
    // console.log(details);
  };
  return (
    <div className="search-items" onClick={gotoAnimeDetails}>
      {Data && (
        <>
          <img src={Data.image} alt="" className="search-img" />
          <div className="searchTitles">
            <div id="main-title">{Data.title}</div>
            <div>{Data.subOrDub}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchItems;
