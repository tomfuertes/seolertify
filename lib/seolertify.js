/*global jQuery*/

(function () {
  'use strict';

  /**
   * Main seolertify function - everything else is just
   * loading boilerplate for jQuery and alertify globals
   */
  function seolertify() {
    var text = [
      'Title: ' + escape($('title').text()),
      'Keywords: ' + escape($('meta[name=keywords]').attr('content')),
      'Description: ' + escape($('meta[name=description]').attr('content')),
      'H1: ' + escape($('h1').text())
    ].join('<br />');

    alertify.alert(text);
  }

  // Loading scripts anychronously
  function insurejQueryThen(success) {
    if (window.jQuery) {
      return success();
    }
    var script = document.createElement('script');
    script.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js';
    var head = document.getElementsByTagName('head')[0],
      done = false;
    script.onload = script.onreadystatechange = function () {
      if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
        done = true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
      }
    };
    head.appendChild(script);
  }

  var loadAlertify = function () {
    if (window.alertify) {
      return seolertify();
    }
    var $ = jQuery.noConflict(true);
    var head = document.getElementsByTagName('head')[0];
    var loadStyleSheet = function (url) {
      var ss = document.createElement('link');
      ss.type = 'text/css';
      ss.rel = 'stylesheet';
      ss.href = url;
      head.appendChild(ss);
    };
    loadStyleSheet('//cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.core.css');
    loadStyleSheet('//cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.bootstrap.css');

    $.getScript('//cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.min.js')
      .then(seolertify);
  };

  insurejQueryThen(loadAlertify);

})();
