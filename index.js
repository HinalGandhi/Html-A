//jquery function for owl carousel library used in slider
jQuery("#carousel").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 4000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 3
    },

    600: {
      items: 5
    },

    1024: {
      items: 6
    },

    1366: {
      items: 7
    }
  }
});