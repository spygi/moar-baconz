module.exports = {

  do: function(method, path, body, successCallback, errorCallback, token) {
    var noOperation = function(){ };
    successCallback = successCallback || noOperation;
    errorCallback = errorCallback || noOperation;

    var endPoint = 'http://moarbaconz.io/api/', parameters = {  
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };
    if (token) {
      parameters.headers['x-access-token'] = token;
    }
    if(method=='GET'){
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