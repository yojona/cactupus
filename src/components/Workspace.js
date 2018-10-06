import React from 'react'

export default function Workspace (props) {
  return <div style={
    {
      display: 'flex',
      flexDirection: 'row',
      height: '100%'
    }
  }>
    {props.children}
  </div>
}
