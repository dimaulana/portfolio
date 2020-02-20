import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <ul className="icons">
      <li>
        <a
          href="https://www.youracclaim.com/users/dido-maulana"
          className="icon fa-angle-double-up"
          target="_blank"
        >
          <span className="label">Acclaim</span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/dimaulana"
          className="icon fa-linkedin"
          target="_blank"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/dimaulana"
          className="icon fa-github"
          target="_blank"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <p className="copyright">&copy; 2020 - Dido Maulana</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
