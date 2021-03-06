import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),  //was 2
        }}
      >
        <img
          src={profilePic}
          alt={`Will Worth`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
       <p>
          Written by <strong>Will Worth</strong>, an English coder who lives
           and works in Alicante.{' '}
          <a href="https://twitter.com/worthcoding">
            Say 'Hi' on twitter
          </a>.
        </p>
      </div>
    )
  }
}

export default Bio
