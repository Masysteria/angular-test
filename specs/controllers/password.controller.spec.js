describe('In order to check the strength of my password as a visitor, I need to see the strong message on screen', function () {

	var passwordControlerTest;
	var $scope;

	beforeEach(function () {
		angular.mock.module('angular-test');

		angular.mock.inject(function ($controller, $rootScope){
			$scope = $rootScope.$new();

			passwordControlerTest = $controller('passwordController', {
				$scope : $scope
			});
		});

	});

	describe('I will test the grade methode', function() {

		it('should be weak with a 5 character long password', function() {
			// GIVEN
			$scope.password = '12345';
			// AND
			$scope.grade();

			// THEN
			expect($scope.strength).toEqual('weak');
		});

		it('should be medium with a 8 character long password', function() {
			// GIVEN
			$scope.password = '123456789';

			// AND
			$scope.grade();

			// THEN
			expect($scope.strength).toEqual('medium');
		});

		it('should be strong with a 10 character long password', function() {
			// GIVEN
			$scope.password = '12345678910';

			// AND
			$scope.grade();

			// THEN
			expect($scope.strength).toEqual('strong');
		});
	});

});