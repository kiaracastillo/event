/*
Kiara Castillo Magallanes
11/17/2022
Event


Color Changer

Create an application with three grey, square divs, in a row. 



const div1 = document.createElement("div1");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.marginLeft = "5px";
div1.style.background = "grey";
div1.style.color = "white";
div1.innerHTML = "Red";
document.body.appendChild(div1);
div1.addEventListener("click", changeColor);

const div2 = document.createElement("div2");
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.marginLeft = "5px";
div2.style.background = "grey";
div2.style.color = "white";
div2.innerHTML = "Green";
document.body.appendChild(div2);
div2.addEventListener("click", changeColor);

const div3 = document.createElement("div3");
div3.style.width = "200px";
div3.style.height = "200px";
div3.style.marginLeft = "5px";
div3.style.background = "grey";
div3.style.color = "white";
div3.innerHTML = "Blue";
document.body.appendChild(div3);
div3.addEventListener("click", changeColor);

function changeColor(){
    let change = div1.style.background = "Red";
    event.target.innerHTML = change;
}

function changeColor2(){
    let change = div2.style.background = "Green";
    event.target.innerHTML = change;
}

function changeColor3(){
    let change = div3.style.background = "Blue";
    event.target.innerHTML = change;
}
*/
let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")

let colors = ["#999999","#650205","#0e6502","#0414a7"]

a.style.width = "200px" ;
a.style.height = "200px" ;
a.style.margin = "5px" ;
a.style.backgroundColor=colors[0] ;
//document.getElementById("a").addEventListener("click", color_change1());
a.style.float = "left";
b.style.width = "200px" ;
b.style.height = "200px" ;
b.style.margin = "5px" ;
b.style.float = "left";
b.style.backgroundColor=colors[0]
//document.getElementById("b").addEventListener("click", color_change2())
c.style.width = "200px" ;
c.style.height = "200px" ;
c.style.margin = "5px" ;
c.style.float = "left";
c.style.backgroundColor=colors[0] ;
//document.getElementById("c").addEventListener("click", color_change3()) ;


function color_change1() {
a.style.backgroundColor=colors[1];}
function color_change2() 
{b.style.backgroundColor=colors[2]}
function color_change3() {c.style.backgroundColor=colors[3]}