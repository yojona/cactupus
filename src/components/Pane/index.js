import React from 'react'
import Theme from '../../Theme'

export default function Pane (props) {
  return (
    <div style={{padding: 2}}>
      <div style={styles.panel}>
        {props.children}
      </div>
    </div>
  )
}

const styles = {
  panel: {
    width: 220,
    height: '100%',
    borderRadius: Theme.BORDER.RADIUS,
    backgroundColor: Theme.PANE
  }
}
