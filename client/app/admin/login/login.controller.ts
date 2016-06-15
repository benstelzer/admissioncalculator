namespace app {
  export class AdminLoginController {
    public admin: IAdmin;


    public login () {
      this.AdminService.login(this.admin).then(() => {
        this.$state.go("admin main");
      }, (err) => {
        alert(err);
      });


    }


    constructor (

      private AdminService: app.AdminService,
      private $state: ng.ui.IStateService


    ) {

    }
  }
  angular.module("app").controller("AdminLoginController", AdminLoginController)
}
