angular.module('facilitUsers', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/principal.html',
        controller:'UsersController'
    })
});