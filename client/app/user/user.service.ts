namespace app {
  interface IUserResourceClass extends IUser, ng.resource.IResource<IUserResourceClass> { }
      interface IUserResource extends ng.resource.IResourceClass<IUserResourceClass> {
          update(params: Object);
          update(params: Object, body: Object);
      }


  export class UserService {

    private UserResource: IUserResource;

    public getAll() {
            return this.UserResource.query();
        }


    public create(user:IUser) {
        return this.UserResource.save(user).$promise; }

        public getOne(id) {
          return this.UserResource.get({ id: id });
      }

      public update(user:IUser) {
        return this.UserResource.update({ id: user._id }, user).$promise;
    }

    constructor ( private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $resource: ng.resource.IResourceService)

        {
      this.UserResource = <IUserResource>$resource("/api/v1/users/:id", null, { "update": { "method": "PUT" } })

   }
  }
angular.module("app").service("UserService", UserService);
}
