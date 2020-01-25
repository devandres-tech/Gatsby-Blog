---
title: BEM Architecture in CSS
date: 2018-11-18 16:53:54
category: 'development'
draft: false
---

# BEM Notation 

When you first start to lean CSS, how you organize your code is usually not one of your main priorities, but as you get more comfortable with CSS and start working on big projects you will need a paradigm to organize your styles. There are plenty of paradigms out there but one of my favorites is the BEM (Block, Elements and Modifiers) notation. Is it a very intuitive methodology that keeps your code organized and maintainable. Ok so how does it work? 

## The Basics 
In all its glory, the Block, Elements, and Modifiers notation is just a naming convention. Say for example when you create a form component that has an image, a description, and a button the block would be named .form, it must be meaningful on its own. Then any sections within the form block would be the elemets. In our example that would be the description, image, and button. We name it by using two underscores. Finally, when you want to change the appeareace or behavior of an element you use a modifier and connect them with two dashses, putting it all together it will look like this:  .form__button--dark
<br/>
<img src="https://raw.githubusercontent.com/AndresXI/Hexo-Blog/master/form.png">

```css
/* CSS */
.form {}
.form__image {}
.form__description {}
.form__button--dark {}
.form__button--normal {}
```
<br/>

## Pros & cons 
BEM adds a modular structure to your CSS project. Because of its specific naming scheme, we greatly reduce naming conflicts as our project grows. It also provides a connection beetween your CSS and HTML. With this connection you will spend less time searching for specific components. 

One of the negatives of BEM is that we usually end up with very long names, specially when nesting of elements is deep. One way to work around this is to use a CSS precompiler (SASS, LESS, etc.) that enables us to nest our styles, working with our example above: 

```scss
// SASS
.form {

   &__image {

   }

   &__description {

   }

   &__button {

      &--normal {

      }

      &--dark {

      }
   }


}
```

BEM is my favorite CSS naming scheme and I strongly suggest you give it a try, trust me it will save you a lot of debugging time as your project grows. I hope you found this article useful and keep on hacking. 