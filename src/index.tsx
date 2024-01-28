import { Component, ReactNode } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  greet: string
}

class App extends Component<AppProps> {
  render(): ReactNode {
    return <div>{this.props.greet}</div>
  }
}

ReactDOM.render(<App greet="Hi there!" />, document.querySelector("#root"))
