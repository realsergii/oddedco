angular.module("ctw", ['ngRoute', 'ngResource', 'angular-carousel']).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        template: " ",
        controller: 'ProjectListLandingController'
      }).
      when('/projects', {
        templateUrl: '/templates/projectsStatic.html',
        controller: 'ProjectListController'
      }).
      when('/project/:projectId', {
        templateUrl: '/templates/project.html',
        controller: 'ProjectController'
      }).
      when('/manifesto', {
        templateUrl: '/templates/manifesto.html',
        controller: 'ManifestoController'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: true
    });
  }]);
