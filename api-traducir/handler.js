'use strict';

module.exports.hello = function(event, context, callback) {
    console.log(event); // Contains incoming request data (e.g., query params, headers and more)
  
    const response = {
      statusCode: 200,
      headers: {
        'x-custom-header': 'My Header Value',
      },
      body: JSON.stringify({ message: 'Hello World!' }),
    };
  
    callback(null, response);
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

