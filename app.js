const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('homepage');
});

app.get('/india/:c1/:c2/:c3', (req, res)=>{
    // send a request to the api by passing in the values from the url
    // get the data back 
    // send the data to the appropriate page and use it there

    res.render('india');
});

app.get('/state/:c1/:c2/:c3', (req, res)=>{ 
    res.render('state');

});


app.get('/rankings/:yr/:ca/:cr', (req, res)=>{ 
    res.render('rankings');

})

app.listen(3000, ()=>{ 
    console.log('Server has started on port 3000!');
});