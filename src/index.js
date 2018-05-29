import React from "react";
import { render } from "react-dom";
import marked from "marked";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: null
    };
  }
  handleEvent() {
    this.setState({
      marked: this.textArea.value
    });
  }
  render() {
    let html = marked(this.state.marked || "");
    console.log(this.preView);
    return (
      <div className="wrapper">
        <textarea
          className="type-box"
          onKeyUp={() => this.handleEvent()}
          ref={node => (this.textArea = node)}
        />
        <div className="view-box" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
