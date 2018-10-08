import Mafuba from 'mafuba'
import * as Mutations from './Mutations'

export default new Mafuba({
  data: {
    title: 'Corico Photo Editor',
    fileName: 'Untitled',
    photoLoaded: false,
    mirrored: false,
    flipped: false,
    fileSize: 0,
    zoom: 1,
    levels: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      hue: 360,
      blur: 0,
      invert: 0
    },
    overlay: {
      style: 'rgba(0, 0, 0, 0)',
      blendMode: 'source-over'
    },
    history: [],
    future: []
  },
  mutations: Mutations
})
