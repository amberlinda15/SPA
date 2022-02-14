const myApp = angular.module("myApp",["ngRoute"]);
myApp
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"../index.html"
    })
    .when("/page1",{
        templateUrl:"./pages/page1.html"
    })
    .when("/page2",{
        templateUrl:"./pages/page2.html"
    })
    .otherwise({redirectTo: '/'});
})
