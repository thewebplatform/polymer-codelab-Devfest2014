(function(document) {
  'use strict';

  document.querySelector('app-router').go('/summary', { replace: true });

  var template = document.querySelector('#is-auto-bound');

  template.pages = [
    {
      "headline" : "What are Web Components?",
      "hash"     : "summary",
      "url"      : "/views/summary-page.html"
    },
    {
      "headline" : "Where can I find packaged Web Components?",
      "hash"     : "components",
      "url"      : "/views/components-page.html"
    },
    {
      "headline" : "What libraries are available?",
      "hash"     : "libraries",
      "url"      : "/views/libraries-page.html"
    },
    {
      "headline" : "Additional Resources",
      "hash"     : "resources",
      "url"      : "/views/resources-page.html"
    }
  ];

  template.setRoute = function(evt){
    var route = '/' + (evt.target).getAttribute('hash');
    if(('#' + route) !== window.location.hash){
      document.querySelector('app-router').go(route);
    }
  };

  template.selectedIndex = 0;

  template.addEventListener('template-bound', function(e) {
    this.route = this.route || 'summary';
    this.selectedIndex = this.selectedIndex || 0;
  });

  template.keyHandler = function(e, detail, sender) {
    var pages = document.querySelector('#pages');

    switch (detail.key) {
      case 'left':
      case 'up':
        pages.selectPrevious();
        break;
      case 'right':
      case 'down':
        pages.selectNext();
        break;
      case 'space':
        detail.shift ? pages.selectPrevious() : pages.selectNext();
        break;
    }
  };

  document.addEventListener('polymer-ready', function() {

  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
