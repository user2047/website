function openSideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  //document.getElementById("main").style.marginLeft = "250px";
};

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  //document.getElementById("main").style.marginLeft = "0px";
};


var button1 = document.getElementById("button1");
var spa = document.getElementById("spa");
function scroll1() {
  spa.scrollIntoView({behavior: "smooth"});
  console.log("scroll called");
};

button1.addEventListener("click",scroll1);

var button2 = document.getElementById("button2");
var tpa = document.getElementById("tpa");
function scroll2() {
  tpa.scrollIntoView({behavior: "smooth"});
  console.log("scroll called");
};

button2.addEventListener("click",scroll2);
