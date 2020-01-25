import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '@eggheadio/gatsby-theme-egghead-blog/src/components/Layout'
import Container from '@eggheadio/gatsby-theme-egghead-blog/src/components/Container'

export default ({ data: { site } }) => (
  <Layout site={site}>
    <Container>
      <h1>
        Hey 👋 I'm Zac
      </h1>
      <p>
        I'm a software engineer and learner advocate at egghead.io helping instructors produce awesome content.

        <br/>
        <br/>

        I live and work remotely in Arlington, VA though I'm originally from Vancouver, WA. The Pacific Northwest will always be home. 🏔
      </p>
      <br/>
      <a 
        href="https://twitter.com/zacjones93" 
        css={css`
          margin-right: 10px;
        `}
      >
        twitter  
      </a>
      <a href="https://github.com/zacjones93">github</a>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`