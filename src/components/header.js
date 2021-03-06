import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#8b2635',

      
      // background: '#33261d',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link to="/">Home</Link> { }<Link to="/blog/">Blog</Link> { }<Link to="/portfolio/">Portfolio</Link> { }<Link to="/contact/">Contact</Link>
    </div>
  </div>
)

export default Header
