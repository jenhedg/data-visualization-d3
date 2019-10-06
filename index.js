data = [
    {
        x: 50,
        y: 25,
        r: 25,
        c: 'red'
    },
    {
        x: 150,
        y: 50,
        r: 25,
        c: 'green'
    },
    {
        x: 250,
        y: 75,
        r: 25,
        c: 'blue'
    }
];

var canvas = d3.select('#canvas');
var circles = canvas.selectAll('circle').data(data);
var button = document.getElementById("button");

circles
    .enter()
    .append('circle')
    .attr('cx', function (d) {
        return d.x;
    })
    .attr('cy', function (d) {
        return d.y;
    })
    .attr('fill', function (d) {
        return d.c;
    })
    .attr('r', function (d) {
        return d.r;
    });

//change the first circle on click
button.onclick = function () {
    // change coordinates of the first circle:
    data[0].x = 50;
    data[0].y = 100;
    data[1].x = 150;
    data[1].y = 100;

    // add a new circle:
    data.push({
        x: 300,
        y: 50,
        r: 15,
        c: 'magenta'
    });

    data.push({
        x: 400,
        y: 70,
        r: 25,
        c: 'lightblue'
    });

    var circles = canvas
        .selectAll('circle')
        .data(data);

    circles
        .enter()
        .append('circle')
        .attr('cx', function (d) {
            return d.x;
        })
        .attr('cy', function (d) {
            return d.y;
        })
        .attr('fill', function (d) {
            return d.c;
        })
        .attr('r', 0)
        // start transition:
        .transition()
        .attr('r', function (d) {
            return d.r;
        });

        // update (x,y) coordinates:
        circles
        .attr('cx', function (d) {
            return d.x;
        })
        .attr('cy', function (d) {
            return d.y;
        });
        
    circles
        .exit()
        .remove();
};