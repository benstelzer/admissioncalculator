import * as express from "express";
import * as controller from "./user.controller"
import * as jwt from "express-jwt";



const router = express.Router();
const auth = jwt({
  secret: "apple",
  userProperty: "payload"
})

// base URL  ---- /api/v1/users

// GET:  /api/v1/users/

router.get('/',auth, controller.getAll);


// GET: /api/v1/user/:id
// :id -> unique id of userSubmission

router.get('/:id',auth, controller.getOne);

// POST: /api/v1/users/

router.post("/", controller.create);

router.put("/:id",auth, controller.update);

router.delete('/:id',auth, controller.remove);




export = router;
