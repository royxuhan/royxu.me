import React, { Component } from 'react'

class About extends Component {
  render () {
    if (this.props.data) {
      var profilepic = 'images/' + this.props.data.image
    }

    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img className='profile-pic' src={profilepic} alt='Roy Xu Profile Pic' />
          </div>
          <div className='nine columns main-col'>

            <h2> Hi, I'm Roy 👋 </h2>

            <p>
              I graduated from Carnegie Mellon University in 2021, majoring in Information Systems and Human-Computer Interaction, with a minor in Computer Science. Currently, I'm a Software Engineer on GoDaddy’s eCommerce team in the San Francisco Bay area.
            </p>

            <p>
              I have experience in full-stack web and mobile development, mostly React, Django, Ruby on Rails, and SwiftUI. I've also worked extensively with AWS Lambda and API Gateway in Node.js and TypeScript. 
            </p>

            <p>
              In college, I collaborated with Professor

              <a href='https://www.saramoussawi.com/home' target='_blank' rel='noopener noreferrer'>
                {' '}Sara Moussawi{' '}
              </a>

              on researching users' behavior in crowdsourcing marketplaces and collaborative platforms.

              I also worked as a TA for

              <a href='http://www.kosbie.net/cmu/fall-18/15-110/staff.html' target='_blank' rel='noopener noreferrer'>
                {' '}15-110
              </a>

              , Principles of Computing, under Professor

              <a href='http://www.kosbie.net/cmu/' target='_blank' rel='noopener noreferrer'>
                {' '}David Kosbie{' '}
              </a>

              and Professor

              <a href='http://www.cs.cmu.edu/~mjs/' target='_blank' rel='noopener noreferrer'>
                {' '}Mark Stehlik
              </a>
              .

            </p>

            <p>
              Bringing ideas to life excites me - it is my goal to build compelling and meaningful products at scale. In my free time, I'm working on Unibuy, an iOS app that digitizes the brick-and-mortar shopping experience for college students.
            </p>

            <p>
              When I'm not working, I love playing basketball and watching the lastest sci-fi movies and shows.

              I also love to draw things so check out my

              <a href='https://www.royxuhan.com/' target='_blank' rel='noopener noreferrer'>
                {' '}artwork
              </a>.

              Feel free to

              <a href='mailto:royxuhan@gmail.com' target='_blank' rel='noopener noreferrer'>
                {' '}get in touch{' '}
              </a>

              - I'm always happy to chat :).
            </p>

          </div>
        </div>
      </section>
    )
  }
}

export default About
