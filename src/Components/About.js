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

            <h2> Hi 👋 I'm Roy! </h2>

            <p>
              I'm a recent CMU grad studying Information Systems and Human-Computer Interaction, with a minor in Computer Science. Currently, I'm working as a Software Engineer with GoDaddy’s eCommerce team in Santa Clara, CA.
            </p>

            <p>
              I have prior internship experiences with full-stack web and mobile development in Ruby on Rails, React, and Swift UI. I'm also interested in UI/UX Design. 
            </p>

            <p>
              Previously, I collaborated with Professor

              <a href='https://www.saramoussawi.com/home' target='_blank' rel='noopener noreferrer'>
                {' '}Sara Moussawi{' '}
              </a>

              from CMU on researching users' behavior in crowdsourcing marketplaces and collaborative platforms.

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
              Bringing ideas to life excites me - It is my goal to build compelling and meaningful products at scale. Currently, I'm working on Unicart, an iOS app that digitizes the brick-and-mortar shopping experience for college students.
            </p>

            <p>
              When I'm not busy procrastinating, catch me hacking on personal projects, working out in the gym, or making fire playlists on

              <a href='https://open.spotify.com/playlist/7GPyJufoLiYjZ4CdMynkdI?si=8MSgxt46SQyvRcc__KENBQ' target='_blank' rel='noopener noreferrer'>
                {' '}Spotify{' '}
              </a>

              on my bed at 2am.

              I also love art so check out my

              <a href='https://www.royxuhan.com/' target='_blank' rel='noopener noreferrer'>
                {' '}portfolio
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
