import React from 'react'

import BlogRoll from '../components/BlogRoll'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SEO from '../components/seo'
import "../utils/styles.css"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <>
        <div className="w-full max-w-5xl mx-auto md:mb-12">
            <SEO title={"Blog"} />
            <Navbar/>
            <div className="py-12 px-4">
              <p className="text-3xl md:text-5xl font-bold">Tachom Blog</p>
              <p className="md:text-xl py-1">Where we jot down our imaginations</p>
            </div>
            <BlogRoll />

        </div>
        <Footer/>

      </>
    )
  }
}