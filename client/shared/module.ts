namespace app {
  angular.module("app", ["ui.router", "ngResource", "googlechart"])
  .config((
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider

  ) => {

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  });

}
