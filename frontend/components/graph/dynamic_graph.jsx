import React from 'react';
import * as d3 from "d3";
import {event as currentEvent} from 'd3';

class DynamicGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let {graphData} = this.props;

    if(!graphData) {
      return null;
    }
    const margin = {
        top: 30,
        right: 20,
        bottom: 30,
        left: 60
      },
      width = 1550 - margin.left - margin.right,
      height = 530 - margin.top - margin.bottom;

      var x = d3.scale.linear()
          .domain([0, d3.max(graphData, function(d){ return d.x; })])
          .range([0, width]);

      var y = d3.scale.linear()
          .domain([2000, d3.max(graphData, function(d){ return d.y; })])
          .range([height, 0]);

    const xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(10);

    const yAxis = d3.svg.axis().scale(y).orient("left").ticks(10);

    const graphLine = d3.svg.line().x(function(d) {
      return x(d.x);
    }).y(function(d) {
      return y(d.y);
    });

    const div = d3.select("body")
                  .append("div").attr("class", "tooltip")
                  .style("opacity", 0);

    const svg = d3.select("#d-visualisation")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      x.domain(d3.extent(graphData, function(d) {
        return d.x;
      }));
      y.domain([
        0,
        d3.max(graphData, function(d) {
          return d.y;
        })
      ]);

      let area = d3.svg.area()
    .x(function(d) { return x(d.x); })
    .y0(height)
    .y1(function(d) { return y(d.y); });

    svg.append("path")
        .datum(graphData)
        .attr("class", "area")
        .attr("d", area);

      svg.append("path").attr("class", "line").attr("d", graphLine(graphData));


      //On hover show item detail

      svg.selectAll("dot").data(graphData)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("cx", function(d) {
        return x(d.x);
      }).attr("cy", function(d) {
        return y(d.y);
      }).on("mouseover", function(d) {
        div.transition()
            .duration(200)
            .style("opacity", .9);
        div.html(`<p>${d.d}, ${d.p}</p>`)
            .style("left", (currentEvent.pageX) + "px")
            .style("top", (currentEvent.pageY - 68) + "px");
      }).on("mouseout", function(d) {
        div.transition()
            .duration(200)
            .style("opacity", 0);
      });

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);
      svg.append("g").attr("class", "y axis").call(yAxis);

    return (
      <div>
        <h1>Active Index Price: Last 3 Hours</h1>
        <svg id="d-visualisation" width="1550" height="530"></svg>
      </div>
    );
  }

}

export default DynamicGraph;
