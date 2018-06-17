document.addEventListener('DOMContentLoaded', function() {
 let comparisonSlider = document.getElementById('comparison-slider');
 let pictureRight = comparisonSlider.querySelector('.picture--right');
 let handle = comparisonSlider.querySelector('.handle');
 let skew = 0;
 let delta = 0;

 if (comparisonSlider.className.indexOf('comparison-slider') != -1) {
     skew = 2000;
 }

 comparisonSlider.addEventListener('mousemove', function(e) {
     delta = (e.clientX - window.innerWidth / 2) * 0.5;
     handle.style.left = e.clientX + delta + 'px';
     pictureRight.style.width = e.clientX + skew + delta + 'px';
 });
});