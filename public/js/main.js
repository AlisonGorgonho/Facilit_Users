angular.module('facilitUsers', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'angularUtils.directives.dirPagination'])
.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'partials/principal.html',
        controller:'UsersController'
    })
});