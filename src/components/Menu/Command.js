import React from 'react'
import Theme from '../../Theme'

export default class Command extends React.Component {
  mouseEnter () {
    this.refs.ds.style.background = Theme.PRIMARY
    this.refs.ds.style.color = Theme.TEXT.LIGHT
  }

  mouseLeave () {
    this.refs.ds.style.background = 'transparent'
    this.refs.ds.style.color = Theme.TEXT.DEFAULT
  }

  onClick (e) {
    if (this.props.onClick) this.props.onClick()
  }

  render () {
    return (
      <div ref='ds'
        style={styles.container}
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
        onClick={this.onClick.bind(this)}
      >
        <span>{this.props.label}</span>
        <span>{this.props.shortcut}</span>
      </div>
    )
  }
}

let styles = {
  container: {
    display: 'flex',
    width: 200,
    justifyContent: 'space-between',
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 4,
    marginBottom: 4
  }
}
