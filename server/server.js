let express = require("express");
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
    resave:true,//每次访问都重新保存session
    saveUninitialized:true,//保存未初始化的session
    secret:'zfpx'//密钥
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
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
//获取首页 列表 && 轮播图
let HList = require("./mock/HList");
// console.log(HList);
//获取星级食物列表
let food = require("./mock/food.json");
//获取搜索选项
let search = require("./mock/search.json");

let friend = require("./mock/friend.json");

//获取搜索列表
let foodList = require("./mock/foodList.json");

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
app.get('/friend', function (req, res) {
    res.json(friend);
});

let Lesson = require("./mock/Lesson");

//获取列表页课程数据
app.get('/lesson', function (req, res) {
    res.json(Lesson);

});

app.post('/search', function (req, res) {
    let searchList = [];
    let find = req.body;
    let reg = new RegExp(find.searchFood, 'i');
    foodList.forEach(item => {
        searchList = [...searchList, ...item.data.find_recipe.filter(item => {
            return reg.test(item.recipe_name) || reg.test(item.recipe_info)
        })]
    });
    res.json({
        searchList: searchList.slice(0, find.limit),
        isLoading: false,
        limit: find.limit,
        keyword: find.searchFood
    });
});
app.post('/searchIndex', function (req, res) {
    let find = req.body;
    res.json(foodList[find.index]);
});

//注册用户信息
let users=require('./mock/users.json');

console.log(users);

app.post('/register',function (req,res) {
   let user=req.body;
    //console.log(user.phone);
    let oldUser=users.find(item=>item.phone==user.phone);
   if(oldUser){  //有值就说明此用户已被注册了
       res.json({code:1,error:'手机号已经被注册过 了！'})
   }else {
       user.id=users.length+1;
       user.petname=user.phone;
       users.push(user);
       res.json({code:0,success:'用户注册成功！',user})
   }
});

//登录
app.post('/login',function (req,res) {
   let user=req.body;
    // console.log(users);
    // console.log(user);
    let oldUser=users.find(item=>item.phone==user.phone&&item.password==user.password);

   if(oldUser){
       // req.session.user=user;  //把登录成功的对象写入session
       user.id=users.length+1;
       user.petname=user.phone;
       //lStorage.setItem('user',JSON.stringify(user));
       res.json({code:0,success:'登录成功！',user});
   }else {
       res.json({code:1,error:'手机号或密码错误！'})
   }

});

//验证登录态，如果已经登录则返回登录的用户并存放在仓库里
app.get('/validate',function (req,res) {
    if(req.session.user){
        res.json({
            code:0,user:req.session.user
        })
    }else {
        res.json({code:1});
    }
});

//退出登录 退出时code为1 并且跳转到首页
app.get('/signout',function (req,res) {
   req.session.user='';
   res.json({code:1});
    //console.log(9000000);
});

app.listen(3000,function () {
    console.log("端口 3000")
});


//获取课程包优选课程列表数据
let lessonsPrefer=require('./mock/lessons-prefer');
app.get('/lessonPrefer',function(req,res){
    res.json(lessonsPrefer);
    //console.log(lessonsPrefer);
});


//获取教程列表详情页数据
let detailList=require('./mock/detailList.json');


app.post('/detail',function(req,res){
    console.log(req.body);//{index:0}

    let newDetailList=detailList['detailList'].find((item,index)=>{
        return item.id===req.body.index+1;
    });
    console.log(newDetailList);
    res.json(newDetailList);

});
app.post('/works',function (req, res) {
    console.log(req.body);

});

//获取其他用户的信息
app.post('/getOthers',function (req,res) {
    let user=req.body;
    console.log(user);
    console.log(users);
    let current=users.find(item=>item.id===user.id);
    console.log(current);
    if(current){
        res.json(current);
    }else {
        res.json({});
    }

});

app.get("/user",function (req,res) {
    console.log(req);
    let tt=users.find(item=>item.id==req.body.match.params.id);
    res.json(tt);
    console.log(tt);
});
