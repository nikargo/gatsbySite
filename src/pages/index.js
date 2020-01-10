import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
    <Layout>
        <h1>Welcome</h1>
        <p>I'm Nik, an engineering and culture fiend.</p>
        <p>While this is just getting started, it is intended to act as a place for me to document
             my exploration through learning new things (AKA dealing with confusion), mostly related to software development, 
             but perhaps other topics as well.</p>
        <p>For more info on me, see the <Link to="/about">page about me</Link>. </p>
    </Layout>
)
