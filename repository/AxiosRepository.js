import axios from "axios";
import constants from "../configuration/Constants.json";
export const GET = (url) => {
  return axios.get(`${constants.REST_API_ADDRESS}${url}`);
};
