let val;

// val = document.scripts[0].getAttribute('src');

// let scripts = document.scripts;

// scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
    
// });
// const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#FFF';
// taskTitle.style.padding = '5px';
// // change content
// taskTitle.textContent = 'TASK LIST';
// taskTitle.innerText = 'TASK LISTA'


// console.log(document.querySelector('#task-title'))
// document.querySelector('ul li').style.color='blue';

// document.querySelector('li:last-child').style.color='blue';
// document.querySelector('li:nth-child(3)').style.color='yellow';

// document.querySelector('li:nth-child(2)').textContent ="hello world";
// document.querySelector('li:nth-child(odd)').style.background='#ccc';

// let lis = document.getElementsByTagName('li');

// // convert html collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent=`${index}:hi`;
// });

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}:Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });
// console.log(items);

// //create element 
// const li = document.createElement('li');

// // add class
// li.className = 'collection-item';

// //add id
// li.id = 'new item';

// // add attribute
// li.setAttribute('title','New Item');

// //create text node and append
// li.appendChild(document.createTextNode('hello world'));

// //create new link element
// const link = document.createElement('a');
// //add classes
// link.className = 'secondary-content';
// link.innerHTML= '<i class="material-icons">send</i>';

// // Append link into li
// li.appendChild(link);
// // Append li as child as ul
// document.querySelector('ul.collection').appendChild(li);
// console.log(li);

//replace element 

//create element

const newHeading = document.createElement('h4');
// add id
newHeading.id ='task-title';
//new text node
newHeading.appendChild(document.createTextNode('Task list'));
// get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newHeading,oldHeading);

//remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
//lis[0].remove();

//remove child element
//list.removeChild(lis[3]);

//classes attr
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0].children[0];

//classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//attributes
link.setAttribute('href','www.google.com');
val = link.getAttribute('href');
link.setAttribute('title','Google');
val = link.hasAttribute('title');
link.removeAttribute('title');

console.log(val);

