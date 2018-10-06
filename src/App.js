import React, { Component } from 'react'
import Layout from './components/Layout'
import Theme from './Theme'
import Pane from './components/Pane'
import MainMenu from './components/Menu/'
import Canvas from './components/Canvas'
import Workspace from './components/Workspace'
import Open from './components/Open'
import Store from './Store'
import Control from './components/Pane/Control';

export default class App extends Component {
  componentWillMount () {
    Store.link(this)
    document.body.style.margin = 0
    document.body.style.fontFamily = 'Roboto, sans-serif'
    document.body.style.background = Theme.BACKGROUND
  }

  componentWillUpdate () {
    document.title = Store.data.title
  }
  render () {
    return (
      <Layout>
        <MainMenu />
        <Workspace>
          <Pane>
            <Control label='Brightness' value={Store.data.levels.brightness} min={0} max={200} onChange={e => Store.setLevel('brightness', e.target.value)} />
            <Control label='Contrast' value={Store.data.levels.contrast} min={0} max={200} onChange={e => Store.setLevel('contrast', e.target.value)} />
            <Control label='Saturation' value={Store.data.levels.saturation} min={0} max={200} onChange={e => Store.setLevel('saturation', e.target.value)} />
            <Control label='Grayscale' value={Store.data.levels.grayscale} min={0} max={200} onChange={e => Store.setLevel('grayscale', e.target.value)} />
            <Control label='Sepia' value={Store.data.levels.sepia} min={0} max={200} onChange={e => Store.setLevel('sepia', e.target.value)} />
            <Control label='Hue' value={Store.data.levels.hue} min={0} max={360} onChange={e => Store.setLevel('hue', e.target.value)} />
            <Control label='Blur' value={Store.data.levels.blur} min={0} max={20} onChange={e => Store.setLevel('blur', e.target.value)} />

          </Pane>
          <Canvas />
        </Workspace>
        <Open />
      </Layout>
    )
  }
}
