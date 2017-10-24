export const FETCH_MOON_DATA = "FETCH_MOON_DATA";
export const MOON_DATA_RETRIEVED = "MOON_DATA_RETRIEVED";

export const fetchMoonData = () => dispatch => {
  fetch(
    "https://api.aerisapi.com/sunmoon/calgary,ab?client_id=zmjOorqFkTTc9Hw8gGBlK&client_secret=0gDeURiPRE2SfvnDfM56IIlcHnfthmpjbLuInZ3f"
  )
    .then(response => response.json())
    .then(moonData => {
      dispatch({
        type: MOON_DATA_RETRIEVED,
        moonData
      });
      console.log(moonData.response[0].moon.phase.age);
    })
    .catch(console.log("handle error"));
};

export const moonDataRetreived = moonData => {
  return {
    type: MOON_DATA_RETRIEVED,
    moonData
  };
};
