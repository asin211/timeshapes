"use strict";
// array consists of different colors with const (using const will not change the values)
const colors = [
  "#77b3d1",
  "#E94F37",
  "#1C89BF",
  "#A1D363",
  "#85FFC7",
  "#297373",
  "#FF8552",
  "#A40E4C",
  "#85AFC0",
  "#296573",
  "#AA8552",
  "#CC0E4C",
  "#567187",
  "#c6c976",
  "#967c64",
  "#e497ed",
  "#d24cff",
  "#e2ceb1",
  "#cc999e",
  "#97bf9a",
];
//setting variable randomRadius value with Math function (will have value between 1 and 100)
let randomRadius = Math.floor(Math.random() * 100) + 1;
//setting size variable (will have value between 1 -125)
let size = Math.floor(Math.random() * 125) + 1;

class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //object (setting different shapes)
      shapeStyle: {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)], // using different colors with Math function (randomly generated color)
        borderRadius: randomRadius,
        height: size,
        width: size,
      },
    };
  }

  // life circle metthod like timer to repeat the task
  componentDidMount() {
    this.timerID = setInterval(() => this.ChangeStyle(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  //Changing style method
  ChangeStyle() {
    randomRadius = Math.floor(Math.random() * 100) + 1;
    size = Math.floor(Math.random() * 125) + 1;

    this.setState({
      shapeStyle: {
        padding: 10,
        margin: 20,
        display: "inline-block",
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        borderRadius: randomRadius,
        height: size,
        width: size,
      },
    });
  }
  render() {
    return <div style={this.state.shapeStyle}></div>;
  }
}

//Array controling components together
let shapes = [];
for (let i = 0; i < 60; i++) {
  shapes.push(<Shape key={i} />); //using method to push the data in a array
}

ReactDOM.render(shapes, document.querySelector(".container"));
