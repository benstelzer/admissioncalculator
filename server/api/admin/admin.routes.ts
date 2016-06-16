import * as express from "express";
import * as controller from "./admin.controller"
import * as jwt from "express-jwt";


const router = express.Router();
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: "payload",
  credentialsRequired: false
})


router.post("/register", controller.register);
router.post("/login", controller.login);
router.post("/admin-main", auth, controller.dataPopulate1);


export = router;
