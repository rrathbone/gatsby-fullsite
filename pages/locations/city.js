import React, { PropTypes } from 'react'

import BreadCrumbs from '../../components/common/breadcrumbs'
import GettingAround from '../../components/gettingAround'
import LocationBanner from '../../components/locationBanner'
import RidesInLocation from '../../components/ridesInLocation'
// import MapSection from '../../components/maps/mapSection'

class City extends React.Component {
  render () {
    const { markets } = this.props

    return (
      <div className="city-page">
        <LocationBanner
          markets={markets}
        />

        <div className="row getting-around location-sections">
          <BreadCrumbs />
          <GettingAround
            markets={markets}
          />
        </div>

        <div className="location-sections">
            <div className="row space rides-in-location">
              <RidesInLocation
                markets={markets}
              />
            </div>

            <div className="row space">

            </div>

            <div className="row space">

            </div>
          </div>

      </div>
    )
  }
}

City.propTypes = {
  markets: PropTypes.array.isRequired
}

export default City
