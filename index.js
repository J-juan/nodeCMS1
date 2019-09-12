var express = require("express");
let router = express.Router();
var bodyParser = require("body-parser");
let db = require("./model/db");
let connection = db.connection();
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/dbtest", async function(req, res) {
  console.log(12, req.query);
  let project = { project_name: "test", create_time: "2019-08-09 12:12:12" };
  let sqlString = "INSERT INTO project SET ?";
  //   let connection = await db.connection();
  let response = await db.insert(connection, sqlString, project);
  //   db.close(connection);
  console.log(JSON.stringify(response));
  res.json(response);
  // json(JSON.stringify(response))
});
// 添加文章
app.post("/addNews", async function(req, res) {
  let project = req.body;
  let sqlString = "INSERT INTO news SET ?";
  let response = await db.insert(connection, sqlString, project);
  res.json(response);
});
// 获取文章列表
app.get("/getNewsList", async function(req, res) {
  let project = "";
  let sqlString = "SELECT * FROM news";
  let response = await db.insert(connection, sqlString, project);
  res.json(response);
});
// 通过id获取文章
app.get("/getNews/:id", async function(req, res) {
    let project ="";
    let sqlString = "SELECT * FROM news WHERE id="+req.params.id+"";
    let response = await db.insert(connection, sqlString, project);
    res.json(response);
  });

app.set("views", __dirname);
app.set("view engine", "html");
app.use(express.static(__dirname + "/views"));

app.listen(8888);
console.log("app running on 8888");
