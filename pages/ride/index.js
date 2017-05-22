import React, { Component } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Ride extends Component {
  render () {
    return (
      <div className="ride-page">
      <Header />

      <section id="ride-page">
        <h1>Ride page</h1>
      </section>

      <Footer />
    </div>
    )
  }
}

export default Ride

exports.data = {
  title: "The Ride Page"
}
