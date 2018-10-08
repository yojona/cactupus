import React from 'react'

export default function OnlyChrome () {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    width: '100vw',
    cursor: 'default',
    WebkitUserSelect: 'none',
    userSelect: 'none',
    height: '100vh'
  }

  return (
    (!!window.chrome && !!window.chrome.webstore) ||
    <div style={style}>
      {
        <span> Sorry, this editor only works with Google Chrome for now :c </span>
      }
    </div>
  )
}
