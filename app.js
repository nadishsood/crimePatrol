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
    request('http://localhost:8080/map/INDIA', function (error, response, body) {

    if(error){
      res.send(error);
    }else{
       
    let result = JSON.parse(body);

    console.log(result);


    // TOTAL CRIMES //
    let totalCrime = result.crimePerYear;
    totalCrime.sort((a, b)=> (a.year > b.year) ? 1 : -1);
  
    let arrTotalCrimeYears = [];
    let arrTotalCrimeNo = [];
  
    totalCrime.forEach((item)=>{
      arrTotalCrimeYears.push(item.year);
      arrTotalCrimeNo.push(item.noCrime);
    });
  
  
  
    // POLICE //  
    //police strength
  
    let policeStrengthData = result.pspy;
  
  
    policeStrengthData.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
    let arrPoliceSthYears = [];
    let appPoliceSthNo = [];
  
    policeStrengthData.forEach((item)=>{
      arrPoliceSthYears.push(item.year);
      appPoliceSthNo.push(item.noCrime);
    });
  
    //police injuries and deaths
  
      let pInjuriesData = result.pidpy;
      pInjuriesData.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
      let arrPoliceIYears = [];
      let arrPoliceINo = [];
  
      pInjuriesData.forEach((item)=>{
        arrPoliceIYears.push(item.year);
        arrPoliceINo.push(item.noCrime);
      });
    
    
      
  
  
      /// WOMEN //
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
  
    // CHILDREN //
    let crimeChildren = result.cacpy;
    crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
    
    let arrChildYears = [];
    let arrChildCrime = [];
    
    crimeChildren.forEach((item)=>{
      arrChildYears.push(item.year);
      arrChildCrime.push(item.noCrime);
    });



    res.render('india', {arrTotalCrimeYears,arrTotalCrimeNo, arrPoliceSthYears, appPoliceSthNo, arrPoliceIYears, arrPoliceINo,
    arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime});

  }



  
  });
});

app.use('/state/:stateName/:c1/:c2/:c3', (req, res)=>{ 


  // console.log(req.body);
  // console.log(req.params);

  // if(req.body.states){
  // let state = req.body.states.toUpperCase();
  // }
  let state;
  console.log(req.params.stateName);
  if(req.params.stateName == 's'){
    state = req.body.states.toUpperCase();
  }else{
    state = req.params.stateName;
  }

  console.log(state);



  request(`http://localhost:8080/map/${state}`, function (error, response, body) {


  let result = JSON.parse(body);

  //stateName

  let state = (result.name).toUpperCase();


  // TOTAL CRIMES //
  let totalStateCrime = result.crimePerYear;
  totalStateCrime.sort((a, b)=> (a.year > b.year) ? 1 : -1);

  let arrTotalCrimeYears = [];
  let arrTotalCrimeNo = [];

  totalStateCrime.forEach((item)=>{
    arrTotalCrimeYears.push(item.year);
    arrTotalCrimeNo.push(item.noCrime);
  });



  // POLICE //  
  //police strength

  let policeStrengthData = result.pspy;


  policeStrengthData.sort((a, b) => (a.year > b.year) ? 1 : -1);

  let arrPoliceSthYears = [];
  let appPoliceSthNo = [];

  policeStrengthData.forEach((item)=>{
    arrPoliceSthYears.push(item.year);
    appPoliceSthNo.push(item.noCrime);
  });

  //police injuries and deaths

    let pInjuriesData = result.pidpy;
    pInjuriesData.sort((a, b) => (a.year > b.year) ? 1 : -1);

    let arrPoliceIYears = [];
    let arrPoliceINo = [];

    pInjuriesData.forEach((item)=>{
      arrPoliceIYears.push(item.year);
      arrPoliceINo.push(item.noCrime);
    });
  
  
    


    /// WOMEN //
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

  // CHILDREN //
  let crimeChildren = result.cacpy;
  crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
  let arrChildYears = [];
  let arrChildCrime = [];
  
  crimeChildren.forEach((item)=>{
    arrChildYears.push(item.year);
    arrChildCrime.push(item.noCrime);
  });

  // console.log(arrChildCrime);



  // RENDER THE PAGE //
  res.render('state', {state, arrWomenYears, arrWomenCrime, arrChildYears, arrChildCrime, arrTotalCrimeYears, arrTotalCrimeNo, arrPoliceSthYears, appPoliceSthNo, arrPoliceIYears, arrPoliceINo });

  
 });


});

// app.get('/state/:stateName/:c1/:c2/:c3', (req, res)=>{ 
    
//     let result = req.params;
//     let stateName = req.params.stateName;
//     // console.log(stateName);

//     request(`http://localhost:8080/map/${stateName}`, function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.

//   let result = JSON.parse(body);
//   let crimeWomen = result.cawpy;
//   crimeWomen.sort((a, b) => (a.year > b.year) ? 1 : -1);

  
//   let arrWomenYears = [];
//   let arrWomenCrime = [];
  
//   crimeWomen.forEach((item)=>{
//     arrWomenYears.push(item.year);
//     arrWomenCrime.push(item.noCrime);
//   });
  
//   // console.log(arrWomenYears);
//   // console.log(arrWomenCrime);
  
//   let crimeChildren = result.cacpy;
//   crimeChildren.sort((a, b) => (a.year > b.year) ? 1 : -1);
  
//   let arrChildYears = [];
//   let arrChildCrime = [];
  
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

app.listen(3000, ()=>{ 
    console.log('Server has started on port 3000!');
});