$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
})

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var scrollHeight = document.body.scrollHeight;
  var height = window.innerHeight;

  var scrollPercentage = (scrollTop / (scrollHeight - height)) * 100;

  var hue = Math.round(scrollPercentage * 2.55); // Convert scroll percentage to hue value (0-255)

  document.body.style.backgroundColor = 'hsl(' + hue + ', 70%, 80%)'; // Change background color based on scroll
});