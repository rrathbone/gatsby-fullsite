import React, { PropTypes } from 'react'

import Users from '../components/users'

import '../css/main.css'

class JSONUserWrapper extends React.Component {
  render () {
    console.log('USERS', this.props);
  
    return (
      <div className="users">

      </div>
    )
  }
}
// <div dangerouslySetInnerHTML={{ __html: users.body }} />

// JSONUserWrapper.propTypes = {
//   userRoute: PropTypes.object
// }

export default JSONUserWrapper
