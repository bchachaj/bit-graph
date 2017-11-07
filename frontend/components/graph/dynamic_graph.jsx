import React from 'react';
import * as d3 from "d3";
import {event as currentEvent} from 'd3';

class DynamicGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let {graphData} = this.props;
    if (!graphData) {
      return null;
    }
    const margin = {
        top: 30,
        right: 20,
        bottom: 60,
        left: 60
      },
      width = 870 - margin.left - margin.right,
      height = 530 - margin.top - margin.bottom;

    graphData.map((d) => {
      d.y = d.coin_price;
      d.x = graphData.indexOf(d) + 1;
    });

    const x = d3.scale.linear().range([0, width]);

    const y = d3.scale.linear().range([height, 0]);

    const xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5);

    const yAxis = d3.svg.axis().scale(y).orient("left").ticks(8);

    const graphLine = d3.svg.line().x(function(d) {
      return x(d.x);
    }).y(function(d) {
      return y(d.y);
    });

    const div = d3.select("body")
                  .append("div")
                  .attr("class", "active-tooltip")
                  .style("opacity", 0);
    const selected = d3.select("#d-visualisation")
                       .selectAll('svg');
    selected.data(graphData).remove();

    const svg = d3.select("#d-visualisation")
                  .append("svg").attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const upperBound = parseFloat(d3.max(graphData.map((d) => {
      return d.y;
    })));
    const lowerBound = parseFloat(d3.min(graphData.map((d) => {
      return d.y;
    })));
    x.domain([
      1,
      d3.max(graphData.map((d) => {
        return d.x;
      }))
    ]);
    y.domain([
      (lowerBound / 1.3),
      (upperBound + (upperBound / 5))
    ]);

    const area = d3.svg.area().x(function(d) { return x(d.x);})
                    .y0(height)
                    .y1(function(d) { return y(d.y);});

    svg.append("path").datum(graphData)
                      .attr("class", "active-area")
                      .attr("d", area);

    svg.append("path").attr("class", "active-line")
                      .attr("d", graphLine(graphData));

    svg.append("text").attr("x", width / 2)
                      .attr("y", height + margin.bottom)
                      .style("text-anchor", "middle")
                      .text("Hours");

    //On hover show item detail
    svg.selectAll("dot").data(graphData)
                        .enter()
                        .append("circle")
                        .attr("r", 5)
                        .attr("cx", function(d) {
                            return x(d.x);
                        }).attr("cy", function(d) {
                            return y(parseFloat(d.y));
                        }).on("mouseover", function(d) {
                          div.transition().duration(200).style("opacity", .9);

    div.html(`<p class="active-read">$${parseFloat(d.coin_price).toFixed(2)}</p>`)
        .style("left", (currentEvent.pageX) + "px")
        .style("top", (currentEvent.pageY - 68) + "px");})
        .on("mouseout", function(d) {
                            div.transition()
                                .duration(200)
                                .style("opacity", 0);});

    svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "y axis").call(yAxis);

    return (
      <div className="graph">
        <h1>Bitcoin Price Index: Last 24 Hours</h1>
        <svg id="d-visualisation" width="870" height="630"></svg>
      </div>
    );
  }

}

export default DynamicGraph;
