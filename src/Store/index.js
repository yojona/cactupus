import Mafuba from 'mafuba'
import * as Mutations from './Mutations'

export default new Mafuba({
  data: {
    title: 'Cactupus',
    photoLoaded: false,
    loading: false,
    levels: {
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: 0,
      sepia: 0,
      hue: 360,
      blur: 0
    },
    history: []
  },
  mutations: Mutations
})
