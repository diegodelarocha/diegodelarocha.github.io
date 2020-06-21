//To make a new one, change the following :
//
//carousel function add a new Number


//----------------Global---------------


//////----------------AutoSlideShow FOR ALL---------------
//var myIndex = [0,0,0,0];
//var autoSlideId = ["myAutoSlides1","myAutoSlides2","myAutoSlides3","myAutoSlides4"];
//var autoCaptionId = ["auto-caption-container1","auto-caption-container2","auto-caption-container3","auto-caption-container4"];
////Slide 1
//carousel(0,0);
////Slide 2
//carousel(0,1);
////Slide 3
//carousel(0,2);
////Slide 4
//carousel(0,3);
//
//function carousel(n, no) {
//    var i;
//    var x = document.getElementsByClassName(autoSlideId[no]);
//	var text = document.getElementsByClassName(autoCaptionId[no]);
//    for (i = 0; i < x.length; i++) {
//		x[i].style.display = "none";  
//		text[i].style.display = "none";
//    }
//    myIndex[no]++;
//    if (myIndex[no] > x.length) {myIndex[no] = 1}    
//
//	x[myIndex[no]-1].style.display = "block";
//	text[myIndex[no]-1].style.display = "block";
//    setTimeout(carousel, 2300); // Change image every 2 seconds
//}






//----------------AutoSlideShow 1 STILLS---------------
var myIndex1 = 0;

carousel1();


function carousel1() {
    var i;
    var x = document.getElementsByClassName("myAutoSlides1");
    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
    }
    myIndex1++;
    if (myIndex1 > x.length) {myIndex1 = 1}    
    x[myIndex1 -1].style.display = "block";
    setTimeout(carousel1, 2300); // Change image every 2 seconds
}




//SLIDE SHOWS WITH CAPTIONS THE FIRST 3


//----------------AutoSlideShow 2---------------
var myIndex2 = 0;

carousel2();


function carousel2() {
    var i;
    var x = document.getElementsByClassName("myAutoSlides2");
	var text = document.getElementsByClassName("auto-caption-container2");
    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
		text[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) {myIndex2 = 1}    
    x[myIndex2 -1].style.display = "block";
	text[myIndex2 -1].style.display = "block";
    setTimeout(carousel2, 2300); // Change image every 2 seconds
}


//----------------AutoSlideShow 3---------------
var myIndex3 = 0;

carousel3();


function carousel3() {
    var i;
    var x = document.getElementsByClassName("myAutoSlides3");
	var text = document.getElementsByClassName("auto-caption-container3");
    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
		text[i].style.display = "none";
    }
    myIndex3++;
    if (myIndex3 > x.length) {myIndex3 = 1}    
    x[myIndex3 -1].style.display = "block";
	text[myIndex3 -1].style.display = "block";
    setTimeout(carousel3, 2300); // Change image every 2 seconds
}


//----------------AutoSlideShow 4---------------
var myIndex4 = 0;

carousel4();


function carousel4() {
    var i;
    var x = document.getElementsByClassName("myAutoSlides4");
	var text = document.getElementsByClassName("auto-caption-container4");
    for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
		text[i].style.display = "none";
    }
    myIndex4++;
    if (myIndex4 > x.length) {myIndex4 = 1}    
    x[myIndex4 -1].style.display = "block";
	text[myIndex4 -1].style.display = "block";
    setTimeout(carousel4, 2300); // Change image every 2 seconds
}

