angular.module('HelloModule', [])
    .factory('helloService', function() {
        return function() {
            return 'hello';
        }
    });