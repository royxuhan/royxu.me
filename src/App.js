// Roy Xu 2020

import React, { Component } from 'react'
import ReactGA from 'react-ga'
import $ from 'jquery'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Artwork from './Components/Artwork'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      resumeData: {}
    }

    ReactGA.initialize('UA-85418667-3')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  // fetch personal data and populate input hash
  getResumeData () {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
      }
    })
  }

  // fetch resume data right after the app is initialized
  componentDidMount () {
    this.getResumeData()
  }

  // render everything
  render () {
    return (
      <div className='App' >
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Artwork data={this.state.resumeData.artwok} />
        <Footer data={this.state.resumeData.main} />
      </div>
    )
  }
}

export default App
