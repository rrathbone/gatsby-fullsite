import React, { Component } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Legal extends Component {
  render () {
    return (
      <div className="media-page">
      <Header />

      <section id="media-page">
        <h1>Legal page</h1>
      </section>

      <Footer />

    </div>
    )
  }
}

export default Legal

exports.data = {
  title: "The Legal Page"
}
