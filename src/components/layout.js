import React from 'react';
import PropTypes from 'prop-types';
import Header from './header'
import Footer from './footer'

import './layout.css';

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <main className="layout">{children}</main>
    <Footer></Footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
