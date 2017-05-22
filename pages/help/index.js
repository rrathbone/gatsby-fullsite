import React, { Component } from 'react'

import Header from '../../components/common/header.js'
import Footer from '../../components/common/footer.js'

class Help extends Component {
  render () {
    return (
      <div className="help-page">
      <Header />

      <section id="help-page">
        <h1>Help page</h1>
      </section>

      <Footer />

    </div>
    )
  }
}

export default Help

exports.data = {
  title: "The Help Page"
}
