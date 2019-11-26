import $ from 'jquery';

$(document).ready(function () {

  function setTimeCarousel() {
    $('.carousel').carousel({
      interval: 2000
    });
  }

  function formHide() {
    $("#reservasiBtn").click(function () {
      $("#formReservasi").hide();
    });
  }

});
