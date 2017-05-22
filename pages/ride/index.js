import React, { Component } from 'react'

import Header from '../../components/common/header.js'

class Ride extends Component {
  render () {
    return (
      <div className="careers-page">
      <Header />

      <section id="careers-page">
        <h1>Ride page</h1>
      </section>

    </div>
    )
  }
}

export default Ride

exports.data = {
  title: "The Ride Page"
}
