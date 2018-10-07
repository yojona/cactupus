import React, { Component } from 'react'
import Layout from './components/Layout'
import Theme from './Theme'
import Pane from './components/Pane'
import MainMenu from './components/Menu/'
import Canvas from './components/Canvas'
import Workspace from './components/Workspace'
import Open from './components/Open'
import Store from './Store'
import Control from './components/Pane/Control'
import StatusBar from './components/StatusBar'
import './master.css'
import Area from './components/Area'
import ToolBar from './components/ToolBar'

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
            <Control label='Brightness' value={Store.data.levels.brightness} min={0} max={200} onChange={value => Store.setLevel('brightness', value)} />
            <Control label='Contrast' value={Store.data.levels.contrast} min={0} max={200} onChange={value => Store.setLevel('contrast', value)} />
            <Control label='Saturation' value={Store.data.levels.saturation} min={0} max={200} onChange={value => Store.setLevel('saturation', value)} />
            <Control label='Grayscale' value={Store.data.levels.grayscale} min={0} max={200} onChange={value => Store.setLevel('grayscale', value)} />
            <Control label='Sepia' value={Store.data.levels.sepia} min={0} max={200} onChange={value => Store.setLevel('sepia', value)} />
            <Control label='Hue' value={Store.data.levels.hue} min={0} max={360} onChange={value => Store.setLevel('hue', value)} />
            <Control label='Blur' value={Store.data.levels.blur} min={0} max={20} onChange={value => Store.setLevel('blur', value)} />
            <Control label='Invert' value={Store.data.levels.invert} min={0} max={100} onChange={value => Store.setLevel('invert', value)} />
          </Pane>
          <Canvas zoom={() => Store.getZoom()} />
        </Workspace>
        <StatusBar />
        <Open />
      </Layout>
    )
  }
}
