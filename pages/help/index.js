import React, { Component } from 'react'

import Header from '../../components/common/header.js'

class Help extends Component {
  render () {
    return (
      <div className="careers-page">
      <Header />

      <section id="careers-page">
        <h1>Help page</h1>
      </section>

    </div>
    )
  }
}

export default Help

exports.data = {
  title: "The Help Page"
}
