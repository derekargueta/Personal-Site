$(document).ready(function(){var a=window.location.href.split("/")[3];"work"===a?$("#nav-indicator").addClass("-2u"):"projects"===a?$("#nav-indicator").addClass("-4u"):"blog"===a?$("#nav-indicator").addClass("-6u"):"bio"===a?$("#nav-indicator").addClass("-8u"):"contact"===a&&$("#nav-indicator").addClass("-10u");var n=function(){$("#nav-indicator").removeClass("-2u"),$("#nav-indicator").removeClass("-4u"),$("#nav-indicator").removeClass("-6u"),$("#nav-indicator").removeClass("-8u"),$("#nav-indicator").removeClass("-10u")};$("#home").click(function(){$("#nav-indicator").hasClass("-1u")||n()}),$("#work").click(function(){$("#nav-indicator").hasClass("-2u")||(n(),$("#nav-indicator").addClass("-2u"))}),$("#projects").click(function(){$("#nav-indicator").hasClass("-4u")||(n(),$("#nav-indicator").addClass("-4u"))}),$("#blog").click(function(){$("#nav-indicator").hasClass("-6u")||(n(),$("#nav-indicator").addClass("-6u"))}),$("#bio").click(function(){$("#nav-indicator").hasClass("-8u")||(n(),$("#nav-indicator").addClass("-8u"))}),$("#contact").click(function(){$("#nav-indicator").hasClass("-10u")||(n(),$("#nav-indicator").addClass("-10u"))})});var myApp=angular.module("myApp",["ngRoute"]);myApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){$routeProvider.when("/",{templateUrl:"/pages/home.html"}).when("/work",{templateUrl:"/pages/work.html"}).when("/projects",{templateUrl:"/pages/projects.html"}).when("/blog",{templateUrl:"/pages/blog.html",controller:"blogController"}).when("/contact",{templateUrl:"/pages/contact.html"}).when('/bio',{templateUrl:'/pages/bio.html'});$locationProvider.html5Mode(true);}]),myApp.controller("blogController",function(){});