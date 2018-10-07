import React, { Component } from 'react'
import Theme from '../Theme'
import Control from './Pane/Control';
import Store from '../Store';

export default class ToolBar extends Component {
  render () {
    return (
      <div style={styles.toolbar}>
        <Control label='Zoom' value={Store.data.zoom} min={0.15} max={10} step={0.01} onChange={value => Store.setZoom(value)} />
      </div>
    )
  }
}

const styles = {
  toolbar: {
    display: 'flex',
    position: 'absolute',
    width: 160,
    top: 48,
    right: 24,
    opacity: 0.85,
    background: Theme.PANE,
    borderRadius: 8

  }
}
