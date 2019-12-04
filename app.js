var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


var date = "";
var explanation = "";
var title = "";
var url = "";

app.get('/', function(req, res){
    getData()
    res.render("index", {img:img, year:year, title:title})
});

function getData(){
    fetch('https://csuserversidewebdevfinal.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
        date = data.date;
        explanation = data.explanation;
        title = data.title;
        url = data.url;
    })

}


app.listen(port, function(){

});


