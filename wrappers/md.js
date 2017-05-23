import React, { PropTypes } from 'react'
import { config } from 'config'

import '../css/main.css'

class MarkdownWrapperPosts extends React.Component {
  render () {
    console.log(this.prosp);
    const { route } = this.props
    const data = route.page.data

    return (
      <div className="markdown-nf">
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    )
  }
}

MarkdownWrapperPosts.propTypes = {
  route: PropTypes.object
}

export default MarkdownWrapperPosts
