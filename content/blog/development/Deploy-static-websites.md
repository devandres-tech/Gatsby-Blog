---
title: Deploy Static Websites With Surge.sh
date: 2018-11-09 14:19:49
category: 'development'
draft: false
---

So you've finally managed to add all the finishing touches to your project and now you're eagerly wanting to show it off to the world. You can do so easily within minutes with [surge.sh](https://surge.sh/) right from the command line. 

## Steps: 

First you need to install surge globally 

   
```
$ npm install --global surge  
```
    

Navigate to your project directory and cd  into the folder you want to deploy (public, dist, etc..) just make sure you have a index.html file and run

``` 
$ surge 
```

Surge will now prompt you to create an account so you can later redeploy to your domain

``` 
Welcome to Surge!
Please login or create account by entering email and password: 
   email: youremail.domain.com
   password: yourPassword
```

Now you will choose a domain. Your domain must end with "surge.sh" an example would be: myWebsite.surge.sh 

``` 
project: /myProjectPath
domain: myWebsite.surge.sh
```

If everything goes well you see something like this: 

``` 
project: /myProjectPath
domain: myWebsite.surge.sh
upload: [====================] 100% eta: 0.0s (34 files, 5413257 bytes)
   CDN: [====================] 100%
      IP: [IP address]
Success! - Published to myWebsite.surge.sh        
```

You can now type your domain in your web browser to see your website running live. If you later made changes you can redeploy by typing: 

``` 
   surge --domain myWebsite.surge.sh 
```

<br >




 That's all you have to do, no configurations or messing around with a server. Thanks for reading this post and happy hacking! 