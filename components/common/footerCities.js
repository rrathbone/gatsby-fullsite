import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const FooterCities = ({ market }) => {
  return (
    <div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
        </ul>
        
      </div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
        </ul>
      </div>
      <div className="col-md-2">
        <ul>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
          <Link to={'/city/' + market.marketId} className="footer-city-links">{market.label}</Link>
        </ul>
      </div>

    </div>
  )
}

FooterCities.propTypes = {
  market: PropTypes.object
}

export default FooterCities
