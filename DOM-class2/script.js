// DOM

// let storedom = document.querySelector('#dm')

// storedom.addEventListener("click", function(){
//     console.log("Hello");


// })



// 4 pillers of DOM 
// 1> Selection of an Element
// 2> Changing HTML
// 3> Changing CSS
// 4> Event Listener


// 1> Selection of an Element

// let storedata = document.querySelector("#dm")
// console.log(storedata);



// 2> Changing HTML

// let storedata = document.querySelector("#dm")
// storedata.innerHTML = "hello"

// 3> Changing CSS

// let storedata = document.querySelector("#dm")
// storedata.style.color = "red"
// storedata.style.backgroundColor = "black"


// 4> Event Listener
// Ab agar aap chahte ho ki dobara click karne par wapas purana text aur style aa jaye, to toggle use karna padega.
// let storedata = document.querySelector("#dm")
// let changed = false

// storedata.addEventListener("click", function () {
//     if (changed == false) {
// console.log("hello");
//         storedata.innerHTML = "hello is this dom kaise ho ap log"
//         storedata.style.color = "red"
//         storedata.style.backgroundColor = "#000"
//         changed = true
//     }

//     else {
//         storedata.innerHTML = "Hello This is DOM"
//         storedata.style.color = "black"
//         storedata.style.backgroundColor = "white"

//         changed = false

//     }
// })



// 4> Event Listener
// let storedata = document.querySelector("#dm")
// storedata.addEventListener("click", function(){
//         storedata.innerHTML = "hello bharat kasie ho"
//         storedata.style.color = "red"
//         storedata.style.backgroundColor = "blue" 
// })

// 4> Event Listener
// let bluestore = document.querySelector(".blub")
// let btnstore = document.querySelector("#btn")

// let flag = 0

// btnstore.addEventListener("click", function () {
//         if (flag == 0) {
//                 bluestore.style.backgroundColor = "yellow"
//                 flag = 1
//                 console.log("checked");
                
//         }else{
//                 bluestore.style.backgroundColor = "transparent"
//                 flag = 0
//                 console.log("check again");
//         }
// })


// multiple element single  time
let h = document.querySelectorAll("h1")
console.log(h);
h.forEach(function(e){
    console.log(e);
})

let hstore = document.querySelector("h2")
hstore.innerHTML = "this is bharat python developer"

// 
let box = document.querySelector(".box")
box.textContent = "<h1>Hello Bharat</h1>"
