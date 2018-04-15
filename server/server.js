var express =  require('express'),
    path = require('path'),
    app = express(),
//Routes
    articles = require('./routes/articles');

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
})

app.use('/articles', articles);

app.listen(3000, function() {
    console.log('server is listening at port 3000')
})
