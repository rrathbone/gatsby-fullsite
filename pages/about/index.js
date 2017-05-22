import React, { Component, PropTypes } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class About extends Component {
  render () {
    return (
      <div className="about-page">
      <Header />

      <section id="about-page">
        <h1>About page</h1>
      </section>
    </div>
    )
  }
}

// About.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default About

exports.data = {
  title: "The About Page"
}
