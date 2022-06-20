import React from 'react'
import { Facebook, GitHub, LinkedIn } from '@material-ui/icons'

const Footer = () => {
  return (
    <footer className="footer">
      <p>All copyright reserved to Asad</p>
      <ul className="footer__ul">
        <li ><a href="https://www.facebook.com/">
          <Facebook />
        </a>
        </li>
        <li><a href="https://github.com/">
          <GitHub />
        </a>
        </li>
        <li><a href="https://linkedin.com/">
          <LinkedIn />
        </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer