// JavaScript Document
$(document).ready(function(){
  'use strict';
  
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
  $('header').append('<language><flag class="de"></flag></language>');
  $('language').append('<languageselector><flag class="ja"></flag><flag class="en"></flag><flag class="de"></flag></languageselector>').children('languageselector').hide();
  
  meldModule();

  $('language').click( function() {
      $('languageselector').toggle();
  });

  $('languageselector').children().click(function(){
      var updateLang = $(this).attr('class');
      changeLanguage(updateLang);
      $('language').children('flag').attr('class', updateLang)

      if( $('selector').length > 0) {
          console.log('true');
          var updateId = $('selector').parent().attr('id');
          $('selector').parent().trigger('click');
          $('commandname').html(meldModule.nameMe(updateId, updateLang));
      }
  });

});