import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata;

        // footer styles
        const FooterLink = styled.a`
          margin: 0.5rem;
          color: #404040c4;
          &:hover {
            color: #2e3249;
          }
        `;
        const FooterP = styled.p`
          margin-bottom: ${rhythm(2)};
        `;

        return (
          <footer>
            <FooterP>
              <FooterLink
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </FooterLink>
              <FooterLink
                href={`https://github.com/${social.github}`}
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </FooterLink>
            </FooterP>
          </footer>
        );
      }}
    />
  );
}

const footerQuery = graphql`
  query footerQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default Footer;
