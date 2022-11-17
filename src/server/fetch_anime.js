import axios from "axios";

export const fetchedRecent = async (url, pagenumber, count) => {
  let Data = [];
  for (let index = pagenumber; index < pagenumber + count; index++) {
    let data = await fetch(url + index);
    data = await data.json();
    let dataJson = data.results;
    Data.push(...dataJson);
    // console.log(Data);
    // data = await sata.results.json();
    // let dataJson = await data.json();
    // Data.push(...dataJson);
  }
  // console.log(Data);
  return Data;
};

export const fetchVideo = async (url) => {
  try {
    const Video = await axios.get(url);
    // console.log(Video);
    const source = Video.data.sources;
    let highQuality = source.reduce((prev, current) => {
      return prev.quality === "720p" ? prev : current;
    });
    // console.log(highQuality);
    if (highQuality === undefined) {
      highQuality = source[0];
    }
    // const first = source[3];
    return highQuality;
  } catch (err) {
    console.log("Connection Error");
  }
};

export const fetchSearch = async (url) => {
  let Data = [];
  let data = await fetch(url);
  let dataJson = await data.json();
  Data.push(dataJson);
  return Data;
};

// export const fetchAnime = async (url) => {
//   let Data = [];
//   let data = await fect
// }
