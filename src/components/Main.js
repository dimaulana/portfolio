import PropTypes from 'prop-types'
import React from 'react'
import oldsam from '../images/oldsam.png'
import nlesd from '../images/nlesd.png'
import parkii from '../images/parkii.png'
import memorial from '../images/mun.png'
import dvg from '../images/dvg.png'
import apoc from '../images/apo-race.png'
import nlesdproj from '../images/nlesd-proj.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Hi! My name is Dido, I pride myself as a reliable and diligent
            individual with an avid interest in utilizing the latest
            technologies. I've had experiences in various aspects of IT, which
            includes web/software development, technical analyst and SAP
            consulting. I have a proven track record of delivering high-quality
            results when asked to rise to a challenge. I'm seeking to find an
            organization that emphasizes on growth, where I can utilize my
            technical abilities in a team-driven environment.
          </p>

          <h3>SKILLS:</h3>
          <p>
            <b>Programming: </b>HTML5, SAPUI5 , CSS3, JavaScript, JQuery,
            React.js, Gatsby.js, Java, MySQL, SQLScript <br />
            <b>Others: </b>Git, Google Cloud Platform, SAP Cloud Platform,
            Microsoft Office
            <br />
            <b>Operating Systems: </b>Windows, Linux, OSX
          </p>
          <p>
            Interested in collaborating? Do not hesitate to contact me at{' '}
            <b>didomaulana@outlook.com</b>
          </p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <div className="timeline">
            <span className="image main container">
              <img src={oldsam} alt="Oldsam Consulting" />
              <div>
                <h3>Oldsam Consulting Inc</h3>
                <b>Junior SAP Consultant</b>
                <br />
                <b>May 2019 - Nov 2019</b>
                <p>
                  As an SAP consultant I most prevalently designed SAP Fiori &
                  HANA solutions to enhance and improve the workflow of the
                  client's SAP system using technologies such as
                  <b> SAPUI5, SQLScript, SAP HANA & SAP Cloud Platform</b>. With
                  the mindset of providing the best possible solution possible,
                  we always do thorough research, which included presentations
                  on technologies such as{' '}
                  <b>
                    Google Kubernetes Engine, Docker & Software AG's Cumulocity
                  </b>
                  . Additionally, I've completed 3 SAP certifications in
                  implementation & development.
                </p>
              </div>
            </span>
            <span className="image main container">
              <img src={nlesd} alt="NLESD" />
              <div>
                <h3>Newfoundland & Labrador English School District</h3>
                <b>Programmer Analyst I</b>
                <br />
                <b> Sept 2018 - Apr 2019</b>
                <p>
                  Involved work with various projects to enhance business
                  operations where I continually excelled both individually and
                  as a team player to optimally deliver comprehensive technical
                  solutions and documentations using technologies such as{' '}
                  <b>
                    Google APIs, Google Apps Script, HTML5, JQuery, Bootstrap
                  </b>
                  . During my time, I successfully completed an intranet project
                  with the Learning Resources Department to create a website
                  that is currently utilized by 200+ staff daily. I also
                  completed the migration of 80 school websites to our Google
                  Sites platform which was completed a month before the
                  deadline.
                </p>
              </div>
            </span>
            <span className="image main container">
              <img src={nlesd} alt="NLESD" />
              <div>
                <h3>Newfoundland & Labrador English School District</h3>
                <b>Web Developer</b>
                <br />
                <b>Jan 2018 - Aug 2018</b>
                <p>
                  Led the project of creating a website template on{' '}
                  <b>New Google Sites</b> for 250+ schools in Newfoundland &
                  Labrador where I utilized{' '}
                  <b>
                    Google APIs, AJAX, HTML5, CSS, JavaScript, Bootstrap &
                    JQuery{' '}
                  </b>
                  . Due to different needs of schools, the project required
                  extensive user research which resulted in a design that was
                  well-received and is currently used as templates for intranet
                  websites as well. The project & initiative reduced school
                  yearly expenses for web hosting, design & management which in
                  total freed ~$8,000 a year.
                </p>
              </div>
            </span>
            <span className="image main container">
              <img src={parkii} alt="Parkii" />
              <div>
                <h3>Parkii</h3>
                <b>Technical Analyst</b>
                <br />
                <b>Sept 2017 - Apr 2018</b>
                <p>
                  Parkii is a start-up designed to solve parking problems in the
                  city of St. John's by utilizing unused parking spaces at homes
                  which could be listed at our web-platform. I created and drew
                  up business plans and requirements to present and develop
                  business which resulted in Parkii's first 10 customers. The
                  web platform was designed on <b>WordPress</b>, with a
                  customized theme which was edited using <b>PHP & SCSS.</b>
                </p>
              </div>
            </span>
            <span className="image main container">
              <img src={memorial} alt="Memorial University" />
              <div>
                <h3>Memorial University (CITL)</h3>
                <b>Developer Assistant</b>
                <br />
                <b>Sept 2017 - Dec 2017</b>
                <p>
                  Worked closely with CITL's designers & programmers to update
                  and build resources that support teaching and learning at
                  Memorial University. This role required me to implement
                  additional features on the <b>WordPress</b> site, where I
                  managed to successfully deliver high-quality solutions to all
                  these requests. Additionally, I was relied upon to review &
                  organize the format and content of the CITL's resources
                  website.
                </p>
              </div>
            </span>
          </div>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <div className="card-container">
            <div className="card">
              <img src={apoc} alt="The Apocalyptic Race" />
              <div className="card-info">
                <ul className="icons">
                  <li>
                    <a
                      href="https://theapocalypticrace.herokuapp.com/"
                      className="icon fa-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">Link</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/dimaulana/TheApocRace"
                      className="icon fa-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">Github</span>
                    </a>
                  </li>
                </ul>
                <p>
                  <b>Jan 2019 - Apr 2019</b>
                </p>
                <p>
                  2D platformer game created using HTML5, JQuery, Bootstrap,
                  Node.js, Socket and MongoDB.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={nlesdproj} alt="NLESD Google Sites Template" />
              <div className="card-info">
                <ul className="icons">
                  <li>
                    <a
                      href="https://mqp.nlesd.ca"
                      className="icon fa-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="label">Link</span>
                    </a>
                  </li>
                </ul>
                <p>
                  <b>Jan 2018 - Aug 2018</b>
                </p>
                <p>
                  New Google Sites template created for 250+ schools. Utilized
                  JQuery, Bootstrap and Google API to create dynamic plugins.
                </p>
              </div>
            </div>
            <div className="card">
              <img src={dvg} alt="DVG Rental" />
              <div className="card-info">
                <ul className="icons">
                  <li>
                    <a
                      href="https://github.com/dimaulana/DVG-Rental"
                      className="icon fa-github"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="label">Github</span>
                    </a>
                  </li>
                </ul>
                <p>
                  <b>Mar 2017 - Apr 2017</b>
                </p>
                <p>
                  Car rental website for a team project. Created using HTML,
                  CSS, JavaScript, AJAX, PHP and MySQL database.
                </p>
              </div>
            </div>
          </div>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
