import React from 'react'
import Theme from '../../Theme'

export default function Separator () {
  return (
    <div style={separator} />
  )
}

const separator = {
  width: '100%',
  border: `0.0320rem solid ${Theme.PANE}`
}
