1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById can only select 1 element like one unique id which is used for only one selection. getElementByClassName can select all classes that have same class name which is used for multiple selector. querySelector can select 1st matching element using tagname or id name or class name just like css. querySelectorAll can select all matching elements using tagname, id, class.

2. How do you create and insert a new element into the DOM?

Ans: by using document.createElement('element/html tags') which will create and by using .innerText or .innerHtml and to insert, for new element using appendChild();


3. What is Event Bubbling? And how does it work?

Ans: first it will run element and then it will work like bubble up to go to the parent element and after bubble up and go to grandparent and so on. (child → parent → grandparent(body) → html)


4. What is Event Delegation in JavaScript? Why is it useful?

ans: by using event delegation which is adding eventListener to the parent element, this will make code much more small because by adding new element everytime which is children we do not need to add new listener everytime. we can simply call parent listener and work.


5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() method stops the page reload and redirect.  stopPropagation() method stops the event bubbling which is stopping to go to the parent element.
     