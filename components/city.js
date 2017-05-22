import React, { PropTypes } from 'react'

import Header from './common/header'
import Footer from './common/footer'

class City extends React.Component {
  render () {
    const { markets } = this.props

    return (
      <div className="city-page">
        <Header />
        <p>{markets[0].label} is a city</p>
      </div>
    )
  }
}

City.propTypes = {
  markets: PropTypes.array.isRequired
}

export default City
