---
title: "Model View Controller"
date: 2019-01-08 22:08:31
category: 'development'
draft: false
---

One of the most well known design pattern is the Model View Controller (MCV). This design pattern is concerned with the separation of logic, data models, and presentation. Making your code more readable and maintainable. Design patterns are useful in the sense that they reduce complexity by providing ready-made abstractions. They also reduce errors by providing details of common solutions. It is always useful to have a few design patterns in your toolbox. 

<img src="https://raw.githubusercontent.com/AndresXI/Hexo-Blog/master/MCV2.png">

- Model 
The model is the piece of your code that is responsible for representing the data in your code and allowing you to work with your data. It contains data-related logic (saving, fetching, deleting,...). 

- Views
The view is responsible for rendering html templates to the client. It presents the data to the user in a friendly manner. There should be minimal logic in your views. 

- Controller
The controller exists between the models and the views. It connects your models and your views. It contains the "in-between logic". Its sole purpose is to make sure the two can communicate (in both directions). It is usually split across middleware functions. 