angular.module('CoffeeHouseCoworkers.radio.services', [])

.factory('RadioService', ['$http', function($http) {
	return {
		getLive: function(){
			return $http.get('http://192.241.169.148:4000/live');
		}
	};
}]);