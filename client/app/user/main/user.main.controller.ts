namespace app {
  export class UserMainController {
    public user = {};
    public users: IUser[];


    public create() {
      // logic for sat/act validation

      if (this.user['satOld'] === "--Select--" && this.user['satNew'] === "--Select--" && this.user['act'] === "--Select--" ) return;

      for(var prop in this.user) {
        if (prop !== 'satOld' && prop !== 'act' &&  prop !== 'satNew')
         if (this.user[prop] === "--Select--" || !this.user[prop]) return;
      }
  this.UserService.create(<IUser>this.user).then (() => {
    this.$state.go("details");
  } );
}

public update () {
  this.UserService.update(<IUser>this.user).then(() => {
  })
}



    constructor (private UserService: app.UserService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService) {
        this.user['school'] = this.user['satOld'] = this.user['satNew'] = this.user['act'] = this.user['rank'] = this.user['gpa'] = this.user['sport'] = this.user['legacy'] = this.user['satTwo'] = this.user['firstGen'] =this.user['extra'] =this.user['recommendation']=this.user['interview']=this.user['essay']=this.user['course']= "--Select--";
this.users = UserService.getAll();

    }
  }
  angular.module("app").controller("UserMainController", UserMainController)
}
