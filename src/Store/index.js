import Mafuba from 'mafuba'
import * as Mutations from './Mutations'

export default new Mafuba({
  data: {
    title: 'Fotoship',
    photoLoaded: false,
    loading: false,
    levels: {
      brightness: 0,
      contrast: 0,
      saturation: 0,
      exposure: 0,
      vibrance: 0,
      hue: 0,
      blur: 0
    },
    history: []
  },
  mutations: Mutations
})
