angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    var ddo = {};

    ddo.restric = "AE"

    ddo.transclude = true

    ddo.scope = {
        titulo: '@',
        nome: '@',
        foto: '@',
        cargo: '@',
        departamento: '@'
    }

    ddo.templateUrl = 'js/directives/meu-painel.html'

    return ddo;
});