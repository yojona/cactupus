import React, { Component } from 'react'

export default class Area extends Component {
  render () {
    return (
      <div style={styles.area}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  area: {

  }
}
