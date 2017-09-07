var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



var arcticleOne={
heading:'Arcticle One',
title:'  Arcticle One I phaneendra',
date:'sep 5 2017',
content:`  <p>
            This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.
        </p> 
        <p>
            This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.
        </p>
        <p>
            This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.This is the content for my first arcticle.
        </p>`
};
function createTemplate (data){
    var title=data.title;
    var date=data.date ;
    var content=data.content;
    var heading=data.heading;
var htmlTemplate=`<html>
<head>
    <title>
        ${title}
    </title>
    <meta name ="viewport" content="width-device-width,initial scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        <o href="/"></o>
    </div>
    <hr/>
    <h3>
     ${heading}
    </h3>
    <div>
      ${date}
    </div>
    <div>
    ${content}
    </div>
    </div>
</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/arcticle-one",function(req,res){
    res.send(cretetemplate(arcticleOne));
});



app.get("/arcticle-three",function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'arcticle-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
