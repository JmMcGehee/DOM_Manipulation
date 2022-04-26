// console.dir(document); // OH. MY. GOD. the DOM. 

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123
// console.log(document.doctype);
// console.log(document.all); //Deprecated, but shows index of all the tags. 
// console.log(document.all[10]) // gets the element at that index
// document.all[10].textContent = 'What\'s up, muthafucka?'
// console.log(document.forms); // Returns an HTML collection that functions as an array. 

// GETELEMENTBYID

// const headerTitle = document.getElementById('header-title')
// const header = document.getElementById('main-header')
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye' //renders styling
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px black'

//GETELEMENTSBYCLASSNAME

// const items = document.getElementsByClassName('list-group-item')
// // items[1].textContent = 'Hello'
// // items[1].style.fontWeight = 'bold'
// // items[1].style.backgroundColor = 'yellow'

// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENTSBYTAGNAME

// const li = document.getElementsByTagName('li')
// // items[1].textContent = 'Hello'
// // items[1].style.fontWeight = 'bold'
// // items[1].style.backgroundColor = 'yellow'

// console.log(li);

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERYSELECTOR

// let header = document.querySelector('#main-header'); //Any css selector works, but only grabs the first one. 
// header.style.borderBottom = 'solid 4px #ccc'

// let input = document.querySelector('input')
// input.value = 'Hello World'

// let submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// QUERYSELECTORALL

let titles = document.querySelectorAll('.title') // This actually returns a node list, so we can use array methods. 

console.log(titles);

let odds = document.querySelectorAll('li:nth-child(odd)')
console.log(odds);

for (let i = 0; i < odds.length; i++) {
  odds[i].style.backgroundColor = '#f4f4f4'
}
  