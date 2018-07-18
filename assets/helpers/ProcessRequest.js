const API = "https://dev.memmbr.com/api";

const timeout = (ms, promise) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject(new Error("Request timed out"));
    }, ms);
    promise.then(resolve, reject);
  });
};

const checkStatus = (response, timeout) => {
  clearTimeout(timeout);
  if (response.status >= 200 && response.status < 300) return response;
  throw { message: response.status, status: response.status };
};

const parseJSON = async response => {
  const res = await response.json();
  //handle errors here
  // if (res.error.length > 0) throw { message: res.error[0], status: res.status };
  return res;
};

export default function processRequest(getState, url, method = "GET", data) {
  const fullURL = typeof url === "string" ? API + url : url.base + url.url;
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8"
  };
  if (getState) {
    const state = getState();
    const token = state.user.user.token;
    headers = { ...headers, Authorization: `Token ${token}` };
  }
  const params = {
    method,
    headers
  };

  if (data) params.body = JSON.stringify(data);
  return timeout(
    20000,
    fetch(fullURL, params)
      .then(checkStatus, timeout)
      .then(parseJSON)
      .catch(error => {
        throw error;
      })
  );
}
