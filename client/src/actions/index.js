import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return async function(dispatch) {
    console.log("here it is fetchUser");
    try {
      let res = await axios.get("/api/current_user");
      console.log("res here---", res);
      let response = null;
      if (res.data && res.data._id) {
        response = res.data;
      }
      dispatch({ type: FETCH_USER, payload: response });
    } catch (e) {
      console.log("error is", e);
      dispatch({ type: FETCH_USER, payload: null });
    }
  };
};

export const handleToken = token => {
  return async function(dispatch) {
    console.log("here it is handleToken");
    let res = await axios.post("/api/stripe_token", token);
    console.log("res here---", res);
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const submitSurvey = (values, history) => {
  console.log("submit survey here=========", values);
  return async function(dispatch) {
    console.log("here it is fetchUser");
    try {
      let res = await axios.post("/api/surveys", values);
      console.log("res here---", res);
      let response = null;
      if (res.data && res.data._id) {
        response = res.data;
      }
      history.push("/surveys");
      dispatch({ type: FETCH_USER, payload: res.data });
    } catch (e) {
      console.log("error is", e);
      dispatch({ type: FETCH_USER, payload: null });
    }
  };
};
