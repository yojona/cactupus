import Cactus from '../libs/Cactus'
const Cactupus = new Cactus()

export function getCanvas () {
  return document.getElementsByTagName('canvas')[0]
}

export function open () {
  document.getElementById('inputFile').click()
}

export function close () {
  this.resetFilters()
  this.setState({
    title: 'Fotoship',
    photoLoaded: false
  })
}

export function load (photo) {
  const reader = new window.FileReader()

  if (photo) {
    reader.readAsDataURL(photo)
    reader.addEventListener('load', () => {
      const img = new window.Image()
      img.src = reader.result

      img.onload = () => {
        Cactupus.setCanvas(this.getCanvas())
        Cactupus.setImage(img)
        Cactupus.render()
        this.setState({photoLoaded: true})
      }
    }, false)
    this.resetFilters()
  }
}

export function resetFilters () {
  // let levels = this.data.levels
  // for (const setting in levels) {
  //   levels[setting] = 0
  // }
  // this.setState({levels})
  // this.updateFilters()
}

// export function updateFilters () {
//   const self = this
//   if (this.data.photoLoaded) {
//     window.Caman(this.getCanvas(), function () {
//       this.revert()
//       this.brightness(self.data.levels.brightness)
//         .contrast(self.data.levels.contrast)
//         .saturation(self.data.levels.saturation)
//         .hue(self.data.levels.hue)
//         .vibrance(self.data.levels.vibrance)
//         .render()
//     })
//   }
// }
export function setLevel (name, value) {
  let levels = this.data.levels
  levels[name] = value
  this.updateFilters(value)
  this.setState({levels})
}

export function updateFilters (value) {
  for (const filter in this.data.levels) {
    Cactupus[filter](this.data.levels[filter])
  }
  Cactupus.render()
}
