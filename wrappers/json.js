import React, { PropTypes } from 'react'

import City from '../components/city'
import Careers from '../pages/careers'
import Footer from '../components/common/footer'

import '../css/main.css'

class JSONWrapper extends React.Component {
  render () {
    // console.log(this.props);
    const { route } = this.props
    const markets = route.page.data.markets

    return (
      <div className="city">
        <div dangerouslySetInnerHTML={{ __html: markets.body }} />
        <City
          markets={markets}
        />
        <Footer
          markets={markets}
        />
      </div>
    )
  }
}

JSONWrapper.propTypes = {
  route: PropTypes.object
}

export default JSONWrapper
