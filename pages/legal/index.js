import React, { Component } from 'react'

import Header from '../../components/common/header.js'

class Legal extends Component {
  render () {
    return (
      <div className="careers-page">
      <Header />

      <section id="careers-page">
        <h1>Legal page</h1>
      </section>

    </div>
    )
  }
}

export default Legal

exports.data = {
  title: "The Legal Page"
}
