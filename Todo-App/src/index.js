import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Todo extends React.Component {
  constructor() {
    super()
    this.setText = this.setText.bind(this);
    this.state = {
      list: [],
      word: ""
    }

  }

  
  setText(input) {
    this.setState({ word: input.target.value });
  }

  display(tasks){
    this.state.list.push(tasks)
  }

  

  render() {
    return (
      <div className="list">
        <input onChange={this.setText} value={this.state.word} />
        <button onClick={this.display(this.state.word)}>add item</button>
        
      </div>
    );
  }
}

ReactDOM.render(<Todo />,document.getElementById('root'));
