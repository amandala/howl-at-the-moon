export const FETCH_MOON_DATA = "FETCH_MOON_DATA";
export const MOON_DATA_RETRIEVED = "MOON_DATA_RETRIEVED";

export const fetchMoonData = () => dispatch => {
  fetch("https://burningsoul-moon-v1.p.mashape.com/", {
    headers: {
      "X-Mashape-Key": "eGXvo36mOamshZDQlztAc44tBLxap1N6VkujsnW8bhwyZP9UNS"
    }
  })
    .then(response => response.json())
    .then(moonData => {
      dispatch({
        type: MOON_DATA_RETRIEVED,
        moonData
      });
      console.log(moonData);
    })
    .catch(console.log("handle error"));
};

export const moonDataRetreived = moonData => {
  return {
    type: MOON_DATA_RETRIEVED,
    moonData
  };
};
