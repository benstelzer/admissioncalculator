namespace app {
  export class AdminDetailsController {

public user: IUser;
public isEditing = false;
public updateUser: IUser;
public permission;

public startEditing() {
  this.isEditing = true;
  this.updateUser = angular.copy(this.user);
}




public update () {
  if(this.permission.isUser == false)
  this.AdminService.update(this.updateUser).then(() => {
    this.isEditing = false;
    this.user = angular.copy(this.updateUser);

  })
}




    constructor (
      private AdminService: app.AdminService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {

  this.user = this.AdminService.getOne($stateParams["id"]);

  this.permission = AdminService.status;



    }
  }
angular.module("app").controller("AdminDetailsController", AdminDetailsController)
}
