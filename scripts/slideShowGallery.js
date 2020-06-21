// JavaScript Document

var slideIndex = [1,1];
var slideId= ["mySlides1", "mySlides2"];
var slide_demoId= ["slide_demo1","slide_demo2"];
var captionId= ["caption1","caption2"];
//Slide1 
showSlides(1, 0);
//Slide2 
showSlides(1, 1); 

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n,no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(slide_demoId[no]);
  var captionText = document.getElementById(captionId[no]);
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
  captionText.innerHTML = dots[slideIndex[no]-1].alt;
}



//// Original 1 slide Code Below
//
//var slideIndex = 1;
//showSlides(slideIndex);
//
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("slide_demo");
//  var captionText = document.getElementById("caption");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//  captionText.innerHTML = dots[slideIndex-1].alt;
//}