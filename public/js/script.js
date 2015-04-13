/* MINIFICATION NOTE
  Make sure app config $routeProvider does not get changes
*/

/////////////////////////////
//            Nav          //
/////////////////////////////
$(document).ready(function() {

  var pathname = window.location.href.split("/")[3];
  if(pathname === "work") {
    $("#nav-indicator").addClass("-2u");
  } else if(pathname === "projects") {
    $("#nav-indicator").addClass("-4u");
  } else if(pathname === "blog") {
    $("#nav-indicator").addClass("-6u");
  } else if(pathname === "bio") {
    $("#nav-indicator").addClass("-8u");
  } else if(pathname === "contact") {
    $("#nav-indicator").addClass("-10u");
  }

  var clearNav = function() {
    $("#nav-indicator").removeClass("-2u");
    $("#nav-indicator").removeClass("-4u");
    $("#nav-indicator").removeClass("-6u");
    $("#nav-indicator").removeClass("-8u");
    $("#nav-indicator").removeClass("-10u");
  }

  $("#home").click(function() {
    if(!$("#nav-indicator").hasClass("-1u")) {
      clearNav();
    }
  });

  $("#work").click(function() {
    if(!$("#nav-indicator").hasClass("-2u")) {
      clearNav();
      $("#nav-indicator").addClass("-2u");
    }
  });

  $("#projects").click(function() {
    if(!$("#nav-indicator").hasClass("-4u")) {
      clearNav();
      $("#nav-indicator").addClass("-4u");
    }
  });

  $("#blog").click(function() {
    if(!$("#nav-indicator").hasClass("-6u")) {
      clearNav();
      $("#nav-indicator").addClass("-6u");
    }
  });

  $("#bio").click(function() {
    if(!$("#nav-indicator").hasClass("-8u")) {
      clearNav();
      $("#nav-indicator").addClass("-8u");
    }
  });

  $("#contact").click(function() {
    if(!$("#nav-indicator").hasClass("-10u")) {
      clearNav();
      $("#nav-indicator").addClass("-10u");
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
    })

    .when('/bio', {
      templateUrl: '/pages/bio.html'
    });

    $locationProvider.html5Mode(true);
}]);

myApp.controller('blogController', function($scope) {

});