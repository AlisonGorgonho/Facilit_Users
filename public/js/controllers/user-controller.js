angular.module('facilitUsers').controller('UsersController', function ($scope, $http, $filter) {
    
    $scope.departamentos = [];
    $scope.cargos = [];
    
    $http.get('http://localhost:3000/users')
    .success(function(usuarios){
        $scope.usuarios = usuarios;
        $scope.usuarios.forEach(element => {
            if (!$scope.departamentos.includes(element.department)) {
                $scope.departamentos.push(element.department);
            }
            if (!$scope.cargos.includes(element.role)) {
                $scope.cargos.push(element.role);
            }
        });
        
        $scope.usuarios.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        
        $scope.departamentos.sort();
        $scope.cargos.sort();
        
        $scope.usuariosFiltrados = $scope.usuarios;
        $scope.departamentosFiltrados = $scope.departamentos;
        $scope.cargosFiltrados = $scope.cargos;
        
    })
    
    $scope.filtroDepartamento = [];
    
    $scope.adicionaDepartamentoERemove = function (departamento){
        if (!$scope.filtroDepartamento.includes(departamento)) {
            $scope.filtroDepartamento.push(departamento);
        } else if ($scope.filtroDepartamento.includes(departamento)){
            var index = $scope.filtroDepartamento.indexOf(departamento);
            $scope.filtroDepartamento.splice(index, 1);
        }
    }
    
    $scope.filtroCargo = [];
    
    $scope.adicionaCargoERemove = function (cargo){
        if (!$scope.filtroCargo.includes(cargo)) {
            $scope.filtroCargo.push(cargo);
        } else if ($scope.filtroCargo.includes(cargo)){
            var index = $scope.filtroCargo.indexOf(cargo);
            $scope.filtroCargo.splice(index, 1);
        } 
    }

    
    $scope.filtrar = function () {

        $scope.departamentosFiltrados = $scope.departamentos;
        $scope.usuariosFiltrados = $scope.usuarios;
        
        function filtroDepartamento(value){
            if ($scope.filtroDepartamento.includes(value)) {
                // console.log(value)
                return value;
            }
        };

        function filtroCargos(value){
            if ($scope.filtroCargo.includes(value.role)) {
                // console.log(value)
                return value;
            }
        };
     

        if ($scope.filtroDepartamento.length != 0) {
            $scope.departamentosFiltrados = $scope.departamentosFiltrados.filter(filtroDepartamento);
        }

        if ($scope.filtroCargo.length != 0) {
            $scope.usuariosFiltrados = $scope.usuariosFiltrados.filter(filtroCargos)
        }

        $scope.inputFilter = $scope.filtroInput;

    }

});