import React, { Component } from 'react'
import Theme from '../../Theme'

export default class Control extends Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
  }

  getRelativeValue (value, min, max) {
    return ((value - min) * 100) / (max - min)
  }

  onChange (e) {
    this.updateRange(e.target.value)
    if (this.props.onChange) this.props.onChange(e)
  }

  updateRange (value = this.props.value) {
    const min = this.props.min || 0
    const max = this.props.max || 100
    this.refs.slider.style.background = `
      linear-gradient(to right, 
        ${Theme.PRIMARY} ${this.getRelativeValue(value, min, max)}%, 
        ${Theme.MENU.ITEM} ${this.getRelativeValue(value, min, max)}%`
  }

  componentDidMount () {
    this.updateRange()
  }

  componentWillReceiveProps (previus, current) {
    if (previus.value !== current.value) {
      this.updateRange(previus.value)
    }
  }

  render () {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <span style={styles.label}>{this.props.label}</span>
        </div>
        <div style={styles.box2}>
          <input
            ref='slider'
            type='range'
            min={this.props.min || 0}
            max={this.props.max || 100}
            value={this.props.value}
            style={styles.control}
            onChange={this.onChange}
            onMouseDown={this.onChange}
          />
        </div>

      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    ':hover': 'background: red'
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '40%',
    height: 32,
    marginLeft: 16,
    marginTop: 8

  },
  box2: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 32,
    marginTop: 8,
    marginRight: 16
  },
  label: {
    color: Theme.TEXT.DARK,
    paddingRight: 8,
    fontSize: 13
  },
  control: {
    width: '100%',
    height: 8,
    outline: 0,
    WebkitAppearance: 'none',
    border: '0 none',
    color: 'transparent',
    overflow: 'visible',
    background: Theme.MENU.ITEM,
    borderRadius: Theme.BORDER.RADIUS
  }
}
