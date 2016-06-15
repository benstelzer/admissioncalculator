import * as mongoose from "mongoose";
import * as express from 'express';
import config =  require('./config/config');

//Global vars

const PORT = process.env.PORT || 3000;
const MONGO_URL = "mongodb://localhost/college-manager";
let app = express();

// Mongoose connection

require("./api/users/user.model");
require("./api/admin/admin.model");
mongoose.connect(MONGO_URL, function (err) {
if(err) console.log(err)
else console.log(`connected to ${MONGO_URL}`)})


//Routes Config
app.use(require("body-parser")())
// access bower_components via /scripts/...
app.use('/bower_components', express.static('bower_components'));
// access the client->app->home folder via /app/home
app.use('/client', express.static('client'));


//Routes
app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use("/api/v1/users", require ("./api/users/user.routes"))
app.use("/api/v1/admin", require ("./api/admin/admin.routes"))

// if path starts with /client, /bower_components, or /api, send a 404

app.get(/\/(client|bower_components|api).{0,}/, (req, res, next) => {
  next({status: 404, message: `${req.method}: ${req.path} is not found, or does not exist. Please check your typogs.`});
});

// all other calls, ex: /adopt, send the index.html and let angular take care of routing
app.get('/*', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use((req,res,next) => {
  return next({status: 404, message: `${req.method}: ${req.path} is not found.`})
});

app.use((err: any, req,res,next) => {
  if (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "production")
  console.log(err);
  if (process.env.NODE_ENV === "production")
    err = {status: err.status || 500, message: err.message || ""};
    res.status(err.status).send(err);
  console.log(err);
});


app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err: any, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err);
})

app.listen(3000, () => {
  console.log('Server is listening on localhost:3000');
});
