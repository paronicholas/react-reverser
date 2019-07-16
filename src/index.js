import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const classNumber = Math.floor(Math.random() * 100);

const makeMessage = message => message.toUpperCase();

function Header() {
  return (
    <div>
      <h1>Hello #301d{classNumber}</h1>
    </div>
  );
}

class Reverse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainText: "Reverse Me",
      inputText: ""
    };
    // this.reverseString = this.reverseString.bind(this);
  }
  reverseString = () => {
    const valueToModify = this.state.inputText
      ? this.state.inputText
      : this.state.mainText;
    const reversedValue = valueToModify
      .split("")
      .reverse()
      .join("");

    this.setState({
      mainText: reversedValue,
      inputText: ""
    });
  };

  render() {
    return (
      <section>
        <h3>{this.state.mainText}</h3>
        <input
          value={this.state.inputText}
          onChange={event => {
            this.setState({ inputText: event.target.value });
          }}
        />
        <button onClick={this.reverseString}>Click Me</button>
      </section>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* {[1, 2, 3, 4].map(() => {
        return <Header />;
      })} */}
      <Header />
      <h2>{makeMessage("Hey Ginger")}</h2>
      <Reverse />
      <ul>
        <li>Hey there</li>
        <li>I'm a list</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
