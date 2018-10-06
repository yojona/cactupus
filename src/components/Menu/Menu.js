import React, { Component } from 'react'
import Theme from '../../Theme'

export default class MenuItem extends Component {
  mouseEnter () {
    this.refs.label.style.color = Theme.TEXT.LIGHT
    this.refs.li.style.background = Theme.PRIMARY
    this.refs.item.style.display = 'block'
  }

  mouseLeave () {
    this.refs.label.style.color = Theme.TEXT.DEFAULT
    this.refs.li.style.background = 'transparent'
    this.refs.item.style.display = 'none'
  }

  onClick () {
    this.mouseLeave()
  }

  render () {
    return (
      <li
        ref='li'
        onMouseEnter={this.mouseEnter.bind(this)}
        onMouseLeave={this.mouseLeave.bind(this)}
        style={styles.dropdown}
      >
        <span ref='label' style={styles.label}>{this.props.label}</span>
        <ul ref='item' style={styles.content} onClick={this.onClick.bind(this)}>
          {this.props.children}
        </ul>
      </li>
    )
  }
}

const styles = {
  label: {
    fontSize: 13,
    color: Theme.TEXT.DEFAULT
  },
  dropdown: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    outline: 'none',
    minWidth: 56,
    height: 32,
    color: Theme.TEXT.DEFAULT
  },
  content: {
    display: 'none',
    position: 'absolute',
    minWidth: 56,
    width: 'fit-content',
    fontSize: 14,
    top: 32,
    left: 0,
    padding: 0,
    background: Theme.MENU.ITEM,
    opacity: 0.9,
    // backdropFilter: 'blur(4px)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.5)',
    zIndex: 1
  }
}
