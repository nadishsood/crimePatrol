$(document).ready(function(){


    var ctx = document.getElementById('myChart1').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['AP', 'AR', 'AS', 'BR', 'CT', 'GA', 'GJ',  'HR',  'HP',  'JK',  'JH', 'KA', 
                        'KL', 'MP', 'MH', 'MN', 'ML', 'MZ',  'NL',  'OR',  'PB',  'RJ', 
                        'SK', 'TN', 'TG', 'TR', 'UT', 'UP', 'WB',  'AN',  'CH',  'DN',  'DD',
                        'DL', 'LD', 'PY'],


            datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3, 0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3, 0, 10, 5, 2, 10, 30, 45, 3, 44, 10, 30, 10, 5, 2, 20]
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
            labels: ['AP', 'AR', 'AS', 'BR', 'CT', 'GA', 'GJ',  'HR',  'HP',  'JK',  'JH', 'KA', 
            'KL', 'MP', 'MH', 'MN', 'ML', 'MZ',  'NL',  'OR',  'PB',  'RJ', 
            'SK', 'TN', 'TG', 'TR', 'UT', 'UP', 'WB',  'AN',  'CH',  'DN',  'DD',
            'DL', 'LD', 'PY'],
                datasets: [{
                label: 'Total Crimes Commited',
                // backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3, 0, 10, 5, 2, 20, 30, 45, 3, 44, 155, 3, 0, 10, 5, 2, 10, 30, 45, 3, 44, 10, 30, 10, 5, 2, 20]
            }]
        },
    
        // Configuration options go here
        options: {}
    }); 
});