const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var request = require('request');



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


    request('http://localhost:8080/map/PUNJAB', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.

  let result = JSON.parse(body);
  let crimeWomen = result.cawpy;
  crimeWomen.sort((a, b) => (a.year > b.year) ? 1 : -1);

  
  let arrWomenYears = [];
  let arrWomenCrime = [];
  
  crimeWomen.forEach((item)=>{
    arrWomenYears.push(item.year);
    arrWomenCrime.push(item.noCrime);
  });
  
  console.log(arrWomenYears);
  console.log(arrWomenCrime);
  
  let crimeChildren = result.cacpy;
  crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
  let arrChildYears = [];
  let arrChildCrime = [];
  
  crimeChildren.forEach((item)=>{
    arrChildYears.push(item.year);
    arrChildCrime.push(item.noCrime);
  });

  res.render('state', {arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime });

  
 });


});


app.get('/rankings/:yr/:ca/:cr', (req, res)=>{ 
    res.render('rankings');

})

app.listen(3000, ()=>{ 
    console.log('Server has started on port 3000!');
});