namespace app {
 export class AdminRegisterController {
   public admin: IAdmin;
   public register () {
     this.AdminService.register(this.admin).then((res) => {
       this.$state.go("admin main");
     }, (err) => {
       alert(err);

     });

   }



   constructor (private AdminService: app.AdminService, private $state: ng.ui.IStateService) {


   }
 }
 angular.module("app").controller("AdminRegisterController", AdminRegisterController)
}
