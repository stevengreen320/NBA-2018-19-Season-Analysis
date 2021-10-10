$(document).ready(function() {

    // d3 CSV
    let url2 = "ppp_player_mean.csv";
    d3.csv(url2).then(function(data) {
        console.log(data);

        data.forEach(function(row) {
            row.PPP = +row.PPP;
            row.GAME_COUNT = +row.GAME_COUNT;
        });


        var traces3 = [{
            "x": data.map(x => x.PLAYER_NAME),
            "y": data.map(x => x.PPP),
            "type": 'bar'

        }];

        var layout3 = {
            "title": `Player Points Per Possession`,
            yaxis: {
                title: {
                    text: "PPP"
                }
            }
        }

        Plotly.newPlot('bar3', traces3, layout3);

    });
});