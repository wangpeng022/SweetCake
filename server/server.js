let express = require("express");
let bodyParser = require('body-parser');
let app = express();
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

let HList = require("./mock/HList");
//获取星级食物列表
let food = require("./mock/food.json");
//获取搜索选项
let search = require("./mock/search.json");
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

let Lesson = require("./mock/Lesson");

//获取列表页课程数据
app.get('/lesson', function (req, res) {
    res.json(Lesson);
    //console.log(Lesson);
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
app.listen(3000,function () {
    console.log("端口 3000")
});


let lessonsPrefer=require('./mock/lessons-prefer');
//获取课程包优选课程列表数据
app.get('/lessonPrefer',function(req,res){
    res.json(lessonsPrefer);
    console.log(lessonsPrefer);
});



app.listen(3000);
