import React from 'react';
import { Link } from 'gatsby';
import { rhythm, scale } from '../utils/typography';
import { createGlobalStyle } from 'styled-components';

import Footer from './Footer';

class Layout extends React.Component {
  render() {
    const GlobalStyle = createGlobalStyle`
      body {
        background-color: #f4f7f7;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
      }
      a {
        color: #ff5555;
      }
      h1, h2 {
        border-bottom: 0;
      }
    `;
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontWeight: 900,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h2
          style={{
            marginTop: 0,
            marginBottom: rhythm(1.5),
            fontWeight: 900,
            color: '#ff5555',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      );
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(32),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {header}
          {children}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
