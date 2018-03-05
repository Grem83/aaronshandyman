/**
 * @file
 * Theme scripts for the Drupal Bootstrap Sell theme.
 */

'use strict';

var hemophilia = hemophilia || {};
var $ = jQuery;

/* INIT

 ----------------------------------------------------------------------------------------------------------------------*/
hemophilia.init = function () {
    Drupal.behaviors.helloWorld = {
        attach: function (context) {
        }
    }
    $('.primary--menu h3').click(function () {
        $(this).prevAll().removeClass('show__list');
        $(this).nextAll().removeClass('show__list');
        $('.primary--menu .first-row').removeClass('show__article');
        $(this).nextUntil('h3').toggleClass('show__list');
        $('.primary--menu .show__article .row-second').removeClass('show__me');
    })

    $('.primary--menu .first-row').hover(function () {
            $('.primary--menu .first-row').removeClass('show__article');
            $('.primary--menu .first-row .row-second').removeClass('show__me');
            $(this).addClass('show__article')
            $('.primary--menu .show__article .row-second').addClass('show__me');
        }, function(){

        });
};


/* DOM READY
 ---------------------------------------------------------------------------------------------------------------------*/
$(hemophilia.init);

/* FUNCTIONS
 ----------------------------------------------------------------------------------------------------------------------*/

/**
 * Diaporoma
 */
