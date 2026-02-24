# Job-application-tracker
Answers to Questions
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById is used to find a element by its ID. getElementsByClassName is used to find elements by their class name, and it returns an Html Collection (which is like a array). querySelector is used to find elements by using CSS selectors like tag, class and id. It only find the first match it encounters.And querySelectorAll finds all matches for the CSS Selectors and put them in a NodeList.

2. How do you create and insert a new element into the DOM?

Ans:At first I will use document.createElement() to create an empty element and store this in a variable for example newElement.Then I will use newElement.innerText to add text to the element or newElement.innerHTML to add content in it. At last I will append the the element to its parent element using append() method like this parentElement.append(newElement) or using insertBefore like this parentElement.insertBefore(newElement, referenceElement).

3. What is Event Bubbling? And how does it work?

Ans:In JavaScript, when an event occurs on a target element and it rises like a bubble to its parent elements is called Event Bubbling. For example when we click a button, the event triggers on the button first, then its parent like a div, then the body, and finally the html tag.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation means adding a single event listener to the parent element to handle events for all its child, instead of giving a separate event listener to each child. It is useful because it is more efficient, as we don't have to write multiple lines of code for every child. It also works dynamically added element.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() stops the browser's default action like preventing an anchor tag from redirecting you to a URL when clicked. On the other hand, stopPropagation() stops the event from bubbling up. For example, if you use this method on a button, the click event will not trigger any event listeners on the parent elements when the button is clicked.