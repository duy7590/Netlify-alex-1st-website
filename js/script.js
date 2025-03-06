// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init(); // Start animations
});

// Console log when the carousel moves
document.querySelector("#imageSlider").addEventListener("slide.bs.carousel", function(event) {
    console.log("Carousel moved to slide index: " + event.to);
});