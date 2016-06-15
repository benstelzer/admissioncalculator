namespace app {
  export class DetailsController {

public users: IUser[];



    constructor (
      private UserService: app.UserService
    ) {

  this.users = UserService.getAll();



    }
  }
angular.module("app").controller("DetailsController", DetailsController)
}
