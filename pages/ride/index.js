import React, { Component, PropTypes } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Ride extends Component {
  render() {
    const { markets } = this.props

    return (
      <div className="ride-page">
      <Header />

      <section id="ride-page">
        <h1>Ride page</h1>
      </section>
    </div>
    )
  }
}

// Ride.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Ride

exports.data = {
  title: "The Ride Page"
}
