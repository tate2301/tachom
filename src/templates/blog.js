import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../utils/styles.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <div className="blog-post-container py-12 max-w-3xl mx-auto">
          <div className="blog-post">
            <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
            <h2 className="text-gray-700">{frontmatter.date}</h2>
            <p className="py-8">
              <img src={frontmatter.thumbnail} alt={frontmatter.title} title={frontmatter.description}/>
            </p>
            <div
              className="blog-post-content py-8 prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        description
      }
    }
  }
`