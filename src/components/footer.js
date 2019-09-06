import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div className="info-area">
        <div className="column">
          <a href="https://github.com/joshsisley">GitHub</a>
          <a href="https://instagram.com/joshuasisley">Instagram</a>
          <a href="https://www.linkedin.com/in/joshua-sisley/">LinkedIn</a>
        </div>
        <div className="column" />
        <div className="column">
          <p>
            <strong>Joshua Sisley</strong>
            <br />
            Raleigh, NC 27513
            <br />
            <br />
            josh@joshuasisley.com
            <br />
          </p>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <p>Joshua Sisley © {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer
