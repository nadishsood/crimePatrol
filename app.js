const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios');


const port = process.env.PORT ||  3000;



app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('homepage');
});


var crimeNameIndia;
app.use('/india/:c1/:c2/:c3', (req, res)=>{
    // send a request to the api by passing in the values from the url
    // get the data back 
    // send the data to the appropriate page and use it there

    console.log(req.body);

    if(req.body.crimeIndia){
      crimeNameIndia = req.body.crimeIndia.toUpperCase();
    }



    request('http://localhost:8080/map/INDIA', function (error, response, body) {

    if(error){
      res.send(error);
    }else{
       
    var result = JSON.parse(body);
    console.log(result);

    // console.log(result);


    // TOTAL CRIMES //
    var totalCrime = result.crimePerYear;
    totalCrime.sort((a, b)=> (a.year > b.year) ? 1 : -1);
  
    var arrTotalCrimeYears = [];
    var arrTotalCrimeNo = [];
  
    totalCrime.forEach((item)=>{
      arrTotalCrimeYears.push(item.year);
      arrTotalCrimeNo.push(item.noCrime);
    });
  
  
  
    // POLICE //  
    //police strength
  
    var policeStrengthData = result.pspy;
  
  
    policeStrengthData.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
    var arrPoliceSthYears = [];
    var appPoliceSthNo = [];
  
    policeStrengthData.forEach((item)=>{
      arrPoliceSthYears.push(item.year);
      appPoliceSthNo.push(item.noCrime);
    });
  
    //police injuries and deaths
  
      var pInjuriesData = result.pidpy;
      pInjuriesData.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
      var arrPoliceIYears = [];
      var arrPoliceINo = [];
  
      pInjuriesData.forEach((item)=>{
        arrPoliceIYears.push(item.year);
        arrPoliceINo.push(item.noCrime);
      });
    
    
      
  
  
      /// WOMEN //
    var crimeWomen = result.cawpy;
    crimeWomen.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
    
    var arrWomenYears = [];
    var arrWomenCrime = [];
    
    crimeWomen.forEach((item)=>{
      arrWomenYears.push(item.year);
      arrWomenCrime.push(item.noCrime);
    });
    
    // console.log(arrWomenYears);
    // console.log(arrWomenCrime);
  
    // CHILDREN //
    var crimeChildren = result.cacpy;
    crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
    
    var arrChildYears = [];
    var arrChildCrime = [];
    
    crimeChildren.forEach((item)=>{
      arrChildYears.push(item.year);
      arrChildCrime.push(item.noCrime);
    });



    

  }



  request(`http://localhost:8080/map/INDIA/${crimeNameIndia}`, function (error, response, body){


    console.log(crimeNameIndia);
    var crimeDataYearsIndia = [];
    var crimeDataDataIndia = [];

  console.log(body);
    var indiaCrimeData = JSON.parse(body);

    indiaCrimeData.sort((a, b)=> (a.year > b.year) ? 1: -1);


 

    indiaCrimeData.forEach((item)=>{
      crimeDataYearsIndia.push(item.year);
      crimeDataDataIndia.push(item.noCrime);
      
    });



    res.render('india', {crimeNameIndia, crimeDataYearsIndia
      ,crimeDataDataIndia, state, arrWomenYears, arrWomenCrime, 
      arrChildYears, arrChildCrime, arrTotalCrimeYears, 
      arrTotalCrimeNo, arrPoliceSthYears, appPoliceSthNo, 
      arrPoliceIYears, arrPoliceINo });
});
});
});



var state;
var crimeName;

app.use('/state/:stateName/:c1/:c2/:c3', (req, res)=>{

  var arrWomenYears = [];
  var arrWomenCrime = [];


  var arrTotalCrimeYears = [];
  var arrTotalCrimeNo = [];


  var arrPoliceSthYears = [];
  var appPoliceSthNo = [];


  var arrPoliceIYears = [];
  var arrPoliceINo = [];


  var arrChildYears = [];
  var arrChildCrime = [];

  var crimeDataYears = [];
  var crimeDataData = [];

      if(req.body.states){
        state = req.body.states.toUpperCase();
      }else{

        crimeName = req.body.crimeName.toUpperCase();
      }

      


      console.log('hi');
      console.log(state);
      console.log(crimeName);

      // const promise1 = axios.get("http://localhost:8080/map/${state}");
      // const promise2 = axios.get("http://localhost:8080/map/${state}/${crimeName}");

      // Promise.all([promise1, promise2]).then(function(values) {
      //   // console.log(values);
        


      // });

      axios.get(`http://localhost:8080/map/${state}`).then((result)=>{

      
        console.log("body1", result.data);
        //stateName
        
          var state = (result.data.name).toUpperCase();
        
          // TOTAL CRIMES //
          var totalStateCrime = result.data.crimePerYear;
          totalStateCrime.sort((a, b)=> (a.year > b.year) ? 1 : -1);
        
         totalStateCrime.forEach((item)=>{
            arrTotalCrimeYears.push(item.year);
            arrTotalCrimeNo.push(item.noCrime);
          });
          
        // POLICE //  
          //police strength
        
          var policeStrengthData = result.data.pspy;
        
        
          policeStrengthData.sort((a, b) => (a.year > b.year) ? 1 : -1);
        
         policeStrengthData.forEach((item)=>{
            arrPoliceSthYears.push(item.year);
            appPoliceSthNo.push(item.noCrime);
          });
        
          //police injuries and deaths
        
            var pInjuriesData = result.data.pidpy;
            pInjuriesData.sort((a, b) => (a.year > b.year) ? 1 : -1);
        
            pInjuriesData.forEach((item)=>{
              arrPoliceIYears.push(item.year);
              arrPoliceINo.push(item.noCrime);
            });
          
          
        /// WOMEN //
          var crimeWomen = result.data.cawpy;
          crimeWomen.sort((a, b) => (a.year > b.year) ? 1 : -1);
        
        crimeWomen.forEach((item)=>{
            arrWomenYears.push(item.year);
            arrWomenCrime.push(item.noCrime);
          });
          
          // console.log(arrWomenYears);
          // console.log(arrWomenCrime);
        
          // CHILDREN //
          var crimeChildren = result.data.cacpy;
          crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
          
         
        crimeChildren.forEach((item)=>{
            arrChildYears.push(item.year);
            arrChildCrime.push(item.noCrime);
          });


    axios.get(`http://localhost:8080/map/${state}/${crimeName}`).then((result)=>{

          console.log(crimeName);

          var crimeData = (result.data);
      
          console.log(crimeData);
        
        
        
          crimeData.sort((a,b) => (a.year>b.year) ? 1 : -1 );
        
        
        
          crimeData.forEach((item)=>{
            crimeDataYears.push(item.year);
            crimeDataData.push(item.noCrime);
            
          });

          res.render('state', {crimeName, crimeDataYears,crimeDataData, state, arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime, arrTotalCrimeYears, arrTotalCrimeNo, arrPoliceSthYears, appPoliceSthNo, arrPoliceIYears, arrPoliceINo });
    
    })
    //   res.render('state', {arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime });
 }).catch((e)=>{
      console.log(e);
    });


});




app.get('/trends', (req, res)=>{ 

  axios.get('http://localhost:8080/complex').then((result)=>{

    // console.log(result.data);

    let query1 = result.data.jp;
    
    query1.sort((a,b) => (a.year>b.year) ? 1 : -1);

    let query11= query1.slice(0, query1.length/2);
    let query22 = query1.slice(query1.length/2);
    

    let query2 = result.data.cgList;

    let query3 = result.data.dc;

    let query4 = result.data.ps;

    let query5 = result.data.tpp10;

    console.log(query5);

    res.render('trends', {query11, query22, query2, query3, query4, query5});



    // "name": "GUJARAT",
    //         "crimes": 163628,
    //         "casualties": 515,
    //         "retirement"

  


  })



})


// app.use('/state/:sName', (req, res)=>{

// });


app.listen(port, ()=>{ 
    console.log('Server has started on port 3000!');
});