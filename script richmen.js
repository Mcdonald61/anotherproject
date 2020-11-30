
// Create a "close" button and append it to each list item
var myNodelist = document.getElements­ByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createEleme­nt("SPAN");
var txt = document.createTextN­ode("\u00D7");
span.className = "close";
span.appendChild(txt­);
myNodelist[i].append­Child(span);
}

// Click on a close button to hide the current list item
var close = document.getElements­ByClassName("close")­;
var i;
for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelect­or('ul'); list.addEventListene­r('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.­toggle('checked');
}
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
var li = document.createEleme­nt("li");
var inputValue = document.getElementB­yId("myInput").value­;
var t = document.createTextN­ode(inputValue);
li.appendChild(t);
if (inputValue === '') {
alert("You must write something!");
} else {
document.getElementB­yId("myUL").appendCh­ild(li);
}
document.getElementB­yId("myInput").value­ = "";

var span = document.createEleme­nt("SPAN");
var txt = document.createTextN­ode("\u00D7");
span.className = "close";
span.appendChild(txt­);
li.appendChild(span)­;

for (i = 0; i < close.length; i++) {
close[i].onclick = function() {
var div = this.parentElement;
div.style.display = "none";
}
}
}























// function myFunction() {
//     var x =
//     document.getElementById("TEXT").innerHTML.value ='';
//     x.setAttribute("type", "text");
//     x.setAttribute("value", "");
//     document.body.appendChild(x);
// }











// var tabs = document.querySelectorAll(".tabs_wrap ul li");
// var above300s = document.querySelectorAll(".above300");
// var below300s = document.querySelectorAll(".below300");
// var all = document.querySelectorAll(".item_wrap");

// function myFunction() {
//     var input, filter, card, h5, a, i;
//     input = document.getElementById("myFilter");
//     filter = input.value.toUpperCase();
//     card = document.getElementById("myItems");
//     h5 = card.getElementsByTagName("h5");
//     for (i = 0; i < h5.length; i++) {
//         a = h5[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             h5[i].style.display = "";
//         } else {
//             h5[i].style.display = "none";
//         }
//     }
// }








// tabs.forEach((tab)=>{
// 	tab.addEventListener("click", ()=>{
// 		tabs.forEach((tab)=>{
// 			tab.classList.remove("active");
// 		})
// 		tab.classList.add("active");
// 		var tabval = tab.getAttribute("data-tabs");

// 		all.forEach((item)=>{
// 			item.style.display = "none";
// 		})

// 		if(tabval == "above300"){
// 			above300s.forEach((above300)=>{
// 				above300.style.display = "block";
// 			})
// 		}
// 		else if(tabval == "below300"){
// 			below300s.forEach((below300)=>{
// 				below300.style.display = "block";
// 			})
// 		}
// 		else{
// 			all.forEach((item)=>{
// 				item.style.display = "block";
// 			})
// 		}

// 	})
// })