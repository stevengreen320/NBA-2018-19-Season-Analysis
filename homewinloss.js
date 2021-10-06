$(document).ready(function() {
    
    // d3 CSV
    let url = "teams_city.csv";
    d3.csv(url).then(function(data) {
        console.log(data);

        data.forEach(function(row) {
            row.HOME_TEAM_WINS = +row.HOME_TEAM_WINS;
            row.HOME_TEAM_LOSS = +row.HOME_TEAM_LOSS;
        });

    // Trace1 for the Greek Data
    let trace1 = {
        "x": data.map(x=> x.NICKNAME),
        "y": data.map(x=> x.HOME_TEAM_WINS),
        name: " Home Team Wins",
        "type": 'bar',
        marker: {
            color: "green"

        }
    }

    // Trace 2 for the Roman Data
    let trace2 = {
        "x": data.map(x=> x.NICKNAME),
        "y": data.map(x=> x.HOME_TEAM_LOSS),
        name: " Home Team loses",
        "type": 'bar',
        marker: {
            color: "gray"
        }
    };

    // Create data array
    let data_arr = [trace1, trace2];

    // Apply a title to the layout
    let layout = {
        title: "Home Team Wins vs Home Team loses",
        barmode: 'group'
    };

    // Render the plot to the div tag with id "plot"
    Plotly.newPlot('plot', data_arr, layout);

});
});