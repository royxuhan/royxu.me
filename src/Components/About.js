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

            <h2> Hi, I'm Roy! </h2>

            <p>
              I'm a CMU undergrad studying Information Systems and Human-Computer Interaction, with a minor in Computer Science.
            </p>

            <p>
              I have experience working with full-stack web and mobile development. I'm also interested in NLP research and UI/UX Design. This past summer, I worked as a Software Engineering Intern with

              <a href='https://medium.com/@royxuhan/my-summer-2019-8d0ac03db859' target='_blank' rel='noopener noreferrer'>
                {' '}GoDaddy
              </a>

              ’s Presence & Commerce team in Sunnyvale, CA!
            </p>

            <p>
              Previously, I collaborated with Professor

              <a href='https://www.saramoussawi.com/home' target='_blank' rel='noopener noreferrer'>
                {' '}Sara Moussawi{' '}
              </a>

              on researching users' behavior in crowdsourcing marketplaces and collaborative platforms.

              I also worked as a TA for

              <a href='http://www.kosbie.net/cmu/fall-18/15-110/staff.html' target='_blank' rel='noopener noreferrer'>
                {' '}15-110
              </a>

              , under Professor

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

              Last year, I worked on

              <a href='https://apps.apple.com/us/app/vezzy/id1416931390' target='_blank' rel='noopener noreferrer'>
                {' '}Vezzy
              </a>

              , a marketplace app that enables college students to buy/sell/trade used goods at ease.
            </p>

            <p>
              When I'm not busy procrastinating, catch me hacking on personal projects, working out in the gym, or making fire playlists on

              <a href='https://open.spotify.com/playlist/7GPyJufoLiYjZ4CdMynkdI?si=8MSgxt46SQyvRcc__KENBQ' target='_blank' rel='noopener noreferrer'>
                {' '}Spotify{' '}
              </a>

              on my bed at 4am.

              I also love art so check out my

              <a href='https://www.royxuhan.com/' target='_blank' rel='noopener noreferrer'>
                {' '}portfolio
              </a>.

              As long as you can handle my sleep schedule, feel free to

              <a href='mailto:royxuhan@gmail.com' target='_blank' rel='noopener noreferrer'>
                {' '}get in touch{' '}
              </a>

              - I'm always happy to chat :).
            </p>

            <p>
              You can find my

              <a href='assets/Roy Xu Resume.pdf' target='_blank' rel='noopener noreferrer'>
                {' '}resume{' '}
              </a>

              here.

              And check out my

              <a href='https://www.royxuhan.com/' target='_blank' rel='noopener noreferrer'>
                {' '}art
              </a>!

            </p>

          </div>
        </div>
      </section>
    )
  }
}

export default About
