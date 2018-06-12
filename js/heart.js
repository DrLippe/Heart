// JavaScript Document
$(document).ready(function(){
  'use strict';
  
  // Add Header
  $('body').prepend('<header></header>');
  $('header').append('<language><flag class="' + getLanguage() + '"></flag></language>');
  $('language').append('<languageselector><flag class="ja"></flag><flag class="en"></flag><flag class="de"></flag></languageselector>').children('languageselector').hide();
  
  // Add Content-Container
  $('header').after('<container></container>');
  
  // Run melding Module
  meldModule();

  // Add Languageselector Functionality
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