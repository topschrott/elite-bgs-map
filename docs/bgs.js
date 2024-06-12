d3.json('bgs.json', function(faction_data){

    var colors = [
        '#1f77b4',  // muted blue
        '#ff7f0e',  // safety orange
        '#2ca02c',  // cooked asparagus green
        '#d62728',  // brick red
        '#9467bd',  // muted purple
        '#8c564b',  // chestnut brown
        '#e377c2',  // raspberry yogurt pink
        '#7f7f7f',  // middle gray
        '#bcbd22',  // curry yellow-green
        '#17becf'   // blue-teal
    ]

    function to_scatter3d(faction, idx) {
        return {
            x: faction.x,
            y: faction.y,
            z: faction.z,
            text: faction.text,
            name: faction.name,
            mode: 'markers',
            type: 'scatter3d',
            marker: {
                opacity: 0.6,
                size: 4,
                color: colors[idx % colors.length]
            },
            hoverinfo: 'name+text'
        }
    }

    function to_mesh3d(faction, idx) {
        return {
            x: faction.x,
            y: faction.y,
            z: faction.z,
            text: faction.text,
            name: faction.name,
            type: 'mesh3d',
            mode: 'markers+text',
            alphahull: 7,
            opacity: 0.1,
            hoverinfo: 'name+text',
            color: colors[idx % colors.length],
            showlegend: false,
        }
    }

    var data = [].concat(
        faction_data.map(to_mesh3d),
        faction_data.map(to_scatter3d)
    )

    var layout = {
        title: {
            text: "Intergalactic Hitchhiker's Coalition",
            font: {
                color: '#dddddd'
            }
        },
        legend: {
            font: {
                color: '#eeeeee'
            }
        },
        autosize: true,
        height: 900,
        paper_bgcolor: '#000000',
        hovermode: 'closest',
        scene: {
            aspectratio: {
                x: 1,
                y: 1,
                z: 1
            },
            camera: {
                center: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                eye: {
                    x: 1.25,
                    y: 1.25,
                    z: 1.25
                },
                up: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            },
            xaxis: {
                type: 'linear',
                zeroline: false,
                showticklabels: false,
                title: { text: '' },
                color: '#dddddd',
            },
            yaxis: {
                type: 'linear',
                zeroline: false,
                showticklabels: false,
                title: { text: '' },
                color: '#dddddd',
            },
            zaxis: {
                type: 'linear',
                zeroline: false,
                showticklabels: false,
                title: { text: '' },
                color: '#dddddd',
            }
        }
    };

    Plotly.newPlot('bgs-map', data, layout);

});

