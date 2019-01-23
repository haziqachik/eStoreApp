var eventsApp = angular.module("eventsApp", []);
eventsApp.controller("EventController", function EventController($scope) 
{

 $scope.myDate = Date.now();

});