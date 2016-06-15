import * as mongoose from "mongoose";
export interface IUserModel extends IUser, mongoose.Document{}

let userSchema = new mongoose.Schema({
  school: {type:String, required: true},
  satOld: String,
  satNew: String,
  satTwo: String,
  act: {type:String, required: true},
  gpa: {type:String, required: true},
  sport: {type:String, required: true},
  legacy: {type:String, required: true},
  rank: {type:String, required: true},
  firstGen: {type:String, required: true},
  interview: {type:String, required: true},
  course: {type:String, required: true},
  essay: {type:String, required: true},
  recommendation: {type:String, required: true},
  extra: {type:String, required: true},
  scoreSum: Number,
  schoolUrl:String
})

export let User = mongoose.model("User", userSchema);
