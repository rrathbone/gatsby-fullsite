import React, { Component } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Contact extends Component {
  render () {
    return (
      <div className="contact-page">
      <Header />

      <section id="contact-page">
        <h1>Contact page</h1>
      </section>

      <Footer />
    </div>
    )
  }
}

export default Contact

exports.data = {
  title: "The Contact Page"
}
