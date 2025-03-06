// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // ✅ Check if AOS exists before initializing
    if (typeof AOS !== "undefined") {
        AOS.init(); // Start animations
    } else {
        console.warn("❌ AOS library not found. Make sure AOS script is included in HTML.");
    }

    // ✅ Check if #imageSlider exists before adding event listener
    let slider = document.querySelector("#imageSlider");
    if (slider) {
        slider.addEventListener("slide.bs.carousel", function(event) {
            console.log("✅ Carousel moved to slide index: " + event.to);
        });
    } else {
        console.warn("❌ #imageSlider not found in the document.");
    }
});