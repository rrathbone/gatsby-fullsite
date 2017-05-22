import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import get from 'lodash/get'
import Helmet from "react-helmet"
import { config } from 'config'
import include from 'underscore.string/include'
import "../styles/main.scss"

import Header from '../components/common/header'
import Footer from '../components/common/footer'

class HomePage extends Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, 'data.date')
    // Posts are those with md extension that are not 404 pages OR have a date (meaning they're a react component post).
    const visiblePages = sortedPages.filter(page => (
      get(page, 'file.ext') === 'md' && !include(page.path, '/404') || get(page, 'data.date')
    ))
    return (
      <div>
        <Helmet
          title={config.text}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <Header />
        <h1>Home page goes here</h1>
        <Footer />

      </div>
    )
  }
}

HomePage.propTypes = {
  route: PropTypes.object,
}

export default HomePage
