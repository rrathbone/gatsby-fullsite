import React, { PropTypes } from 'react'

const LocationBanner = ({ markets }) => {
  return (
    <section className="location-banner">
      <div className="row">
        <h1 id="location-header">{markets[0].label} Car Services</h1>
      </div>
    </section>
  )
}

LocationBanner.propTypes = {
  markets: PropTypes.array
}

export default LocationBanner
