import PropTypes from 'prop-types'
import React from 'react'
import me from '../images/IMG_1063.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="icon" src={me} alt="Dido Maulana" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Dido Maulana</h1>
        <p>
          Hi! I'm Dido, a recent Computer Science graduate seeking for
          opportunities & projects to work on.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              window.open('../files/Resume.pdf')
            }}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
