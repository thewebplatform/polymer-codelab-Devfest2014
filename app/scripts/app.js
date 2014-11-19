(function(document) {
  'use strict';

  var template = document.querySelector('template[is="auto-binding"]');

  template.pages = [
    { name: 'summary'    , hash: 'summary'},
    { name: 'components' , hash: 'components'},
    { name: 'libraries'  , hash: 'libraries'},
    { name: 'resources'  , hash: 'resources' }
  ];

  document.addEventListener('polymer-ready', function() {

    console.log(template);

  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
