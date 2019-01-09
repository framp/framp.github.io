import { Component } from "preact";

export default class Snake extends Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.setCanvasRef = element => {
      this.canvas = element;
    };
  }
  componentDidMount() {
    const ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, 300, 300);
    ctx.fillRect(0, 0, 100, 100);
  }
  render() {
    return <canvas ref={this.setCanvasRef} width={300} height={300} />;
  }
}
