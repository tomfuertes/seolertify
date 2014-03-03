/*global jQuery*/

(function (jQuery) {
  'use strict';
  var $ = jQuery.noConflict(true);

  var text = [
    'Title: ' + escape($('title').text()),
    'Keywords: ' + escape($('meta[name=keywords]').attr('content')),
    'Description: ' + escape($('meta[name=description]').attr('content')),
    'H1: ' + escape($('h1').text())
  ].join('<br />');

  alertify.alert(text);

})(jQuery);
