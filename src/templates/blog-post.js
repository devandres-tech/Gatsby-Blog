import React, { useEffect } from 'react'
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { PostTitle } from '../components/post-title'
import { PostContainer } from '../components/post-container'
import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { Utterences } from '../components/utterances'
import * as ScrollManager from '../utils/scroll'

import '../styles/code.scss'

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init()
    return () => ScrollManager.destroy()
  }, [])

  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, comment, siteUrl, author, sponsor } = metaData
  const { disqusShortName, utterances } = comment
  console.log('data in blog-post', data)

  return (
    <Layout location={location} title={title}>
      <Link className="fas fa-chevron-left fa-2x" to={`/`}>
      </Link>
      <Head title={post.frontmatter.title} description={post.excerpt} />
      <PostTitle date={post.frontmatter.date} title={post.frontmatter.title} />
      {/* <p>{post.frontmatter.date}</p> */}
      <PostContainer html={post.html} />
      <SocialShare title={post.frontmatter.title} author={author} />
      {!!sponsor.buyMeACoffeeId && (
        <SponsorButton sponsorId={sponsor.buyMeACoffeeId} />
      )}
      <Elements.Hr />
      <Bio />
      <PostNavigator pageContext={pageContext} />
      {!!disqusShortName && (
        <Disqus
          post={post}
          shortName={disqusShortName}
          siteUrl={siteUrl}
          slug={pageContext.slug}
        />
      )}
      {!!utterances && <Utterences repo={utterances} />}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        comment {
          disqusShortName
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
