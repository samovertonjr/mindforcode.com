import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    //Styles
    const BlogIndexArticleWrapper = styled.article`
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
      justify-content: space-between;
      margin: 0 0 2rem;
      background: rgb(255, 255, 255);
      border-radius: 4px;
      padding: 1rem 1rem;
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
        padding 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

      &:hover {
        /* background-color: #2e3249; */
        box-shadow: 0 0 3px 0 rgba(46, 50, 73, 1);
        /* border: 1px solid rgba(46, 50, 73, 1); */
      }
    `;
    const BlogIndexHeading = styled.h3`
      flex: 2;
      border-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
      margin-right: ${rhythm(1.25)};
      padding-bottom: 0;
    `;

    const BlogIndexLink = styled(Link)`
      color: #3c435e;
      &:hover,
      &:active {
        text-decoration: none;
      }
    `;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <BlogIndexLink key={node.fields.slug} to={node.fields.slug}>
              <BlogIndexArticleWrapper>
                <Image
                  fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
                  alt={node.thumbnail}
                  style={{
                    borderRadius: `100%`,
                    marginRight: `2rem`,
                  }}
                />
                <BlogIndexHeading>{title}</BlogIndexHeading>

                {/* <p dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
                <small>{node.frontmatter.date}</small>
              </BlogIndexArticleWrapper>
            </BlogIndexLink>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail {
              childImageSharp {
                fixed(width: 40, height: 40, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
