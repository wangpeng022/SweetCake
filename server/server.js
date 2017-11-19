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
    console.log(HList)
});
app.get('/star', function (req, res) {
    console.log(req.query);
    res.json(food[req.query.index]);
});
app.get('/search', function (req, res) {
    res.json(search);
});
app.listen(3000);