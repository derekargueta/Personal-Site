
///////////////////////////////////
//            SkelJS             //
///////////////////////////////////
skel.init({
    reset:'full',
    breakpoints: {
    // Global.
        global: {
            href: '../css/style.css',
            containers: 1400,
            grid: {
                gutters: ['2em', 0]
            }
        },

    // XLarge.
        xlarge: {
            media: '(max-width: 1680px) and (min-width: 1281px)',
            href: '../css/breakpoints/xlarge.css',
            containers: 1200
        },

    // Large.
        large: {
            media: '(max-width: 1280px) and (min-width: 981px)',
            href: '../css/breakpoints/large.css',
            containers: 960,
            grid: {
                gutters: ['1.5em', 0]
            },
            viewport: {
                scalable: false
            }
        },

    // Medium.
        medium: {
            media: '(max-width: 980px) and (min-width: 737px)',
            href: '../css/breakpoints/medium.css',
            containers: '90%',
            grid: {
                zoom: 2
            }
        },

    // Small.
        small: {
            media: '(max-width: 736px) and (min-width: 481px)',
            href: '../css/breakpoints/small.css',
            containers: '90%',
            grid: {
                zoom: 3,
                gutters: ['1.25em', 0],
                collapse: false
            }
        },

    // XSmall.
        xsmall: {
            media: '(max-width: 480px)',
            href: '../css/breakpoints/xsmall.css',
            grid: {
                zoom: 4,
                collapse: true
            }
        }
    }
});

/////////////////////////////
//            Nav          //
/////////////////////////////
$(document).ready(function() {

      var pathname = window.location.href.split("#")[1];
      if(pathname === "/work") {
        $("#nav-indicator").removeClass("-1u");
        $("#nav-indicator").addClass("-3u");
      } else if(pathname === "/projects") {
        $("#nav-indicator").removeClass("-1u");
        $("#nav-indicator").addClass("-5u");
      } else if(pathname === "/blog") {
        $("#nav-indicator").removeClass("-1u");
        $("#nav-indicator").addClass("-7u");
      } else if(pathname === "/contact") {
        $("#nav-indicator").removeClass("-1u");
        $("#nav-indicator").addClass("-9u");
      }

      var clearNav = function() {
        $("#nav-indicator").removeClass("-1u");
        $("#nav-indicator").removeClass("-3u");
        $("#nav-indicator").removeClass("-5u");
        $("#nav-indicator").removeClass("-7u");
        $("#nav-indicator").removeClass("-9u")
      }

      $("#home").click(function() {
        if(!$("#nav-indicator").hasClass("-1u")) {
          clearNav();
          $("#nav-indicator").addClass("-1u");
        }
      });

      $("#work").click(function() {
        if(!$("#nav-indicator").hasClass("-3u")) {
          clearNav();
          $("#nav-indicator").addClass("-3u");
        }
      });

      $("#projects").click(function() {
        if(!$("#nav-indicator").hasClass("-5u")) {
          clearNav();
          $("#nav-indicator").addClass("-5u");
        }
      });

      $("#blog").click(function() {
        if(!$("#nav-indicator").hasClass("-7u")) {
          clearNav();
          $("#nav-indicator").addClass("-7u");
        }
      });

      $("#contact").click(function() {
        if(!$("#nav-indicator").hasClass("-9u")) {
          clearNav();
          $("#nav-indicator").addClass("-9u");
        }
      });
    });


/////////////////////////////////////////
//            AngularJS                //
/////////////////////////////////////////
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : '/pages/home.html'
    })

    .when('/work', {
      templateUrl : '/pages/work.html'
    })

    .when('/projects', {
      templateUrl : '/pages/projects.html'
    })

    .when('/blog', {
      templateUrl : '/pages/blog.html',
      controller  : 'blogController'
    })

    .when('/contact', {
      templateUrl : '/pages/contact.html'
    });
})

myApp.controller('blogController', function($scope) {});