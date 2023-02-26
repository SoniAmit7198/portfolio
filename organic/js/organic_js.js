// let nav = document.getElementById('x')

// console.log(nav)

// window.onscroll = function()
// {
// 	if(document.documentElement.scrollTop > 50)
// 	{
// 		a = nav.classList.add("header-scrolled");
// 		console.log(a)
// 	}
// 	else
// 	{
// 		nav.classList.remove("header-scrolled");
// 	}
// }


//let nav = document.querySelector(".navbar");
// window.onscroll = function()
// {
// 	if(document.documentElement.scrollTop > 50)
// 	{
// 		nav.classList.add("header-scrolled");
// 	}
// 	else
// 	{
// 		nav.classList.remove("header-scrolled");	
// 	}
// }

let navBar = document.querySelectorAll(".nav-link");
console.log(navBar);
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e)
{
	e.addEventListener("click",function(){
		navCollapse.classList.remove("show");
	})
})
