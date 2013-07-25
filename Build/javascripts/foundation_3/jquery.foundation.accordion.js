;(function ($, window, undefined){
  'use strict';

  $.fn.foundationAccordion = function (options) {
    var $accordion = $('.accordion');

    if ($accordion.hasClass('hover') && !Modernizr.touch) {
      $('.accordion li', this).on({
        mouseenter : function () {
          var p = $(this).parent(),
            flyout = $(this).children('.content').first();

          $('.content', p).not(flyout).slideUp('1200').parent('li').removeClass('active'); //changed this
          flyout.slideDown('1200', function () {
            flyout.parent('li').addClass('active');
          });
        }
      });
    } else {
      $('.accordion li .title', this).on('click.fndtn', function () {
        var li = $(this).parent('li:first'),
            p = li.parent(),
            flyout = li.children('.content').first();

        /*
        if (li.hasClass('active')) {
          p.find('li').removeClass('active').end().find('.content').hide();
        } else {
          $('.content', p).not(flyout).slideUp('1200').parent('li').removeClass('active'); //changed this
          flyout.slideDown('1200', function () {
            flyout.parent('li').addClass('active');
          });
        }
        */

        if (li.hasClass('active')) {
          li.find('.content').slideUp('1400', function() {
              li.removeClass('active');
          });
        } else {
          $('.content', p).not(flyout).slideUp('1400', function() {
              $(this).parent('li').removeClass('active');
          });
          flyout.slideDown('1400', function () {
            flyout.parent('li').addClass('active');
          });
        }

      });
    }

  };






})( jQuery, this );