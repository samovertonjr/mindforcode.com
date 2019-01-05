import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <React.Fragment>
            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                marginBottom: rhythm(2.5),
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
              />
              <p style={{ marginBottom: 0 }}>
                Blog by{' '}
                <strong>
                  <a href={`https://twitter.com/${social.twitter}`}>{author}</a>
                </strong>
                . <br /> A Front-End Dev devoted to make the web a better place.
              </p>
            </div>
          </React.Fragment>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 60, height: 60, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
