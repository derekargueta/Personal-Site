/* MINIFICATION NOTE
  Make sure app config $routeProvider does not get changes
*/

/////////////////////////////
//            Nav          //
/////////////////////////////
$(document).ready(function() {

  var pathname = window.location.href.split("/")[3];
  if(pathname === "work") {
    $("#nav-indicator").removeClass("-1u");
    $("#nav-indicator").addClass("-3u");
  } else if(pathname === "projects") {
    $("#nav-indicator").removeClass("-1u");
    $("#nav-indicator").addClass("-5u");
  } else if(pathname === "blog") {
    $("#nav-indicator").removeClass("-1u");
    $("#nav-indicator").addClass("-7u");
  } else if(pathname === "contact") {
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
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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

    $locationProvider.html5Mode(true);
}]);

myApp.controller('blogController', function($scope) {

});