import * as express from "express";
import {Admin, IAdminModel} from "./admin.model"
import {IUserModel, User} from "../users/user.model";

export function login (req: express.Request, res: express.Response, next:Function) {
  Admin.findOne({email: req.body.email})
  .exec((err, admin) => {
    if(err) return next(err);
    if(!admin) return next({status:401, message: "Invalid email/password combination"});
    admin.comparePassword(req.body.password, (err,isMatch) => {
      if(err) return next(err);
      if(!isMatch) return ({status:401, message: "Invalid email/password combination"});
      res.json({token: admin.createJWT()})
    })
  });
}

export function register (req: express.Request, res: express.Response, next: Function) {
  let a = new Admin(req.body);
  a.isUser = true;
  a.hashPassword(req.body.password, (err) => {
    if (err) return next (err);
  a.save((err, data:IAdminModel) => {
    if(err) return next(err);
    res.json({token: data.createJWT()});
  });
});
}

export function dataPopulate1 (req: express.Request, res: express.Response, next: Function){
  if (!req["payload"]._id)
  return res.redirect("/")
  User.aggregate([
        { $group: {
            _id: '$school',
            scoreAvg: { $avg: '$scoreSum'}
        }}
    ], function (err, results) {
        if (err) {
            console.error(err);
        } else {
            res.json(results);
        }
    }
);
}

export function dataPopulate2 (req: express.Request, res: express.Response, next: Function){
  User.aggregate([
        { $group: {
            _id: '$school',
            satAvg: { $avg: '$satOld'}
        }}
    ], function (err, results) {
        if (err) {
            console.error(err);
        } else {
            res.json(results);
        }
    }
);
}

export function dataPopulate3 (req: express.Request, res: express.Response, next: Function){
  User.aggregate([
        { $group: {
            _id: '$_id',
            actAvg: { $avg: '$act'}
        }}
    ], function (err, results) {
        if (err) {
            console.error(err);
        } else {
            res.json(results);
        }
    }
);
}
