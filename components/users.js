import React, { PropTypes } from 'react'

import Header from './common/header'

class Users extends React.Component {
  render () {
    // const { markets } = this.props

    return (
      <div className="users-page">
        <Header />
      </div>
    )
  }
}

// Users.propTypes = {
//   markets: PropTypes.array.isRequired
// }

export default Users
