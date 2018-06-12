// JavaScript Document
$(document).ready(function(){
  'use strict';
  
  getLanguage();

  // Add Header
  $('body').prepend('<header></header>');
  // Header Sticky to Top
  /*$(window).scroll(function() {
    if ( $(this).scrollTop() > 1) {
      $('header').addClass('sticky'); 
    } else {
      $('header').removeClass('sticky');
    }
  });*/
  
  // Add Content-Container
  $('header').after('<container></container>');
  $('header').append('<language><flag class="' + getLanguage() + '"></flag></language>');
  $('language').append('<languageselector><flag class="ja"></flag><flag class="en"></flag><flag class="de"></flag></languageselector>').children('languageselector').hide();
  
  meldModule();

  $('language').click( function() {
      $('languageselector').fadeToggle();
  });

  $('languageselector').children().click(function(){
      var updateLang = $(this).attr('class');
      changeLanguage(updateLang);
      $('language').children('flag').attr('class', updateLang)

      if( $('selector').length > 0) {
          var selected = $('selector').parent();
          
          $('selector').remove();
          selected.trigger('click');
      }
  });

});