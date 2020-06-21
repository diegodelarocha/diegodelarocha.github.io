//NavBAR









//This makes it so it can hold a click on active for the filtering system
var elements = document.getElementsByClassName("navText");
for(var i = 0; i < elements.length; i++){
	
	elements[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("navActive");
    current[0].className = current[0].className.replace(" navActive", "");
    this.className += " navActive";
	  
	});
}







//FilterTEXT
//This makes it so it can hold a click on active for the filtering system
var elements = document.getElementsByClassName("category_item");
for(var i = 0; i < elements.length; i++){
	
	elements[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
	  
	});
}











filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}









//
//$(document).ready(function(){
//	$('.category_item').click(function(){
//		var category = $(this).attr('id');
//		
//		if(category == 'all'){
////			get 'portfolio' class and add a class called 'hide', and use this to CSS a transition out.
//			$('.portfolio').addClass('hide');
////			This sets a time out and makes it wait the number at the end of this function in miliseconds, and then removes the class 'hide' we created on the top.
//			setTimeout(function(){
//				$('.portfolio').removeClass('hide');
//			}, 200);
//			
//		} else{
//			$('.portfolio').addClass('hide');
//			setTimeout(function(){
//			$('.'+ category).removeClass('hide');
//			}, 350);
//		}
//
//	});
//});

		











