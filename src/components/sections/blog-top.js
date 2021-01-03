import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogTopPostsPreview extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts)

    return (
      <div className="flex flex-wrap w-full">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="w-full lg:w-1/3 min-h-48 px-2 is-6 py-8" key={post.id}>
              <div className="w-full md:p-4 rounded-xl h-full ">
              <Link  to={post.frontmatter.path}>
                  <div className="h-48 bg-gray-100 rounded mb-4" style={{
                      backgroundImage: `url('${post.frontmatter.thumbnail}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                  }}></div>
                    <article
                      className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                      }`}>
                      <header>
                        <p className="post-meta">
                          <Link
                            className="title text-gray-900 has-text-primary is-size-4 text-2xl font-bold"
                            to={post.frontmatter.path}>
                            {post.frontmatter.title}
                          </Link>                    
                        </p>
                      </header>
                      <p>
                        {post.frontmatter.description}
                        <br />
                        <br />
                        <span className="subtitle is-size-5 is-block text-gray-500">
                            {post.frontmatter.date}
                          </span>

                      </p>
                    </article>          
              </Link>

              </div>
              </div>

            ))}
      </div>
    )
  }
}

BlogTopPostsPreview.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogTopPostsPreviewQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              frontmatter {
                path
                title
                date(fromNow: true)
                description
                thumbnail
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogTopPostsPreview data={data} count={count} />}
  />
)