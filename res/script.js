const myApp = angular.module("myApp",["ngRoute"]);
myApp
.config(function($routeProvider){
    $routeProvider
    .when("/page1",{
        templateUrl:"../res/pages/page1.html",
        controller:'firstctrl'
    })
    .when("/page2",{
        templateUrl:"../res/pages/page2.html",
        controller:'secondctrl'
    })
    .when("/page2/:first/:last",{
        templateUrl:"../res/pages/page2.html",
        controller:'secondctrl'
    })
    .when("/page3",{
        templateUrl:"../res/pages/page3.html",
        controller:'thirdctrl'
    })
})

.controller('firstctrl',function($scope,$http){
    $http({
        method:"get",
        url: 'https://amberlinda15.github.io/json-files/data.json'
    })
    .then(response => {
        $scope.teammembers = response.data.teammembers
    }); 
})
.controller('secondctrl',function($scope,$http,$routeParams){

    $http({
        method:"get",
        url: 'https://amberlinda15.github.io/json-files/data.json'
    })
    .then(response => {
        $scope.teammembers = response.data.teammembers
    }); 

    if($routeParams.first && $routeParams.last){
        $scope.detail = {first:$routeParams.first,last :$routeParams.last};
    }


})
.controller('thirdctrl',function($scope,$http){
    $http({
        method:"get",
        url: 'https://amberlinda15.github.io/json-files/data.json'
    })
    .then(response => {
        $scope.teammembers = response.data.teammembers
    }); 
});
