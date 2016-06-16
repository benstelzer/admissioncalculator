namespace app {
  export class DetailsController {

public users: IUser[];
public user: IUser;



    constructor (
      private UserService: app.UserService,
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService

    ) {

  this.user = UserService.getOne($stateParams["id"]);



    }
  }
angular.module("app").controller("DetailsController", DetailsController)
}
