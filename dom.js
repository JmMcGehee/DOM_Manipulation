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

// let titles = document.querySelectorAll('.title') // This actually returns a node list, so we can use array methods. 

// console.log(titles);

// let odds = document.querySelectorAll('li:nth-child(odd)')
// console.log(odds);

// for (let i = 0; i < odds.length; i++) {
//   odds[i].style.backgroundColor = '#f4f4f4'
// }

// TRAVERSING THE DOM

// const itemList = document.querySelector('#items')

// // // parent node
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4'

// // // parent element
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4'
  
// // // child nodes
// // console.log(itemList.childNodes); // returns text(white space) and elements

// // // children
// // console.log(itemList.children); //HTML collection rather than node list. 

// // // FirstChild -- recognizes whitespace
// // console.log(itemList.firstChild) // returns '#text'


// // // FirstElementChild 
// // console.log(itemList.firstElementChild)
// // console.log(itemList.lastElementChild)

// // itemList.firstElementChild.style.backgroundColor = 'yellow'
// // itemList.lastElementChild.textContent = 'yellow'

// // lastChild vs lastElementChild
// // nextSibling vs nextElementSibling
// // previousSibling vs previousElementSibling

// // CREATING DOM ELEMENTS

// // createElement

// // const newDiv = document.createElement('div')
// // newDiv.className = 'hello'
// // newDiv.id = 'hello 1'
// // newDiv.setAttribute('title','hello div')

// // const newDivText = document.createTextNode('Hello World')

// // newDiv.appendChild(newDivText)

// // const container = document.querySelector('header .container')
// // const h1 = document.querySelector('header h1')

// // container.insertBefore(newDiv, h1)

// // newDiv.style.fontSize = '30px'

// // console.log(newDiv);

// // function buttonClick() {
// //   console.log('button clicked');
// // } //Old way of doing thins. 

// // ADDING FUNCTIONALITY WITH EVENT LISTENERS

// // CLICK EVENTS

// // const button = document.getElementById('button').addEventListener('click', buttonClick) //Event listener

// // function buttonClick(event) {
// //   // console.log('Button clicked');
// //   // document.getElementById('header-title').textContent = 'Changed'
// //   // document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// //   // console.log(event);
// //   // console.log(event.target);
// //   // console.log(event.target.id, event.target.className);
// let output = document.getElementById('output')
// //   // output.innerHTML = '<h3>'+event.type+'</h3>'

// //   // console.log(event.clientX, event.clientY);
// //   // console.log(event.offsetX, event.offsetY);

// //   console.log(event.altKey);
// //   console.log(event.shiftKey);
// //   console.log(event.ctrlKey);
// // } // oeprative function

// // MOUSE EVENTS

// const button = document.getElementById('button')
// const box = document.getElementById('box')


// // button.addEventListener('click', runEvent) //Event listener
// // button.addEventListener('dblclick', runEvent)
// // button.addEventListener('mousedown', runEvent)
// // button.addEventListener('mouseup', runEvent)

// // box.addEventListener('mouseenter', runEvent)
// // box.addEventListener('mouseleave', runEvent)
// // box.addEventListener('mouseover', runEvent)
// // box.addEventListener('mouseout', runEvent)
// // box.addEventListener('mousemove', runEvent)

// let itemInput = document.querySelector('input[type="text"]')
// // let submitButton = document.querySelector('input[type="submit"]')
// let form = document.querySelector('form')
// let select = document.querySelector('select')

// // itemInput.addEventListener('keydown', runEvent)
// // itemInput.addEventListener('keypress', runEvent)
// // submitButton.addEventListener('click', runEvent)
// // itemInput.addEventListener('focus', runEvent) //when you click into an element
// // itemInput.addEventListener('blur', runEvent) //when you click out of an event

// // itemInput.addEventListener('input', runEvent) //when you do anything with an input
// // select.addEventListener('change', runEvent)
// // select.addEventListener('input', runEvent)

// form.addEventListener('submit', runEvent)

// function runEvent(e) {
//   e.preventDefault()
//   console.log('EVENT TYPE: '+e.type);
//   // console.log(e.target.value);
//   // output.innerHTML = `<h3>${ e.target.value }</h3>`
//   // e.preventDefault() // Stopped the page from being reloaded. 
//   // output.innerHTML = `<h3>${ itemInput.value }</h3>`

//   // output.innerHTML = '<h3>MouseX: ' +e.offsetX+ '</h3><h3>MouseY: ' +e.offsetY+ '</h3>'

//   // box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX - e.offsetY})`
//   //   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX - e.offsetY})`
//   // 
//   console.log(e.target.value);
// }

// Create a functional project. 

const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')

//EVENTS
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

//ADD ITEM

function addItem(e) {
  e.preventDefault();
  //get input value
  let newItem = document.getElementById('item').value

  //creat new element
  let li = document.createElement('li')
  li.className = 'list-group-item'

  //Add text node to li
  li.appendChild(document.createTextNode(newItem))

  //Create delete button and add it to li
  let deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
  deleteBtn.appendChild(document.createTextNode('X'))
  li.appendChild(deleteBtn)

  //Add to list
  itemList.appendChild(li)
}

// REMOVE ITEM

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    //Why not just set the event on the button?
    if (confirm('Are you sure?')) {
      let li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}

// FILTER ITEMS

function filterItems(e) {
  //convert to lowercase
  let text = e.target.value.toLowerCase()
  //get the list
  let items = itemList.getElementsByTagName('li')
  //turn HTMLcollection into an array 
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent
    // compare to search text
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
}