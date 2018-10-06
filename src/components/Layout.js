import React from 'react'

export default function Layout (props) {
  return (
    <div style={styles.layout}>
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
