---
title: "Array Helper Methods in ES6"
date: 2018-12-04 21:56:23
category: 'development'
draft: false
---


<strong>T</strong>o become a front end developer means that you must be proficient with javaScript. Especially with manipulation of data. Having worked with multiple API's myself, most of the time the data I get back is an array of javaScript objects. Thankfully ES6 provides us with a few useful and powerful array helper methods. Most of these array helper methods help with iteration over an array. 

<hr style="border: .5px dashed gray; width: 50%" />

# forEach 
<strong>T</strong>he forEach loop is one of the most commonly used array helper methods in ES6. When we call the forEach method we pass in an anonymous function and this function gets called for every element in the array. This function is commonly reffered to as the irerator fucntion. The argument is usually named after the singular version of the array. 

```javascript
const colors = ['red', 'blue', 'green']; 

colors.forEach(function(color) {
    // do something here with each element 
    console.log(color); 
})
```

the above code will print "red", "blue", "green" to the console. 

<hr style="border: .5px dashed gray; width: 50%" />

# map
<strong>T</strong>he map method helps to avoid mutating our data by returning a new array. The mutation of data is a bad practice especially when working in a huge application. It is mostly used to render a list of data. 

```javascript
cosnt numbers = [1, 2, 3]; 

cosnt doubled = numbers.map(function(number) {
  // you must return the result to get a new array 
  return number * 2; 
}); 

console.log(doubled); // [2, 4, 6]
```
if we print the doubled array to the console we will get a new array: [2, 4, 6].

<hr style="border: .5px dashed gray; width: 50%" />

# filter 
<strong>F</strong>ilter is used to filter items on an array based on a boolean expression.
If the boolean expresion is true it will be included in the result array if not it will be discarded. Say we only want to grab the action movies from the following array. 

```javascript
const movies = [
  { name: 'Black Panther', genre: 'Action' },
  { name: 'The Notebook', genre: 'Romance' },
  { name: 'Fight Club', genre: 'Action' }
]

const filteredMovies = movies.filter(function(movie) {
  // returns true if genre equals 'Action'
  return moive.genre === 'Action'; 
}); 
```
our filteredMovies array will now include the Black Panther and Fight Club movies. 

<hr style="border: .5px dashed gray; width: 50%" />

# find 
<strong>T</strong>he purpose of the find helper method is to search through an array and look for a particular element in the array. It only returns the first instance. 

```javascript
const countries = [
  {name: "USA"},
  {name: "Mexico"},
  {name: "Canada"},
]; 

countries.find(function(country) {
  return country.name === 'USA'; 
}); 

// countries will now return: [{name: "USA}] 
```

<hr style="border: .5px dashed gray; width: 50%" />

# some 
<strong>S</strong>ome accepts an iterator function that will return true or false for every element in the array. It is similar to the OR operator. If at least one is true than the result will be true. 
```javascript
const cars = [
  {name: "mustang", color: "red"},
  {name: "BMW", color: "black"},
  {name: "Acura", color: "blue"}
]; 

cars.some(function(car) {
  return car.color === "red"; 
}); 
```
the iteration will now return true because we do have a sinlge instance of car whose color property is red. 

<hr style="border: .5px dashed gray; width: 50%" />

# every 
<strong>E</strong>very is like some, but insted of using the OR operator it uses AND. The iteration will only return true if all of the elements return true. As with our example above

```javascript
const cars = [
  {name: "mustang", color: "red"},
  {name: "BMW", color: "black"},
  {name: "Acura", color: "blue"}
]; 

cars.every(function(car) {
  return car.color === "red"; 
}); 
```
this iteration will now return false because not every car in the our array has a color of red. 

<hr style="border: .5px dashed gray; width: 50%" />

# reduce 
<strong>R</strong>educe is the most flexible array helper method. All of our previous methods can be implemented using reduce. This method accepts two arguemts, the first one is an initial value (can be any arbitrary value) and the second one is the element in the array. In this example we want to add all of the numbers in an array. 

```javascript
const numbers = [5, 10, 15, 20]; 

numbers.reduce(function(sum, number) {
  return sum + number; 
}, 0); // here is were we initialize our sum variable. sum = 0
```
this iterator function will now return a total of 50. 

<br />

We now have some tools that will help facilitate working with arrays. It's time to put theory into practice!