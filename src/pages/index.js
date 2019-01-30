import React from 'react'
import { Link } from 'gatsby'
import will from "../images/bw.jpg" 
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome</h1>
    <img  src={will} alt="Will" class="willpic"  />
    <p>Thanks for visting. My name's Will -I'm a Javascript and
       Python developer with professional experience
    <em> looking for my first full time role.</em> </p>
    <p>I'm currently putting together a portfolio and C.V., but if you're here reading this, then great! <br/>
    
<a href="mailto:willworthcoding@gmail.com">Send me an email</a> or check out <Link to="/blog">the code blog</Link>.
</p>
    
    
    




       
     
    

  </Layout>
)

export default IndexPage
