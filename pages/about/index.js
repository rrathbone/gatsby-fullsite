import React, { Component } from 'react'

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

      <Footer />
    </div>
    )
  }
}

export default About

exports.data = {
  title: "The About Page"
}
