import axios from "axios";
import config from "../../config/config";
export const ipfService = {
  get
};

function get(apiEndpoint) {
  return axios
    .get(config.apiBaseUrl + apiEndpoint, getOptions())
    .then((response) => {
      return response;
    }).catch((err) => {
      return err;
    });
}

function getOptions() {
  let options = {};
  options.headers = {
    "Content-Type": "application/json"
  };
  return options;
}