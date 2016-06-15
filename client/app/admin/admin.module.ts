namespace app {
  angular.module("app").config ((
    $stateProvider:ng.ui.IStateProvider

  ) => {
    $stateProvider.state("register", {
      url:"/register",
      templateUrl: "/client/app/admin/register/register.html",
      controller: "AdminRegisterController as vm"
    }).state
      $stateProvider.state("login", {
        url:"/login",
        templateUrl: "/client/app/admin/login/login.html",
        controller: "AdminLoginController as vm"
      }).state( "admin details", {
      url:"/admin-main/details/:id",
      templateUrl:"/client/app/admin/details/admin.details.html",
      controller: "AdminDetailsController as vm",
      data: {
                requiresAuthentication: true
            }
      }).state
        $stateProvider.state("admin main", {
          url:"/admin-main",
          templateUrl: "/client/app/admin/main/admin.main.html",
          controller: "AdminMainController as vm",
          data: {
                    requiresAuthentication: true
                }

        });
  });


  angular.module('app').run((
    $rootScope: ng.IRootScopeService,
    $state: ng.ui.IStateService,
    AdminService: app.AdminService

) => {
        $rootScope.$on('$stateChangeStart', (e, to) => {
            // protect non-public views
            if (to.data && to.data.requiresAuthentication) {
                if (!AdminService.getToken()) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });
});
}
