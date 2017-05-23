import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'

import Header from '../components/common/header'

class Template extends React.Component {
  render () {
    const { children } = this.props

    return (
      <Container>
        <Header />
        {children}
      </Container>
    )
  }
}

Template.propTypes = {
  children: PropTypes.any
}

export default Template
