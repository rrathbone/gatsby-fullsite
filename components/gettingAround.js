import React, { PropTypes } from 'react'

const GettingAround = ({ markets }) => {
  return (
    <section className="getting-around-location">
      <div><h2>Getting Around {markets[0].label}</h2><p>{markets[0].label} is a major city in STATE. It is in....</p></div>
    </section>
  )
}

GettingAround.propTypes = {
  markets: PropTypes.array
}

export default GettingAround
