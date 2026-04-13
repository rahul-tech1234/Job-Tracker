### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 1. 'getElementById' menas when we get a element in html file with id. and it's alawys unicqe.with element select only one element. for example:
document.getElementById('id name');

    2.'getElementsByClassName' menas when we get a element in html file with class name. and with class name select multiple element. and it's HTML collection. it give Array like but not exactly Array for exaple:
    document.getElementsByClassName('class name');

    3.'querySelector'  it's similer to CSS selector and it  is select only one element in multiple element. when it find this name element it's stop there ; for elample:
    document.querySelector('.className');
    document.querySelector('#idName');

    4.'querySelectorAll?' it's also similer to CSS selector and it read all code intead find this element name. but show the fist get this name element. but store all element of this name it is nodelist for example
    document.querySelectorAll('.class name');

### 2. How do you create and insert a new element into the DOM?

Ans: for creat a element dainamically write below
const newElement = document.createElement(tag name);
it meanse it new element creat and it store newElement
now we can set any where globally or localy;
parentElement.appendChild.newElement;
finally newElement is set inside the parentElement. appendChild its keywords means newElement is the child element of parentElement.

### 3. What is Event Bubbling? And how does it work?

Ans: When an event happens on a child element, it moves upward (bubble) to its parent, then to the parent’s parent… all the way to document.
child > parent > grandparent > dom

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Instead of adding event listeners to many child elements, you add ONE event listener to the parent, and handle events using event bubbling.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() vs stopPropagation()
Both are used in event handling, but they do completely different things

        1. preventDefault()
        Stops the default behavior of an element

        2.  stopPropagation()
            Stops the event from bubbling (going up to parent)
