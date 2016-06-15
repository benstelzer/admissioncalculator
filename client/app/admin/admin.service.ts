namespace app {
  interface IAdminResourceClass extends IUser, ng.resource.IResource<IAdminResourceClass> { }
        interface IAdminResource extends ng.resource.IResourceClass<IAdminResourceClass> {
            update(params: Object);
            update(params: Object, body: Object);
        }
  export class  AdminService {
    private AdminResource: IAdminResource;

    public status = {
      _id: "",
      email:"",
      isUser: ""
    }

    public getAll() {
            return this.AdminResource.query();
        }

        public remove(id) {
                return this.AdminResource.remove({ id: id }).$promise;

            }

        public update(user:IUser) {
        return this.AdminResource.update({ id: user._id }, user).$promise;
    }


    public getOne(id) {
              return this.AdminResource.get({ id: id });
          }

    public dataPopulate1() {
      let q = this.$q.defer();
      this.$http.post("/api/v1/admin/admin-main", null).then((res) => {

        q.resolve(res.data);
      }, (err) => {
        q.reject(err);
      });
      return q.promise;

    }

    public dataPopulate2() {
      let q = this.$q.defer();
      this.$http.post("/api/v1/admin/admin-main", null).then((res) => {

        q.resolve(res.data);
      }, (err) => {
        q.reject(err);
      });
      return q.promise;

    }


    public login(a: IAdmin) {
      let q = this.$q.defer();
      this.$http.post("/api/v1/admin/login", a).then((res) => {
        this.setToken(res.data["token"]);
        this.setAdmin();
        q.resolve();
      }, (err) => {
        q.reject(err);
      });
      return q.promise;


    }

    public register (a:IAdmin) {
      let q = this.$q.defer();
      this.$http.post("/api/v1/admin/register", a).then((res) => {
        this.setToken(res.data["token"]);
        this.setAdmin();
        q.resolve();
      }, (err) => {
        q.reject(err);
      });
      return q.promise;
    }

    public logout () {

    this.$window.localStorage.removeItem("token");
    this.status._id = "";
    this.status.email = "";



    }

    

    public setAdmin () {
      let a = JSON.parse( this.urlBase64Decode( this.$window.localStorage.getItem("token").split('.')[1]));
      this.status._id = a._id;
      this.status.email = a.email;
      this.status.isUser = a.isUser;

    }

    public getToken () {
      return this.$window.localStorage.getItem("token");

    }

    public setToken(token: string) {
      this.$window.localStorage.setItem("token",token);

    }

    private urlBase64Decode(str) {
      let output = str.replace(/-/g, "+").replace(/_/g, "/");
      switch (output.length % 4) {
        case 0: {break;}
        case 2: { output += "=="; break;}
        case 3: { output += "="; break;}
        default: {
          throw "Illegal base64url string!";
        }
      }
      return decodeURIComponent(encodeURIComponent(this.$window.atob(output))); //polifyll https"//github.com/davidchambers/Base64.js
    }

    constructor (
    private $http: ng.IHttpService,
    private $q: ng.IQService,
    private $window: ng.IWindowService,
    private $resource: ng.resource.IResourceService

   ) {
     if (this.getToken()) this.setAdmin();

     this.AdminResource = <IAdminResource>$resource("/api/v1/users/:id", null, { "update": { "method": "PUT" } })
   }
  }
  angular.module("app").service("AdminService", AdminService);
}
