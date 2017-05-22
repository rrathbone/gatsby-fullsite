import React, { Component } from 'react'

import Header from '../../components/common/header.js'

class About extends Component {
  render () {
    return (
      <div className="careers-page">
      <Header />

      <section id="careers-page">
        <h1>About page</h1>
      </section>

    </div>
    )
  }
}

export default About

exports.data = {
  title: "The About Page"
}
