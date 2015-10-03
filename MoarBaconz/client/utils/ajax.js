module.exports = {
  do: function(method, path, body, successCallback, errorCallback, header) {
    var endPoint = 'http://moarbaconz.io/api/', parameters = {  
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    if (header) {
      parameters.headers['x-access-token'] = header;
      delete parameters.body;
      delete parameters.headers['Content-Type'];
    }

    fetch(endPoint + path , parameters)  
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        successCallback(responseJson)
      })
      .catch((error) => {
        errorCallback(error);
      })
      .done();
  }
};