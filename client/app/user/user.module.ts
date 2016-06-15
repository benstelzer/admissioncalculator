namespace app {
  angular.module("app").config ((
    $stateProvider:ng.ui.IStateProvider

  ) => {
    $stateProvider.state("main", {
      url:"/",
      templateUrl: "/client/app/user/main/user.main.html",
      controller: "UserMainController as vm"
    }).state( "details", {
      url:"/details/:id",
      templateUrl:"/client/app/user/details/details.html",
      controller: "DetailsController as vm"
    })
  });
}
