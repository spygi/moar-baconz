module.exports = {
   do: function(method, resource, body) {
    var endPoint = 'http://moarbaconz.io/api/', parameters = {  
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    fetch(endPoint + resource , parameters)  
      .then(function(res) {
        console.log('res',res);
        return res.json();
       })
      .then(function(resJson) {
        console.log('resJson',resJson);
        return resJson;
     }).catch((error) => {
      console.warn(error);
     });
  }
};