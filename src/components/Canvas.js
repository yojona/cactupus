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
      { !Store.data.photoLoaded && <span style={styles.drop}> Drop your photo here </span>}
      <canvas
        id='canvash'
        width={0}
        height={0}
        style={{display: Store.data.photoLoaded ? 'block' : 'none'}}
      />
    </div>
  }
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  drop: {
    userSelect: 'none',
    fontSize: 24,
    fontWeight: 'bold',
    color: Theme.TEXT.DARK
  }
}
