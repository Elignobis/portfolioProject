let menu_btn_container = document.querySelector(".menu-btn-container");

// ADD A CLICK EVENT LISTENER TO THE menu_btn_container
menu_btn_container.addEventListener("click", toggleMenu);

// FUNCTION WILL TOGGLE THE ACTIVE CLASS ON THE menu_btn_container AND NAV CONTAINER
function toggleMenu() {
	menu_btn_container.classList.toggle("active");
	document.querySelector(".nav-container").classList.toggle("active");
}

document.body.addEventListener('keydown', function(e) {
	// IF THE e(EVENT) code IS EQUAL TO Space, THE tagName IS NOT EQUAL TO INPUT AND T THEN CHANGE THE THEME
	if(e.code == "Space" &&  e.target.tagName.toUpperCase() !== "INPUT" && e.target.tagName.toUpperCase() !== "TEXTAREA") {
		// 	CALL THE preventDefault() FUNCTION WHICH WILL STOP THAT ANOYING SCROLL WHEN YOU PRESS THE SPACE BAR
		e.preventDefault();
		toggleTheme();

	}
})

// FUNCTION TO MAKE THE THEME CHANGE
function toggleTheme() {
	//	IN THE document OBJECT, SELECT THE body ELEMENT AND ADD AN EVEN LISTENER FOR THE 
	// 	keyup EVENT, THEN toggle THE light-mode CLASS
	document.body.classList.toggle('light-mode');	

	if(document.body.classList.contains('light-mode')) {
		document.querySelector(".logo").src = "./images/logo.png";
		document.querySelector(".instruction").innerHTML = "Press <span>space</span> to join us on the dark side."
	} else {
		document.querySelector(".logo").src = "./images/logo_white.png";
		document.querySelector(".instruction").innerHTML = "Press <span>space</span> to join us on the light side."
	}
}


// 	CREATE A VARIABLE FOR custom_cursor TO HOLD THE .custom-cursor
const custom_cursor = document.querySelector(".custom-cursor");
// FUNCTION TO MAKE THE custom_cursor MOVEWITH THE MOUSE
document.addEventListener('mousemove', function(e) {
	// 	DYNAMICALLY ADJUST THE TOP POSITION OF THE custom_cursor BASED ON THE ACTUAL MOUSE
	custom_cursor.style.top = (e.pageY- 10) + "px";
	// 	DYNAMICALLY ADJUST THE LEFT POSITION OF THE custom_cursor BASED ON THE ACTUAL MOUSE
	custom_cursor.style.left = (e.pageX -10) + "px"; 
})


// 	querySelectorAll RETURNS A LIST[] OF ALL THE a TAGS
const site_links = document.querySelectorAll("a")
// 	HERE, WE LOOP THROUGH THE LIST 
site_links.forEach(link => {
	//	ADD A mouseover EVENT LISTENER TO EACH INDIVIDUAL link
	link.addEventListener("mouseover", function() {
		// 	WHEN THE link IS HOVERED ON, ADD THE expand CLASS
		custom_cursor.classList.add("expand");
	})
	//	ADD A mouseover EVENT LISTENER TO EACH INDIVIDUAL link
	link.addEventListener("mouseleave", function() {
		// 	WHEN THE MOUSE LEAVES THE Link, REMOVE THE expand CLASS
		custom_cursor.classList.remove("expand");
	})
});

const nav_links = document.querySelectorAll(".nav-link");

nav_links.forEach(link => {
	link.addEventListener("click", function() {
		toggleMenu();
	})
})




// 	CREATE A VARIABLE FOR preloader TO HOLD THE .preloader
const preloader = document.querySelector('.preloader');
// 	FUNCTION FOR THE preloader EFFECT THAT HAPPENS EVERY 100 SECONDS
const fadeEffect = setInterval(() => {
	// 	IF THE preloader DOESN'T HAVE THE OPACITY THEN IT WILL BE EQUAL TO AN EMPTY STRING
	// 	HERE, WE CHECK IF THE preloader'S OPACITY IS NOT SET 
	if (!preloader.style.opacity) {
		// 	IF IT ISNT, SET IT TO 1
	  preloader.style.opacity = 1;
	}

	// NOW, WE CHECK IF THE OPACITY IS MORE THAN 0 OR NOT
	if (preloader.style.opacity > 0) {
		// 	IF YES, THEN DECREASES ITS VALUE BY .1
	  preloader.style.opacity -= 0.1;
	} else {
		// HERE, WE CLEAR THE INTERVAL TIMER THAT WAS SET OUTSIDE
	  clearInterval(fadeEffect);
	}
	// SET A TIMER FOR 100 MILLISECONDS
}, 100);

// 	ON THE document ADD THE DOMContentLoaded EVENT LISTENER WHICH WILL RUN ONCE ALL THE ELEMENTS HAVE BEEN LOADED
document.addEventListener("DOMContentLoaded", function(){
	preloader.style.display = "none";
});

// ADD A load EVENT LISTENER TO THE window, THEN RUN THE fadeEffect FUNCTION
window.addEventListener('load', fadeEffect);