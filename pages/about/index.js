import React, { Component, PropTypes } from 'react'

import Footer from '../../components/common/footer.js'

class About extends Component {
  render () {
    return (
      <div className="about-page">
        <h1>About page</h1>
      </div>
    )
  }
}

// About.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default About

exports.data = {
  title: "The About Page"
}
