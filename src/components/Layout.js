import React from 'react'

export default function Layout (props) {
  return (
    <div style={styles.layout} onContextMenu={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}>
      {props.children}
    </div>
  )
}

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }
}
