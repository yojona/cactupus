import React, { Component } from 'react'
import Theme from '../Theme'
import Store from '../Store'

export default class StatusBar extends Component {
  render () {
    return (
      <div style={styles.toolbar}>
        <span style={styles.label}> Zoom: {Math.floor(Store.data.zoom * 100)}%</span>
      </div>
    )
  }
}

const styles = {
  toolbar: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 24,
    background: Theme.PANE
  },
  label: {
    color: Theme.TEXT.DARK,
    fontSize: 12,
    paddingLeft: 16,
    paddingRight: 16
  }
}
