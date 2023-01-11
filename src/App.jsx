import './App.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/content'

export class App extends Component {
  render() {
    return (
      <fieldset>
        <legend>App</legend>
        <Header />
        <div className="container">
          <Content>
             
          </Content>
        </div>
      </fieldset>
    )
  }
}

export default App;