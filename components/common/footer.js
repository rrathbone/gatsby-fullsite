import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import FooterCities from './footerCities'
import FooterLinks from './footerLinks'

class Footer extends Component {
  render() {
    const { markets } = this.props

    let labels
    let labelLength = false

    for(let key in markets) {
      if(markets.hasOwnProperty(key)) {
        const val = markets[key]
        labels = val
        labelLength = true
      }
    }
    
    return (
      <div className="footer">
        <footer>
          <FooterLinks />

          <div className="divider"></div>

          <div className="row" id="city-footer">
            <h5>Top Cities</h5>
            {markets.map((market, index) =>
              <FooterCities
               key={index}
               market={market}
            />)}
          </div>
        </footer>
      </div>
    )
  }
}

Footer.propTypes = {
  markets: PropTypes.array
}

export default Footer
