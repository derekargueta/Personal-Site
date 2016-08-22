/* MINIFICATION NOTE
  Make sure app config $routeProvider does not get changes
*/

/////////////////////////////////////////
//            AngularJS                //
/////////////////////////////////////////
var myApp = angular.module('myApp', ['ngRoute', '720kb.tooltips']);
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
      templateUrl : '/pages/blog.html'
    })

    .when('/contact', {
      templateUrl : '/pages/contact.html'
    });

    $locationProvider.html5Mode(true);
}]);