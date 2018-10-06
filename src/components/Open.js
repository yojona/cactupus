import React, { Component } from 'react'
import Store from '../Store'

export default class Open extends Component {

  load (e) {
    const photo = e.target.files[0]
    if (photo) {
      Store.load(photo)
    }
  }

  render () {
    return (
      <input
        id='inputFile'
        type='file' hidden
        accept='.jpg, jpeg, .png, .bmp'
        onChange={this.load}
      />
    )
  }
}
