import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '@eggheadio/gatsby-theme-egghead-blog/src/components/Layout'
import Link from '@eggheadio/gatsby-theme-egghead-blog/src/components/Link'
import { useTheme } from '@eggheadio/gatsby-theme-egghead-blog/src/components/Theming'
import Container from '@eggheadio/gatsby-theme-egghead-blog/src/components/Container'
import { rhythm } from '@eggheadio/gatsby-theme-egghead-blog/src/lib/typography'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          Hey, I'm Zac
        </h1>
        <p
        css={css`
        color: ${theme.colors.white};
        position: relative;
        z-index: 5;
        line-height: 1.5;
        margin: 0;
        max-width: ${rhythm(15)};
      `}
      >
        I use my blog as a place to keep track of what I'm learning. You'll find posts on various topics, some more polished than others. I hope you enjoy!
        
        {/* <br/>
        <a 
          href="https://twitter.com/zacjones93"
          css={css`
            color: ${theme.colors.white};
            '&:hover': {
              color:  ${theme.colors.black}
            }
            z-index: 5;
            line-height: 1.5;
            margin: 1;
            max-width: ${rhythm(15)};
          `}
        >twitter     </a> 
        <a 
          href="https://github.com/zacjones93"
          css={css`
            color: ${theme.colors.white};
            '&:hover': ${theme.colors.black};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        > github</a> */}
        </p>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`