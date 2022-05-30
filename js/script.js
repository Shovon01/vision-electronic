$(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });


//   for slider
var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
var i;
var slides2 = document.getElementsByClassName("mySlides2");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides2.length; i++) {
slides2[i].style.display = "none";  
}
slideIndex2++;
if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides2[slideIndex2-1].style.display = "block";  
dots[slideIndex2-1].className += " active";
setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

var slideIndex3 = 0;
showSlides3();

function showSlides3() {
var i;
var slides3 = document.getElementsByClassName("mySlides3");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides3.length; i++) {
slides3[i].style.display = "none";  
}
slideIndex3++;
if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides3[slideIndex3-1].style.display = "block";  
dots[slideIndex3-1].className += " active";
setTimeout(showSlides3, 2000); // Change image every 2 seconds
}

var slideIndex4 = 0;
showSlides4();

function showSlides4() {
var i;
var slides4 = document.getElementsByClassName("mySlides4");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides4.length; i++) {
slides4[i].style.display = "none";  
}
slideIndex4++;
if (slideIndex4 > slides4.length) {slideIndex4 = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides4[slideIndex4-1].style.display = "block";  
dots[slideIndex4-1].className += " active";
setTimeout(showSlides4, 2000); // Change image every 2 seconds
}