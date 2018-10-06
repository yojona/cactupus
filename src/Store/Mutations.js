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
        this.setState({
          title: `${photo.name} - Cactupus`,
          photoLoaded: true
        })
      }
    }, false)
    this.resetFilters()
  }
}

export function resetFilters () {
  const levels = {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: 0,
    sepia: 0,
    hue: 360,
    blur: 0,
    invert: 0
  }
  this.setState({levels})
  this.updateFilters()
}

export function setLevel (name, value) {
  let levels = this.data.levels
  levels[name] = value
  this.updateFilters(value)
  this.setState({levels})
}

export function updateFilters (value) {
  if (this.data.photoLoaded) {
    for (const filter in this.data.levels) {
      Cactupus[filter](this.data.levels[filter])
    }
    Cactupus.render()
  }
}

export function mirrorImage () {
  Cactupus.mirror()
  Cactupus.render()
  this.setState({mirrored: this.data.mirrored})
}

export function flipImage () {
  Cactupus.flip()
  Cactupus.render()
  this.setState({flipped: this.data.flipped})
}

export function rotateImage (degrees) {
  Cactupus.rotate(degrees)
  Cactupus.render()
  this.setState({flipped: this.data.flipped})
}
