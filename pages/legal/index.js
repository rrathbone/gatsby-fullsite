import React, { Component, PropTypes } from 'react'

import Footer from '../../components/common/footer.js'

class Legal extends Component {
  render() {
    const { markets } = this.props

    return (
      <div className="media-page">
        <h1>Legal page</h1>
      </div>
    )
  }
}

// Legal.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Legal

exports.data = {
  title: "The Legal Page"
}
