---
title: "CORS Errors"
date: 2019-01-24 19:51:07
category: 'development'
draft: false
---


Cross-Origin Resource Sharing (CORS) is a security mechanism that is used by the browser to protect itself from API requests created from a different source (a source hosted on another server). For example say you're working on a web application that uses Spotify's API to request some information about an artist, here you have two different origins (sources) trying to exchange some information (your web app and Spotify's servers). In order for this process to be successful the browser needs to know if it is safe to do so, here is where CORS comes in. If you dont' set any additional headers on your request to let the browser know you're a trusted source you could receive the following error:  

<img src="https://raw.githubusercontent.com/AndresXI/Hexo-Blog/master/cors-error.png">

# Setting Headers 
To fix CORS errors you have to let the browser know you can be trusted. Every time you make a request to a different endpoint you need to add some additional information in your request, you add this information in the request headers. Headers are used to describe request and responses (there could be another post solely devoted to Headers). Headers are commonly set in the server but nowadays they can be set in the client. With the CORS mechanism new HTTP headers were added to the list: 
- Access-Control-Allow-Origin
- Access-Control-Allow-Credentials
- Access-Control-Allow-Headers
- Access-Control-Allow-Methods
- Access-Control-Expose-Headers
- Access-Control-Max-Age
- Access-Control-Request-Headers
- Access-Control-Request-Method
- Origin

ALl of them are important but the one we are concerned with is the following header: 
- Access-Control-Allow-Origin

this is what's giving us the error shown above. Implementing the request headers to bypass the CORS mechanism depends on the language and framework of your backend. [Here](https://enable-cors.org/server.html) you can choose the implementation for a specific platform. As a javaScript developer you probably have worked (or will) with NodeJs. There is  [package](https://github.com/expressjs/cors)  you can install to enable CORS with express with added configurations. Using this package is simple, with this set up you can enable all CORS requests: 
```javascript
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});
```
To enable CORS Pre-flight use the following set up: 
```javascript
var express = require('express');
var cors = require('cors');
var app = express();

app.options('*', cors()); // include before other routes
```
# Conclusion 
Although for the developer this seems to be a bit of extra work but for the user this actually helpful. We can reduce risky behavior (like downloading documents from external origins) and therefore providing a more secure and accessible browsing experience. CORS should be understood by anyone who uses the web on a daily basis. 