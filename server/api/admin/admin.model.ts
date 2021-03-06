import * as mongoose from "mongoose";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

export interface IAdminModel extends IAdmin, mongoose.Document {
  createJWT(): string;
  hashPassword(password: string, cb: (err: any, result: any) => any);
  comparePassword(password: string, cb: (err: any, isMatch: boolean) => any);
}

let adminSchema = new mongoose.Schema({

  email: {type:String, required: true, unique: true, lowercase: true, trim: true},
  password: {type:String, required: true},
  salt: String,
  username: String,
  isUser: Boolean
})

adminSchema.method("hashPassword", function(password: string, done: Function){
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = crypto.pbkdf2(password, this.salt, 1000, 32, (err,hash) => {
    if (err) return done (err);
    this.password = hash;
    done();
  });

});

adminSchema.method("comparePassword", function(password: string, done: Function){
  crypto.pbkdf2(password, this.salt, 1000, 32, (err,hash) => {
    if(err) return done (err);
    done(null, hash == this.password)
  });

});

//TODO: store jwt secret in process.env
//TODO: change the secret before publishing website to live

adminSchema.method("createJWT", function () {

  return jwt.sign({
    _id: this._id,
    email: this.email,
    isUser: this.isUser
  }, process.env.JWT_SECRET)

});

export let Admin = mongoose.model<IAdminModel>("Admin", adminSchema);
