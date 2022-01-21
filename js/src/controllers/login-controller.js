angular.module('login-controller', [ ])
.controller('LoginController', ['$scope', '$window', '$location', '$http', 'tytConfig', function($scope, $window, $location, $http, config) {
    $scope.creds = {};
    $scope.successfulLogin = false;

    $scope.login = function(creds) {
        $scope.errors = null;
        
        console.log("creds: " + creds.username + ", " + creds.password);        

        var credentials = "username=" + creds.username + "&password=" + creds.password;            

        $http({method: 'POST',
                url: config.apiUrl + "/login",
                data: credentials,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
            if (response.data) {
                var token
                  = $window.btoa(creds.username + ':' + creds.password);
                var userData = {
                    username: creds.username,
                    authData: token
                }
                $window.sessionStorage.setItem(
                  'userData', JSON.stringify(userData)
                );
                $http.defaults.headers.common['Authorization']
                  = 'Basic ' + token;
                $location.path('/list-all-trails');
            } else {
                alert("Authentication failed.")
            }
        });
            
    };
} ]);