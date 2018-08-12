angular.module('facilitUsers').controller('UsersController', function ($scope, $http) {
    
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
            // a must be equal to b
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
                console.log(value)
                return value;
            }
        };

        function filtroCargos(value){
            if ($scope.filtroCargo.includes(value.role)) {
                console.log(value)
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
        console.log($scope.departamentosFiltrados)

    }
    
    
    $scope.filtroInput;
    
    $scope.filtroCargo;
    
    $scope.varControle = false;
    
    $scope.filtro1;
    $scope.filtro2;
    $scope.filtro3;




  

    $scope.fotos = [
        // {
        //     titulo: 'Kyoka Jiro',
        //     url:    '../../imgs/kyoka_jiro.jpg' 
        // },
        // {
        //     titulo: 'Katsuki Bakugo',
        //     url:    '../../imgs/katsuki_bakugo.jpg' 
        // },
        // {
        //     titulo: 'Mina Ashido',
        //     url:    '../../imgs/mina_ashido.jpg' 
        // },
        // {
        //     titulo: 'Ochaco Uraraka',
        //     url:    '../../imgs/ochaco_uraraka.jpg' 
        // },
        // {
        //     titulo: 'Shoto Todoroki',
        //     url:    '../../imgs/shoto_todoroki.jpg' 
        // }
    ];



    // Forma com promise

    // var promise = $http.get('vi/fotos');

    // promise.then(function(retorno){
    //     $scope.fotos = retorno.data;
    // }).catch(function(error){
    //     console.log('Ocorreu um erro na requisição')
    // });


    
});