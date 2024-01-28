import { Component, ReactNode } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render(): ReactNode {
    return <div>Hi there!</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
