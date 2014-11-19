(function(document) {
  'use strict';

  var template = document.querySelector('#is-auto-bound')
    , router = document.querySelector('app-router')
    ;

  router.go('/summary', { replace: true });

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

  template.routeMe = function(evt){
    console.log((evt.target).getAttribute('hash'));
    this.setRoute('/'+(evt.target).getAttribute('hash'));
  };

  template.setRoute = function(route) {
    var isCurrentRoute = new RegExp(route).test(window.location.hash);
    console.log(window.location.hash, route);
    if(!isCurrentRoute){
      router.go(route, { replace: true });
    }
  };

  template.selectedIndex = 0;

  template.addEventListener('template-bound', function(e) {
    this.route = this.route || 'summary';
    this.selectedIndex = this.selectedIndex || 0;
  });

  template.keyHandler = function(e, detail, sender) {
    console.log(detail.key);
    switch (detail.key) {
      case "1" : {}
        this.selectedIndex = 0;
        this.setRoute('/summary');
        break;
      case "2":
        this.selectedIndex = 1;
        this.setRoute('/components');
        break;
      case "3":
        this.selectedIndex = 2;
        this.setRoute('/libraries');
        break;
      case "4":
        this.selectedIndex = 3;
        router.go('/resources', {replace: true});
    }
  };

  document.addEventListener('polymer-ready', function() {

  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
