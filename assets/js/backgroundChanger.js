// Background Image Changer
$(document).ready(function() {
    let images = ["assets/images/slides/1.jpg", "assets/images/slides/2.jpg"];
    let index = 0;
    
    setInterval(function() {
        index = (index + 1) % images.length;
        $('#hero').css('background-image', 'url(' + images[index] + ')');
    }, 5000);
});