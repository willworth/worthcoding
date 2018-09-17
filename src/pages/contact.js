import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Hi!</h1>
  <blockquote>
    <p>I'm a Javascript and Python focused coder with some professional experience.
       I'm looking for a full time role as a software developer.</p>
    </blockquote>  
    <p>Apart from the above, I've also worked with wordpress and PHP, and worked as a tester with a
       python stack using flask and a large scale webscraping project. </p>
    <p>Most recently, I've been focusing on Javascript- with Node, express, and React.
      My desire to improve these skills led me to choose Gatsby to build
      this site (though, frankly, react seems to be overkill for a simple blog). </p>
    <p> If you have any questions about the contents of this site, or want to talk about collaboration
       (I'm open to opensource work, too), please do get in touch.</p>

    <p> 
    <a href="mailto:willworthcoding@gmail.com">Send me an email</a></p>
    <p>Thanks for your interest.</p>
              
    <blockquote>       

“Tis in ourselves that we are thus or thus. Our bodies are our gardens to the which our wills are gardeners.”― Shakespeare, 
<a href="http://www.shakespeare-online.com/plays/othello_1_3.html">Othello</a>

</blockquote>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
