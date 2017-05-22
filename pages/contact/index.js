import React, { Component } from 'react'

import Header from '../../components/common/header.js'

class Contact extends Component {
  render () {
    return (
      <div className="careers-page">
      <Header />

      <section id="careers-page">
        <h1>Contact page</h1>
      </section>

    </div>
    )
  }
}

export default Contact

exports.data = {
  title: "The Contact Page"
}
