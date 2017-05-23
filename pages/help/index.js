import React, { Component, PropTypes } from 'react'

import Footer from '../../components/common/footer.js'

class Help extends Component {
  render() {
    const { markets } = this.props

    return (
      <div className="help-page">
        <h1>Help page</h1>
      </div>
    )
  }
}

// Help.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Help

exports.data = {
  title: "The Help Page"
}
