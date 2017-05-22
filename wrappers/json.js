import React, { PropTypes } from 'react'
import Helmet from "react-helmet"
import { config } from 'config'

import '../css/main.css'

class JSONWrapper extends React.Component {
  render () {
    console.log(this.props);
    const { route } = this.props
    const markets = route.page.data.markets

    return (
      <div className="city">

        <h1>{markets[0].label}</h1>
        <hr/>
      </div>
    )
  }
}

JSONWrapper.propTypes = {
  route: PropTypes.object
}

export default JSONWrapper
