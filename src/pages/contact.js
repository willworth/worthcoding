import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Hi!</h1>
  <blockquote>
    <p>I'm a Javascript and Python focused coder with  professional experience
       looking for a full time role developer position in Berlin.</p>
    </blockquote>  
   
    <p>Most recently, I've been focusing on Javascript- with Node, express, and React.
      My desire to improve these skills led me to choose Gatsby to build
      this site (though, frankly, react seems to be overkill for a simple blog). </p>
      <p>Apart from the above, I've also worked with wordpress and PHP, and  as a tester with a
       python stack a large scale webscraping project. </p>

    <p> If you have something I may be able to help with, if you have any questions about the contents of this site, or even if you 
      want to talk about collaboration
       (I'm open to opensource volunteer project work, too), please do get in touch.</p>

    <p> 
    <a href="mailto:willworthcoding@gmail.com">Send me an email</a> or find me on 
    <a href ="https://www.linkedin.com/in/willworth/"> LinkedIn</a> or 
    <a href ="https://www.github.com/willworth/"> Github</a>.</p> 
    
              
    <blockquote>       

“Tis in ourselves that we are thus or thus. Our bodies are our gardens to the which our wills are gardeners.”― Shakespeare, 
<a href="http://www.shakespeare-online.com/plays/othello_1_3.html">Othello</a>

</blockquote>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
