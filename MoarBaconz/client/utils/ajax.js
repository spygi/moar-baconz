module.exports = {
  do: function(method, path, body, successCallback, errorCallback) {
    var endPoint = 'http://moarbaconz.io/api/', parameters = {  
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    fetch(endPoint + path , parameters)  
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        successCallback(responseJson)
      })
      .catch((error) => {
        errorCallback(error);
      });
  }
};