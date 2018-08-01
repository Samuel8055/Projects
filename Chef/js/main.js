/*------------------------ImageSlider---------------------*/

var imageIndex = 1;
imageSlides(imageIndex);

function change(n) {
  imageSlides(imageIndex += n);
}

function imageSlides(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {
    imageIndex = 1
  }    
  if (n < 1) {
    imageIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[imageIndex-1].style.display = "block";  
}

/*---------Automatic ImageSlider-----------*/

var imageIndex = 0;
automaticSlider();

function automaticSlider() {                                                               
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    imageIndex++;
    if (imageIndex > x.length) {imageIndex = 1} 
    x[imageIndex-1].style.display = "block"; 
    setTimeout(automaticSlider, 10000); 
}


/*-----------------Fixed Menu----------------------*/

window.onscroll = function() {
  myFunction()
};

var header = document.getElementById("menu");

var position = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= position) {
    header.classList.add("fixMe");
  } else {
    header.classList.remove("fixMe");
  }
}

