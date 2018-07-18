const API = "https://api.magicthegathering.io/v1";

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
  return res;
};

export default function processRequest(url, method = "GET", data) {
  const fullURL = API + url;
  const params = {
    method
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
