import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
<footer className="footer">
  <div>
    <ul className="footer-links">
      <li className="social-link">
        <a href="https://github.com/fabricegeib" target="_blank" rel="noopener noreferrer">github</a>
      </li>
      <li className="social-link">
        <a href="https://twitter.com/fabricegeib" target="_blank" rel="noopener noreferrer">twitter</a>
      </li>
      <li className="social-link">
        <a href="https://instagram.com/fabricegeib" target="_blank" rel="noopener noreferrer">instagram</a>
      </li>
      <li className="mardown-link">
        <Link to="/markdown/">markdown</Link>
      </li>
    </ul>
  </div>
  <div className="xxx">
    © {new Date().getFullYear()}, Built with {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
</footer>
)

export default Footer