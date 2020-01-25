import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import Container from '@eggheadio/gatsby-theme-egghead-blog/src/components/Container'
import SEO from '@eggheadio/gatsby-theme-egghead-blog/src/components/SEO'
import Layout from '@eggheadio/gatsby-theme-egghead-blog/src/components/Layout'
import Link from '@eggheadio/gatsby-theme-egghead-blog/src/components/Link'
import { bpMaxSM, bpMaxMD } from '@eggheadio/gatsby-theme-egghead-blog/src/lib/breakpoints'

const Blog = ({
  data: { site, allMdx },
  pageContext: { pagination, categories },
}) => {
  const { page, nextPagePath, previousPagePath } = pagination

  const posts = page
    .map(id =>
      allMdx.edges.find(
        edge =>
          edge.node.id === id
      ),
    )
    .filter(post => post !== undefined)

  return (
    <Layout site={site}>
      <SEO />
      <Container noVerticalPadding>
        {posts.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              :not(:first-of-type) {
                margin-top: 60px;
                ${bpMaxMD} {
                  margin-top: 40px;
                }
                ${bpMaxSM} {
                  margin-top: 20px;
                }
              }
              :first-of-type {
                margin-top: 20px;
                ${bpMaxSM} {
                  margin-top: 20px;
                }
              }
              .gatsby-image-wrapper {
              }
              ${bpMaxSM} {
                padding: 20px;
              }
              display: flex;
              flex-direction: column;
            `}
          >
            {post.frontmatter.banner && (
              <div
                css={css`
                  ${bpMaxSM} {
                    padding: 20px;
                  }
                `}
              >
                <Link
                  aria-label={`View ${post.frontmatter.title} article`}
                  to={`/${post.fields.slug}`}
                >
                  <Img sizes={post.frontmatter.banner.childImageSharp.fluid} />
                </Link>
              </div>
            )}
            <h2
              css={css`
                margin-top: 30px;
                margin-bottom: 10px;
              `}
            >
              <Link
                aria-label={`View ${post.frontmatter.title} article`}
                to={`/${post.fields.slug}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            {/* <small>{post.frontmatter.date}</small> */}
            <p
              css={css`
                margin-top: 10px;
              `}
            >
              {post.excerpt}
            </p>{' '}
            <Link
              to={`/${post.fields.slug}`}
              aria-label={`view "${post.frontmatter.title}" article`}
            >
              Read Article →
            </Link>
          </div>
        ))}
        <div css={css({ marginTop: '30px' })}>
          {nextPagePath && (
            <Link to={nextPagePath} aria-label="View next page">
              Next Page →
            </Link>
          )}
          {previousPagePath && (
            <Link to={previousPagePath} aria-label="View previous page">
              ← Previous Page
            </Link>
          )}
        </div>
        <hr
          css={css`
            margin: 50px 0;
          `}
        />
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {regex: "//content/blog//"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            slug
            date
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              ...bannerImage640
            }
            slug
            keywords
          }
        }
      }
    }
  }
`