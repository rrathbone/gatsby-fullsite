import React, { Component } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Partners extends Component {
  render () {
    return (
      <div className="partners-page">
      <Header />

      <section id="partners-page">
        <h1>Partners page</h1>
      </section>

      <Footer />

    </div>
    )
  }
}

export default Partners

exports.data = {
  title: "The Partners Page"
}
