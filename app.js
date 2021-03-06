
var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num',{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});


myApp.service("nameService",function(){
    
    var self = this;
    
    this.name = "Varun Bhandarkar";
    
    this.nameLength = function(){
        
        return self.name.length;
    }
    
});

myApp.controller("mainController",['$scope','$log',"nameService",
function($scope,$log,nameService){
   
    $scope.name= nameService.name;
    
    $scope.$watch("name",function(){
       nameService.name = $scope.name; 
    });
    
    $log.info(nameService.name);
    $log.info(nameService.nameLength());
   
}]);



myApp.controller("secondController",['$scope','$log','$routeParams',"nameService",
function($scope,$log,$routeParams,nameService){
   
    $scope.num= $routeParams.num || 1;
    
    $scope.name= nameService.name;
    
    $scope.$watch("name",function(){
       nameService.name = $scope.name; 
    });
    
    $log.second = "Property from second";
    $log.info($log);
   
}]);


myApp.directive("searchResult",function(){
    return{
        template : '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Varun Bhandarkar</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p> </a>'
    }
});



