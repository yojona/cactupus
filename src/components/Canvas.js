import React, { Component } from 'react'
import Theme from '../Theme'
import Store from '../Store'

export default class Canvas extends Component {
  dragOver (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  onDrop (e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const types = ['image/jpg', 'image/jpeg', 'image/png']
      if (types.includes(file.type)) {
        Store.load(file)
      }
    }
  }

  render () {
    return <div
      style={styles.container}
      onDrop={e => this.onDrop(e)}
      onDragOver={e => this.dragOver(e)}
    >
      { !Store.data.photoLoaded && (
        <div style={styles.center}>
          <span style={styles.drop}> Drop your photo here </span>
        </div>
      )}
      <canvas
        id='canvash'
        style={{
          display: Store.data.photoLoaded ? 'block' : 'none',
          imageRendering: 'pixelated',
          zoom: Store.data.zoom
        }}
      />
    </div>
  }
}

const styles = {
  container: {
    width: '100%',
    margin: '10px 10px',
    overflow: 'auto',
  },
  drop: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.TEXT.DARK,
    cursor: 'default',
    userSelect: 'none',
    WebkitUserSelect: 'none'
  },
  sub: {
    color: 'white'
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
}
