import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
	  console.error('this is test') // 输出错误
    return(
      <div className="App">
        <h1> Hello, Shellcoochi1! </h1>
      </div>
    );
  }
}

export default hot(module)(App);;