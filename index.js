data = [
  {
    id: "before1",
    x: 50,
    y: 25,
    r: 25,
    c: "red"
  },
  {
    id: "before2",
    x: 150,
    y: 50,
    r: 25,
    c: "green"
  },
  {
    id: "before3",
    x: 250,
    y: 75,
    r: 25,
    c: "blue"
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

    data = [
        {
            id: "before1",
            x: 50,
            y: 25,
            r: 25,
            c: "red"
        },
        {
            id: "before2",
            x: 150,
            y: 50,
            r: 25,
            c: "green"
        },
        {
            id: "before3",
            x: 250,
            y: 75,
            r: 25,
            c: "blue"
        }
    ];

    var circles = canvas
        .selectAll('circle')
        .data(data, function (d) {
            return d.id;
        });

    circles
        .enter()
        .append('circle')
        .transition()
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
        })
        .each('end', function (d) {
            // transition 2:
            d3.select(this)
                .transition()
                .attr('r', function (d) {
                    return d.r;
                });
        });
        
    circles
        .exit()
        .remove();
};