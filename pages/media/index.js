import React, { Component, PropTypes } from 'react'

import Footer from '../../components/common/footer.js'

class Media extends Component {
  render() {
    const { markets } = this.props

    return (
      <div className="careers-page">
        <h1>Media page</h1>
      </div>
    )
  }
}

// Media.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Media

exports.data = {
  title: "The Media Page"
}
