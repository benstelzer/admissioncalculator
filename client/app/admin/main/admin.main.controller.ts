namespace app {


export class AdminMainController {
  public status;
    public user: IUser;
    public data;
    public myChartObject = {};
    public users: IUser[];
    public permission;



    public drawChart(){this.myChartObject.type = "BarChart";




    this.myChartObject.options = {
        'title': 'Average College Admit Rate from Submitted Data'
    };};


    public remove(p: IUser) {
console.log(this.permission.isUser);
      if(this.permission.isUser == false)

          this.AdminService.remove(p._id).then(() => {
          this.users.splice(this.users.indexOf(p),1);
          }, () => {
            console.error("error!!!!---ERROR!!--i")
          } )
        }



      public logout() {
        this.AdminService.logout();
      }

      public dataPopulate1() {


        this.AdminService.dataPopulate1().then((data) => {
          this.data = data;

        let columns = [{id: "s", label: "School", type: "string"},
        {id: "m", label: "Average Admit Rate (%)", type: "number"}]

        let rows = [ {c: [
              {v: data[0]._id},
              {v: data[0].scoreAvg},
          ]},{c: [
                {v: data[1]._id},
                {v: data[1].scoreAvg},
            ]},{c: [
                  {v: data[2]._id},
                  {v: data[2].scoreAvg},
              ]}]

              this.myChartObject.data ={"cols": columns, "rows": rows}

        }, (err) => {
          alert(err);
        });



      }




constructor (private AdminService: app.AdminService,
   private $state: ng.ui.IStateService,
 private $window: ng.IWindowService) {

this.drawChart();

this.status = AdminService.status;

this.users = AdminService.getAll();

this.permission = AdminService.status;


}

}

angular.module("app").controller("AdminMainController", AdminMainController)

}
