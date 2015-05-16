angular.module('reader.controllers', ['ionic', 'ngCordova'])
	.controller('readerController', function($scope, $cordovaBarcodeScanner){

		$scope.readCode = function(){

			$cordovaBarcodeScanner.scan().then(function(img){
				alert(img.text);
			},function(err){
				alert('Error' + err);
			});
		}

	}).controller('loginController', function($scope){

		var people = [{
			username:'invitado',
			password:'invitado'
		},{
			username:'root',
			password:'root'
		}];

		$scope.log = false;
		$scope.users = people;

		$scope.login = function(username, password){
			if (!username) {
				alert('Ingrese nombre');
				return;
			};

			if (!password) {
				alert('Por favor ingrese la contraseña');
				return;
			};

			$scope.users.forEach(function(user){
				if(user.username == username && user.password == password){
					$scope.log = true;
					return;
				}
			})

			if (!$scope.log) {
				alert('Datos incorrectos');
			};

			$scope.isLogged = function(){
				return $scope.log;
			}

		}
	});