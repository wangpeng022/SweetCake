let express = require("express");
let app = express();

app.use(function (req,res,next) {
    //允许的来源
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials', "true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});

let HList = require("./mock/HList");
//获取星级食物列表
let food = require("./mock/food.json");
//获取搜索选项
let search = require("./mock/search.json");

app.get("/hlist", function (req, res) {
    res.json(HList);
});
app.get('/star', function (req, res) {
    console.log(req.query);
    res.json(food[req.query.index]);
});
app.get('/search', function (req, res) {
    res.json(search);
});

let Lesson=require("./mock/Lesson");

//获取列表页课程数据
app.get('/lesson',function(req,res){
    res.json(Lesson);
    console.log(Lesson);
});

//注册用户信息
let users=require('./mock/users.json');
console.log(users);
app.post('/register',function (req,res) {
   let user=req.body;
    console.log(user.phone);
    let oldUser=users.find(item=>item.phone==user.phone);
   if(oldUser){  //有值就说明此用户已被注册了
       res.json({code:1,error:'手机号已经被注册过 了！'})
   }else {
       users.push(user);
       res.json({code:0,success:'用户注册成功！'})
   }

});

app.listen(3000,function () {
    console.log("端口 3000")
});
