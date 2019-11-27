$(document).ready(function(){

    let goToIndia = function(){
        // location.href = "/india/c1/c2/c3";

        alert('hi');

    }
    let goToState = function(){
        location.href = "/state/c1/c2/c3";

    }
    let goToRankings = function(){
        location.href = "/rankings/yr/ca/cr";

    }


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 


    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 


    var ctx = document.getElementById('myChart3').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Police Injuries',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#3755BE',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }, {
                label: 'Police Deaths',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'yellow',
                data: [32, 33, 5, 4, 20, 55, 45, 3, 12, 9, 30 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 


    var ctx = document.getElementById('myChart4').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Strength of Police',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#3755BE',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 


    var ctx = document.getElementById('myChart5').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Number of Cases Solved',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#3755BE',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 



    var ctx = document.getElementById('myChart6').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#3DC795',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 

    var ctx = document.getElementById('myChart7').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#3DC795',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 

    var ctx = document.getElementById('myChart8').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#FFB102',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 

    var ctx = document.getElementById('myChart9').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007',  '2008',  '2009',  '2010',  '2011'],
            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#FFB102',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3 ]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 
});