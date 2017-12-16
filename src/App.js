import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Business Website",
          category: 'Web Design'
        },
        {
          title: "Social App",
          category: 'Web Design'
        },
        {
          title: "Ecommerce Shopping Cart",
          category: 'Web Developement'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
