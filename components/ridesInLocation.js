import React from 'react';

const RidesInLocation = ({ markets }) => {
  return (
    <section className="rides-in-location">
      <div><h2>X Ridesharing Companies in {markets[0].label}</h2><h5>CAROUSEL & POP UP CARDS GOES HERE</h5></div>
    </section>
  )
}

RidesInLocation.propTypes = {
  markets: React.PropTypes.array
}

export default RidesInLocation
