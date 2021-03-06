import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    console.log(posts)

    return (
      <div className="columns is-multiline text-gray-600">
        {posts &&
          posts.map(({ node: post }) => (
              <Link  to={post.frontmatter.path}>
                <div className="flex py-2 flex-wrap">
                  <div className="w-full md:w-1/3 p-4">
                    <div className="w-full h-48 rounded bg-gray-100"
                      style={{
                        backgroundImage: `url('${post.frontmatter.thumbnail}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                      }}>
                        
                    </div>
                  </div>
                  <div className="is-parent column is-6 py-4 px-4 w-full md:w-2/3" key={post.id}>
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
                  </div>
                </div>
          
              </Link>
            ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)