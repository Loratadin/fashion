document.addEventListener('DOMContentLoaded', function() {
 let comparisonSlider = document.getElementById('comparison-slider');
 let pictureAfter = comparisonSlider.querySelector('.picture--after');
 let handle = comparisonSlider.querySelector('.handle');
 let skew = 0;
 let delta = 0;

 if (comparisonSlider.className.indexOf('comparison-slider') != -1) { //if our section has a class ‘comparison-slider’ 
     skew = 2000;
 }

 comparisonSlider.addEventListener('mousemove', function(e) {
     delta = (e.clientX - window.innerWidth / 2) * 0.5; // distance between the mouse and the center of the section
     handle.style.left = e.clientX + delta + 'px'; // change handle position
     pictureAfter.style.width = e.clientX + skew + delta + 'px'; // change width of pictureAfter
 });
});