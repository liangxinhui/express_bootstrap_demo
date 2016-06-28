var express = require('express')
  
var app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))


Date.prototype.Format = function (fmt) { //author: meizz 
var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
};
if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
for (var k in o)
if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
return fmt;
}

var GetNowTime = function(){
	return new Date().Format("yyyy-MM-dd hh:mm:ss");
}


app.get('/', function(req, res) {
	res.render("index", {'time':GetNowTime()});
})


var myport = process.env.PORT || 80;
console.log('Port  :'+ myport);
app.listen(myport);



