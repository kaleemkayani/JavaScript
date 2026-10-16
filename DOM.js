// alert("What is DOM");
// console.log (Window);
// window.console.log ("Hello")
// console.dir(document.body)
// // DOM Maniplaction
// let heading = document.getElementById("heading")
// console.log (heading)

// let body = document.getElementsByClassName("body")
//  console.log(body);
//  console.dir(body);

// let p = document.getElementsByTagName("p")
// console.log(p);
// console.dir(p);

// let first = document.querySelector("p");
// console.idr(first)   //All Element Use Nodes


let h2 = document.querySelector("h2");
console.dir(h2.innerText)
h2.innerText= h2.innerText  + "From Apna College Students";
 

let divs = document.querySelectorAll(".box")
console.dir(divs);
console.log(divs);
divs[0].innerText = "New Uniqe Value 1";

