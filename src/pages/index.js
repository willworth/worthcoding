import React from 'react'
import { Link } from 'gatsby'
import will from "../images/bw.jpg" 
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>You've reached my code site.  Welcome.  Thanks for visting.</h1>
    <p>My name's Will -I'm a Javascript and Python focused coder with some professional experience.
    <em> I'm looking for a full time role as a software developer.</em> </p>
    <img src={will} alt="Will" class="willpic"  />
    
    <p> If you have any questions about the contents of this site, or want to talk about collaboration
       (I'm open to opensource work, too), please do get in touch via twitter or  email me willworthcoding  at  gmail dot com </p>
    <p>Thanks for your interest.  Why not check out <Link to="/blog">the blog</Link>?</p>
    

  </Layout>
)

export default IndexPage
