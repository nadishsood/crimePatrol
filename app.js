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

app.get('/india/:c1/:c2/:c3', (req, res)=>{
    // send a request to the api by passing in the values from the url
    // get the data back 
    // send the data to the appropriate page and use it there
    request('http://localhost:8080/map/INDIA', function (error, response, body) {

    if(error){
      res.send(error);
    }else{
       
    var result = JSON.parse(body);

    console.log(result);


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
    
    console.log(arrWomenYears);
    console.log(arrWomenCrime);
  
    // CHILDREN //
    var crimeChildren = result.cacpy;
    crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
    
    var arrChildYears = [];
    var arrChildCrime = [];
    
    crimeChildren.forEach((item)=>{
      arrChildYears.push(item.year);
      arrChildCrime.push(item.noCrime);
    });



    res.render('india', {arrTotalCrimeYears,arrTotalCrimeNo, arrPoliceSthYears, appPoliceSthNo, arrPoliceIYears, arrPoliceINo,
    arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime});

  }



  
  });
});

// var state;
// var crimeName;

// app.use('/state/:stateName/:c1/:c2/:c3', (req, res)=>{ 


//   var arrWomenYears = [];
//   var arrWomenCrime = [];


//   var arrTotalCrimeYears = [];
//   var arrTotalCrimeNo = [];


//   var arrPoliceSthYears = [];
//   var appPoliceSthNo = [];


//   var arrPoliceIYears = [];
//   var arrPoliceINo = [];


//   var arrChildYears = [];
//   var arrChildCrime = [];

//   var crimeDataYears = [];
//   var crimeDataData = [];


//   // console.log(req.body);
//   // console.log(req.params);

//   // if(req.body.states){
//   // var state = req.body.states.toUpperCase();
//   // }
//   // console.log(req.body);
//   // console.log(req.params.stateName);
//   // if(req.params.stateName == 's'){
//   //   state = req.body.states.toUpperCase();
//   // }else{
//   //   state = req.params.stateName;
//   // }


//   //if state undefined && req.body.states -> state = req.body.states
//   // else -> {
//     // crime = get crime from body
//   // }


//   if(req.body.states){
//     state = req.body.states.toUpperCase();
//   }else{
//     crimeName = req.body.crimeName.toUpperCase();
//   }



//   request(`http://localhost:8080/map/${state}`, function (error, response, body) {



//   var result = JSON.parse(body);
//   console.log("body1", body);

//   //stateName

//   var state = (result.name).toUpperCase();


//   // TOTAL CRIMES //
//   var totalStateCrime = result.crimePerYear;
//   totalStateCrime.sort((a, b)=> (a.year > b.year) ? 1 : -1);



//   totalStateCrime.forEach((item)=>{
//     arrTotalCrimeYears.push(item.year);
//     arrTotalCrimeNo.push(item.noCrime);
//   });



//   // POLICE //  
//   //police strength

//   var policeStrengthData = result.pspy;


//   policeStrengthData.sort((a, b) => (a.year > b.year) ? 1 : -1);

 

//   policeStrengthData.forEach((item)=>{
//     arrPoliceSthYears.push(item.year);
//     appPoliceSthNo.push(item.noCrime);
//   });

//   //police injuries and deaths

//     var pInjuriesData = result.pidpy;
//     pInjuriesData.sort((a, b) => (a.year > b.year) ? 1 : -1);

   

//     pInjuriesData.forEach((item)=>{
//       arrPoliceIYears.push(item.year);
//       arrPoliceINo.push(item.noCrime);
//     });
  
  
    


//     /// WOMEN //
//   var crimeWomen = result.cawpy;
//   crimeWomen.sort((a, b) => (a.year > b.year) ? 1 : -1);

  
 
  
//   crimeWomen.forEach((item)=>{
//     arrWomenYears.push(item.year);
//     arrWomenCrime.push(item.noCrime);
//   });
  
//   // console.log(arrWomenYears);
//   // console.log(arrWomenCrime);

//   // CHILDREN //
//   var crimeChildren = result.cacpy;
//   crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
 
  
//   crimeChildren.forEach((item)=>{
//     arrChildYears.push(item.year);
//     arrChildCrime.push(item.noCrime);
//   });
//   console.log(arrChildCrime);
 

//   request(`http://localhost:8080/map/${state}/${crimeName}`, function (error, response, body) { 
    
//   console.log(crimeName);

//     var crimeData = JSON.parse(body);

//     console.log(crimeData);
  
  
  
//     crimeData.sort((a,b) => (a.year>b.year) ? 1 : -1 );
  
  
  
//     // crimeData.forEach((item)=>{
//     //   crimeDataYears.push(item.year);
//     //   crimeDataData.push(item.noCrime);
      
//     // });

//     crimeDataYears = crimeData;
//     console.log(crimeDataData);
//     // console.log("crimeName", crimeName);
//     //   console.log(crimeDataYears);
//     //   console.log(crimeDataData);

//     res.render('state', {crimeDataYears, crimeDataData, state, arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime, arrTotalCrimeYears, arrTotalCrimeNo, arrPoliceSthYears, appPoliceSthNo, arrPoliceIYears, arrPoliceINo });

    
  
//   });

//   // RENDER THE PAGE //

// });









// });

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

// app.get('/state/:stateName/:c1/:c2/:c3', (req, res)=>{ 
    
//     var result = req.params;
//     var stateName = req.params.stateName;
//     // console.log(stateName);

//     request(`http://localhost:8080/map/${stateName}`, function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.

//   var result = JSON.parse(body);
//   var crimeWomen = result.cawpy;
//   crimeWomen.sort((a, b) => (a.year > b.year) ? 1 : -1);

  
//   var arrWomenYears = [];
//   var arrWomenCrime = [];
  
//   crimeWomen.forEach((item)=>{
//     arrWomenYears.push(item.year);
//     arrWomenCrime.push(item.noCrime);
//   });
  
//   // console.log(arrWomenYears);
//   // console.log(arrWomenCrime);
  
//   var crimeChildren = result.cacpy;
//   crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
//   var arrChildYears = [];
//   var arrChildCrime = [];
  
//   crimeChildren.forEach((item)=>{
//     arrChildYears.push(item.year);
//     arrChildCrime.push(item.noCrime);
//   });

//   res.render('state', {arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime });

  
//  });


// });


app.get('/rankings/:yr/:ca/:cr', (req, res)=>{ 
    res.render('rankings');

})

app.listen(port, ()=>{ 
    console.log('Server has started on port 3000!');
});