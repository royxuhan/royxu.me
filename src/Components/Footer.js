import React, { Component } from 'react'

class Footer extends Component {
  render () {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className} /></a></li>
      })
    }

    return (
      <footer>
        <div className='row'>
          <div className='twelve columns'>
            <ul className='social-links'>
              {networks}
            </ul>

            <ul className='copyright'>
              <li>&copy; 2020 Roy Xu. All rights reserved.</li>
              <li>Site made with <a title='Styleshout' href='https://reactjs.org/'>React.js</a></li>
            </ul>

          </div>
          <div id='go-top'><a className='smoothscroll' title='Back to Top' href='#home'><i className='icon-up-open' /></a></div>
        </div>
      </footer>
    )
  }
}

export default Footer
