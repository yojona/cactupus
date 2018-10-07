import React from 'react'
import Theme from '../../Theme'

export default class Menu extends React.Component {
  render () {
    return (
      <div style={styles.layout}>
        <ul style={styles.list}>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

const styles = {
  layout: {
    paddingLeft: 16,
    outline: 'none',
    cursor: 'default',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    minHeight: 32,
    height: 32,
    background: Theme.PANE
  },
  list: {
    margin: 0,
    height: 32,
    padding: 0,
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center'
  }
}
