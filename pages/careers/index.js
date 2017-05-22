import React, { Component } from 'react'

import Header from '../../components/common/header.js'

class Careers extends Component {
  render () {
    return (
      <div className="careers-page">
      <Header />

      <section id="careers-page">
        <h1>Careers page</h1>
      </section>

    </div>
    )
  }
}

export default Careers

exports.data = {
  title: "The Careers Page"
}
