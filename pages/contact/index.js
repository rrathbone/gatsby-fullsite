import React, { Component, PropTypes } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Contact extends Component {
  render () {
    const { markets } = this.props

    return (
      <div className="contact-page">
      <Header />

      <section id="contact-page">
        <h1>Contact page</h1>
      </section>
    </div>
    )
  }
}

// Contact.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Contact

exports.data = {
  title: "The Contact Page"
}
