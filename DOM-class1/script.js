// DOM - Document Object Model

// 4 pillers of DOM 
// 1> Selection of an Element
// 2> Changing HTML
// 3> Changing CSS
// 4> Event Listener



// 1> Selection of an Element
// let store = document.querySelector('#hed')
// console.log(store);


// 2> Changing HTML
// let store = document.querySelector('#hed')
// store.innerHTML = 'hello bharat'
// console.log(store);


// 3> Changing CSS
// let store = document.querySelector('#hed')
// store.style.color = 'blue'
// console.log(store);
 


// 4> Event Listener
let store = document.querySelector('#hed')
store.addEventListener("click",function(){ // click, mouseenter,dblclick
    // console.log("Hello");
    // store.innerHTML = "hello bharat"
    store.style.color = 'pink'
    
})
