$(document).ready(() => {
  /*= ================================
     ||          Turn off Google Map zooming
     ================================== */
  $('.map_canvas').addClass('scrolloff') // set the pointer events to none on doc ready
  $('#map').on('click', () => {
    $('.map_canvas').removeClass('scrolloff') // set the pointer events true on click
  })
  // you want to disable pointer events when the mouse leave the canvas area;
  $('.map_canvas').mouseleave(() => {
    $('.map_canvas').addClass('scrolloff') // set the pointer events to none when mouse leaves the map area
  })

  /*= ================================
     ||          Nivo-lightbox
     ================================== */

  $('.gallery-item').nivoLightbox({
    effect: 'fade', // The effect to use when showing the lightbox
    theme: 'default', // The lightbox theme to use
    keyboardNav: true, // Enable/Disable keyboard navigation (left/right/escape)
    clickOverlayToClose: true, // If false clicking the "close" button will be the only way to close the lightbox
    onInit() {
    }, // Callback when lightbox has loaded
    beforeShowLightbox() {
    }, // Callback before the lightbox is shown
    afterShowLightbox() {
    }, // Callback after the lightbox is shown
    beforeHideLightbox() {
    }, // Callback before the lightbox is hidden
    afterHideLightbox() {
    }, // Callback after the lightbox is hidden
    onPrev() {
    }, // Callback when the lightbox gallery goes to previous item
    onNext() {
    }, // Callback when the lightbox gallery goes to next item
    errorMessage: 'The requested content cannot be loaded. Please try again later.',
  })
})

$(() => {
  $('[data-toggle="tooltip"]').tooltip()
});
