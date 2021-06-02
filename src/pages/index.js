import * as React from 'react'
import { Link } from 'gatsby'
import Layout from "src/pages/components/layout.js"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
   return (
	<Layout pageTitle="Home Page">
	   <p>I'm maiking this on Home page</p>
	   <StaticImage
		alt="Clifford, a reddish-brown pitbul"
		src="../images/Clifford.jpeg"
           />
	</Layout>
   )
}

export default IndexPage
