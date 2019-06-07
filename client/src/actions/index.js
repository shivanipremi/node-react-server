import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return async function(dispatch) {
    console.log("here it is fetchUser");
    try {
      let res = await axios.get("/api/current_user");
      console.log("res here---", res);
      dispatch({ type: FETCH_USER, payload: res });
    } catch (e) {
      console.log("error is");
      dispatch({ type: FETCH_USER, payload: { user: "Premi" } });
    }
  };
};
