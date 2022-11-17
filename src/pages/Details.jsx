import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const { details } = state;

  const episodeList = details[0].episodes;
  // const len = episodeList.length;
  console.log(details);
  // console.log(episodeList[0].id);
  const history = useNavigate();
  const gotoStream = () => {
    const episodeId = episodeList[0].id;
    let skipTo = 0;
    if (window.localStorage.getItem(episodeId)) {
      skipTo = JSON.parse(window.localStorage.getItem(episodeId));
      console.log(skipTo);
    }
    history(`/vidcdn/watch/${episodeList[0].id}`, {
      state: {
        animeId: details[0].id,
        currentEP: "1",
        skipTo: skipTo === undefined ? 0 : skipTo,
      },
    });
  };
  return (
    <div>
      <img src={details[0].image} alt="" />
      <span>
        <button
          style={{
            backgroundColor: "var(--main-bg)",
            border: "1px solid var(--txt-color)",
          }}
          onClick={gotoStream}
        >
          Watch now
        </button>
      </span>

      {details[0].genres.map((types, key) => (
        <div key={key}>
          <span>{types}</span>
        </div>
      ))}
      <div>
        <p>{details[0].description}</p>
      </div>
      <p>{details[0].type}</p>
      {}
    </div>
  );
};

export default Details;
