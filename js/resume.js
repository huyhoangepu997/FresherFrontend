// ---------Button Back to Top-------------

window.onscroll = function() { scrollFunction(), scrollMenuFunction() };

function scrollFunction() {
	if (window.pageYOffset > 450) {
		document.getElementById("back-to-top").style.display = "block";
	} else {
		document.getElementById("back-to-top").style.display = "none";
	}
};

document.getElementById("back-to-top").addEventListener("click", backToTop);
function backToTop() {
	window.scrollTo(0, 0);
};

// -------------Scroll Menu--------------

var header = document.getElementById("menu");
var sticky = header.offsetTop;
var navOpacity = document.getElementById("navbar-scroll");

function scrollMenuFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		navOpacity.classList.add("nav-opacity");
	} else {
		header.classList.remove("sticky");
		navOpacity.classList.remove("nav-opacity");
	}
}

// --------------------------Progress-bar-------------------------

// document.addEventListener("DOMContentLoaded", function() {
// 	var progressBar = document.querySelectorAll(".progress-bars");
// 	const time = 1200;

// 	function calculateTime(time, dataCount) {
// 		return time / dataCount;
// 	}

// 	// lay tung class progress-bar, i dai dien cho tung phan tu trong mang
// 	progressBar.forEach(function(i) {
// 		let count = 0;
// 		let line = i.children[0];
// 		let dataCount = line.getAttribute("data-count");
// 		let lineSpan = line.children[0];

// 		// let value = window.getComputedStyle(line).width / 100;
// 		let value = line.offsetWidth / 100;

// 		let runTime = calculateTime(time, dataCount);

// 		// console.log(runTime);
// 		let animationRun = setInterval(function(){
// 			if (count < dataCount) {
// 				count ++;
// 				lineSpan.style.width = count * value + "px";
// 			}
// 		}, runTime);
// 	});
// });

// ---------------------------WOW.js-------------------------

// document.addEventListener("DOMContentLoaded", function() {
// 	var wow = document.querySelectorAll(".playball");
// 	wow.classList.add("wow", "bounceInUp");
// });

new WOW().init();