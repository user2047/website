function openSideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
};

function closeSideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
};

// function scroll() {
//   var element = document.getElementById("secondpage");
//   element.scrollIntoView();
//   console.log("scroll called");
// }

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


// $("#downer").click(() => {
//
// $("html").animate({scrollTop: $("#second").offset().top-63},"slow");
// return false;
// });
// $('.parallax-window').parallax({imageSrc: '../content/image3.jpg'});

  // var tmp = $(this).attr("href");
  // console.log(tmp);



//document.getElementById("info").innerHTML = "windowheight: " + $(window).height() + "windowwidth: " + $(window).width() + "documentheight: " + $(document).height() + "documentwidth: " + $(document).width();
//$("#main").css({"height": $(window).height()});


// var txt = "";
// txt += "<p>Window Height: " + $(window).height() + "</p>";
// txt += "<p>Window Width: " + $(window).width() + "</p>";
// txt += "<p>Document Height: " + $(document).height() + "</p>";
// txt += "<p>Document Width: " + $(document).width() + "</p>";
// txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
// txt += "<p>Browser Name: " + navigator.appName + "</p>";
// txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
// txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
// txt += "<p>Browser Language: " + navigator.language + "</p>";
// txt += "<p>Browser Online: " + navigator.onLine + "</p>";
// txt += "<p>Platform: " + navigator.platform + "</p>";
// txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
//
// document.getElementById("info").innerHTML = txt
